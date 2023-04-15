<?php

namespace App\Http\Controllers\Wallet;

use App\Actions\Wallet\DepositUserWallet;
use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\DepositRequest;

class DepositController extends Controller
{
    public function __invoke(DepositRequest $request)
    {
        DepositUserWallet::make()->handle($request->user(), $request->amount);

        return back()->with('success', 'Depósito realizado com sucesso!');
    }
}
