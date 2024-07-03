<?php

namespace App\Enums;


enum VegetationCoverages: int
{
    case VAGA_TIHE = 1;
    case HORE = 2;

    public function getVegetationCoverageLabel(): string
    {

        return match ($this) {
            self::VAGA_TIHE => 'väga tihe kuni keskmine',
            self::HORE => 'hõre või puudub',
        };
    }

    //get a list of labels
    public static function getVegetationCoverageLabels(): array
    {
        $vegetationCoveragesLabels = [];
        foreach (VegetationCoverages::cases() as $coverage) {
            $vegetationCoveragesLabels[$coverage->value] = $coverage->getVegetationCoverageLabel();
        }
        return $vegetationCoveragesLabels;

    }
}


