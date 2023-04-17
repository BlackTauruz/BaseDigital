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
        return User::create([
            'name' => $data['name'],
            'type' => $data['type'],
            'document' => $data['document'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
