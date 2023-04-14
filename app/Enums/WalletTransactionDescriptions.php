<?php

namespace App\Enums;

enum WalletTransactionDescriptions: int
{
    case DEPOSIT = 1;
    case TRANSFER = 2;
}
