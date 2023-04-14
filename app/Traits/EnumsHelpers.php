<?php

namespace App\Traits;

use BackedEnum;

trait EnumsHelpers
{
    /** Return the enum's value when it's $invoked(). */
    public function __invoke()
    {
        return $this instanceof BackedEnum ? $this->value : $this->name;
    }

    /** Return the enum's value or name when it's called ::STATICALLY(). */
    public static function __callStatic($name, $args)
    {
        $cases = static::cases();

        foreach ($cases as $case) {
            if ($case->name === $name) {
                return $case instanceof BackedEnum ? $case->value : $case->name;
            }
        }

        throw new \Exception('Undefined constant', 404);
    }

    /**
     * Return enum values with labels.
     */
    public static function labeledArray(): array
    {
        $values = [];

        foreach (self::cases() as $enum) {
            $values[$enum->value] = self::label($enum->value);
        }

        return $values;
    }
}
