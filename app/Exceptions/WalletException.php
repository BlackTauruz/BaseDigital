<?php

namespace App\Exceptions;

use Exception;

class WalletException extends Exception
{
    public function render(): \Illuminate\Http\RedirectResponse
    {
        return back()->with('info', $this->getMessage());
    }
}
