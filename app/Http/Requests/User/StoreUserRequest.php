<?php

namespace App\Http\Requests\User;

use App\Enums\UserTypes;
use App\Models\User;
use App\Rules\Cnpj;
use App\Rules\Cpf;
use App\Rules\Name;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    protected function prepareForValidation(): void
    {
        $this->merge([
            'document' => Str::remove(['.', '-', '/'], $this->document),
        ]);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', new Name()],
            'type' => ['required', 'int', new Enum(UserTypes::class)],
            'document' => ['required', 'string', 'max:14', 'unique:'.User::class, $this->type == UserTypes::USER() ? new Cpf() : new Cnpj()],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Password::defaults()],
        ];
    }
}
