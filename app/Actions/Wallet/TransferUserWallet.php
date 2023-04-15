<?php

namespace App\Actions\Wallet;

use App\Enums\WalletTransactionDescriptions;
use App\Models\User;
use App\Models\WalletTransaction;
use Illuminate\Support\Facades\Http;
use Lorisleiva\Actions\Action;

class TransferUserWallet extends Action
{
    public function handle(User $user, array $data): WalletTransaction
    {
        if ($this->checkAuthorizingService()) {
            throw new \Exception('A transferência não pode ser realizada agora. Tente novamente mais tarde.');
        }

        $toWallet = User::where('document', $data['document'])->first()->wallet;

        if ($toWallet->id == $user->wallet->id) {
            throw new \Exception('Não é possível transferir dinheiro para você mesmo!');
        }

        $transaction = $user->wallet->transactions()->create([
            'from_id' => $toWallet->id,
            'description' => WalletTransactionDescriptions::TRANSFER(),
            'previous_balance' => $user->wallet->getRawOriginal('balance'),
            'new_balance' => $user->wallet->getRawOriginal('balance') - $data['amount'],
            'difference' => $data['amount'],
        ]);

        $user->wallet->update([
            'balance' => $user->wallet->getRawOriginal('balance') - $data['amount'],
        ]);

        $toWallet->update([
            'balance' => $toWallet->getRawOriginal('balance') + $data['amount'],
        ]);

        return $transaction;
    }

    public function checkAuthorizingService(): bool
    {
        $response = Http::get('https://run.mocky.io/v3/f2fe9a2d-090f-4129-b9bf-70d283c97d5c');

        return $response->failed() || ! $response->object()->messagem == 'autorizado';
    }
}
