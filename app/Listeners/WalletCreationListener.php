<?php

namespace App\Listeners;

use App\Actions\Wallet\CreateUserWallet;
use Illuminate\Auth\Events\Registered;

class WalletCreationListener
{
    public function handle(Registered $event): void
    {
        CreateUserWallet::make()->handle($event->user);
    }
}
