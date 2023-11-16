<?php


namespace App\Enums;

enum Bottoms: int
{
    case KIVINE = 1;
    case LIIVANE = 2;
    case TURBANE = 3;
    case MUDANE = 4;

    case SAVINE = 5;

    case TAIMESTIK = 6;

    case KUNSTNIK = 7;


    public function getBottomLabel(): string
    {

        return match ($this) {
            self::KIVINE => 'kivine',
            self::LIIVANE => 'liivane',
            self::TURBANE => 'turbane',
            self::MUDANE => 'mudane',
            self::SAVINE => 'savine',
            self::TAIMESTIK => 'taimestik',
            self::KUNSTNIK => 'kunstlik (betoon vms)',
        };


    }

    //get a list of labels
    public static function getBottomLabels(): array
    {
        $bottomLabels = [];
        foreach (Bottoms::cases() as $bottom) {
            $bottomLabels[$bottom->value] = $bottom->getBottomLabel();
        }
        return $bottomLabels;
    }
}
