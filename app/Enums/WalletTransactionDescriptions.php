<?php

namespace App\Enums;

use App\Traits\EnumsHelpers;

enum WalletTransactionDescriptions: int
{
    use EnumsHelpers;

    case DEPOSIT = 1;
    case TRANSFER = 2;

    public static function label(string $label): string
    {
        $label = self::from($label);

        return match ($label) {
            self::DEPOSIT => 'Depósito',
            self::TRANSFER => 'Transferência'
        };
    }
}
