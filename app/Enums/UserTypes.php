<?php

namespace App\Enums;

use App\Traits\EnumsHelpers;

enum UserTypes: int
{
    use EnumsHelpers;

    case USER = 1;
    case SHOPKEEPER = 2;

    public static function label(string $label): string
    {
        $label = self::from($label);

        return match ($label) {
            self::USER => 'Usuário',
            self::SHOPKEEPER => 'Lojista'
        };
    }
}
