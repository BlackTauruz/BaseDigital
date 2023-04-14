<?php

namespace App\Actions\Auth;

use Illuminate\Support\Facades\Auth;
use Lorisleiva\Actions\Action;

class Unauthenticate extends Action
{
    /**
     *  Unauthenticate user.
     */
    public function handle(string $guard): void
    {
        Auth::guard($guard)->logout();
    }
}
