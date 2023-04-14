<?php

namespace App\Actions\Wallet;

use App\Models\User;
use Lorisleiva\Actions\Action;

class CreateUserWallet extends Action
{
    public function handle(User $user)
    {
        return $user->wallet()->create();
    }
}
