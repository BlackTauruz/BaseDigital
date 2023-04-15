<?php

namespace App\Actions\Wallet;

use App\Enums\WalletTransactionDescriptions;
use App\Models\User;
use Lorisleiva\Actions\Action;

class TransferUserWallet extends Action
{
    public function handle(User $user, array $data): void
    {
        $fromWallet = User::where('document', $data['document'])->first()->wallet;

        if ($fromWallet->id == $user->wallet->id) {
            throw new \Exception('Não é possível transferir dinheiro para você mesmo!');
        }

        $user->wallet->transactions()->create([
            'from_id' => $fromWallet->id,
            'description' => WalletTransactionDescriptions::TRANSFER(),
            'previous_balance' => $user->wallet->getRawOriginal('balance'),
            'new_balance' => $user->wallet->getRawOriginal('balance') - $data['amount'],
            'difference' => $data['amount'],
        ]);

        $user->wallet->update([
            'balance' => $user->wallet->getRawOriginal('balance') - $data['amount'],
        ]);

        $fromWallet->update([
            'balance' => $fromWallet->getRawOriginal('balance') + $data['amount'],
        ]);
    }
}
