<?php

namespace App\Http\Controllers\Wallet;

use App\Actions\Wallet\TransferUserWallet;
use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\TransferRequest;
use App\Notifications\ReceivedTransferNotification;

class TransferController extends Controller
{
    public function __invoke(TransferRequest $request)
    {
        $transaction = TransferUserWallet::make()->handle($request->user(), $request->validated());

        $transaction->wallet->user->notify((new ReceivedTransferNotification()));

        return back()->with('success', 'Transferência realizado com sucesso!');
    }
}
