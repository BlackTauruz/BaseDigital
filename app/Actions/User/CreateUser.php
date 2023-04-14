<?php

namespace App\Actions\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Lorisleiva\Actions\Action;

class CreateUser extends Action
{
    /**
     * Creates a new User.
     */
    public function handle(array $data): User
    {
        $user = (new User);
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);

        $user->save();

        return $user;
    }
}
