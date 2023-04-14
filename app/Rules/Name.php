<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Name implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (count(explode(' ', $value)) < 2) {
            $fail('validation.custom.name')->translate();
        }
    }
}
