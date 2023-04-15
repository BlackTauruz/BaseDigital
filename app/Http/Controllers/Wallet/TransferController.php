<?php

namespace App\Http\Controllers\Wallet;

use App\Actions\Wallet\TransferUserWallet;
use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\TransferRequest;

class TransferController extends Controller
{
    public function __invoke(TransferRequest $request)
    {
        TransferUserWallet::make()->handle($request->user(), $request->validated());

        return back()->with('success', 'Transferência realizado com sucesso!');
    }
}
