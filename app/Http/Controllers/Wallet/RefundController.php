<?php

namespace App\Http\Controllers\Wallet;

use App\Actions\Wallet\RefundTransaction;
use App\Http\Controllers\Controller;
use App\Models\WalletTransaction;
use Illuminate\Http\Request;

class RefundController extends Controller
{
    public function __invoke(Request $request, WalletTransaction $transaction)
    {
        RefundTransaction::make()->handle($transaction);

        return back()->with('success', 'Transferência reembolsada com sucesso!');
    }
}
