<?php

namespace App\Actions\Wallet;

use App\Enums\WalletTransactionDescriptions;
use App\Models\User;
use Lorisleiva\Actions\Action;

class DepositUserWallet extends Action
{
    public function handle(User $user, float $amount): void
    {
        $user->wallet->transactions()->create([
            'description' => WalletTransactionDescriptions::DEPOSIT(),
            'previous_balance' => $user->wallet->getRawOriginal('balance'),
            'new_balance' => $user->wallet->getRawOriginal('balance') + $amount,
            'difference' => $amount,
        ]);

        $user->wallet->update([
            'balance' => $user->wallet->getRawOriginal('balance') + $amount,
        ]);
    }
}
