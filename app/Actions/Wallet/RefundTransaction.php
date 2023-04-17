<?php

namespace App\Actions\Wallet;

use App\Exceptions\WalletException;
use App\Models\WalletTransaction;
use Lorisleiva\Actions\Action;

class RefundTransaction extends Action
{
    /**
     * @throws WalletException
     */
    public function handle(WalletTransaction $transaction): void
    {
        if ($transaction->refunded_at != null) {
            throw new WalletException('Transação já reembolsada!');
        }

        if ($transaction->reference->getRawOriginal('balance') < $transaction->getRawOriginal('difference')) {
            throw new WalletException('Saldo insuficiente para reembolsar!');
        }

        $transaction->wallet->update([
            'balance' => $transaction->wallet->getRawOriginal('balance') + $transaction->getRawOriginal('difference'),
        ]);

        $transaction->reference->update([
            'balance' => $transaction->reference->getRawOriginal('balance') - $transaction->getRawOriginal('difference'),
        ]);

        $transaction->update([
            'refunded_at' => now(),
        ]);
    }
}
