<?php

namespace App\Enums;

enum Natures: int
{
    case LOODUSLIK_TAIMESTIK = 1;
    case PEAMISELT_LOODUSLIK_TAIMESTIK = 2;
    case MOODUKALT_MUUDETUD = 3;
    case OLULISELT_MUUDETUD = 4;
    case KALDAVOOND_POLE_LOODUSLIK = 5;

    public function getNatureLabel(): string
    {
        return match($this) {
            self::LOODUSLIK_TAIMESTIK => 'looduslik taimestik',
            self::PEAMISELT_LOODUSLIK_TAIMESTIK => 'peamiselt looduslik taimestik',
            self::MOODUKALT_MUUDETUD => 'mõõdukalt muudetud',
            self::OLULISELT_MUUDETUD => 'oluliselt muudetud',
            self::KALDAVOOND_POLE_LOODUSLIK => 'kaldavöönd pole looduslik',
        };
    }

    //get a list of labels
    public static function getNatureLabels(): array
    {
        $natureLabels = [];
        foreach (Natures::cases() as $nature) {
            $natureLabels[$nature->value] = $nature->getNatureLabel();
        }
        return $natureLabels;
    }

}

