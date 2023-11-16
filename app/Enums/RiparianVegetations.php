<?php

namespace App\Enums;

enum RiparianVegetations: int
{
    case METS = 1;
    case PUHMAS = 2;
    case ROHTTAIMED = 3;
    case TAIMESTIK_PUUDUB = 4;

    public function getRiparianVegetationLabel(): string
    {
        return match($this) {
            self::METS => 'mets',
            self::PUHMAS => 'puhmas',
            self::ROHTTAIMED => 'rohttaimed',
            self::TAIMESTIK_PUUDUB => 'taimestik puudub',
        };
    }

    //get a list of labels
    public static function getRiparianVegetationLabels(): array
    {
        $riparianVegetationLabels = [];
        foreach (RiparianVegetations::cases() as $riparianVegetation) {
            $riparianVegetationLabels[$riparianVegetation->value] = $riparianVegetation->getRiparianVegetationLabel();
        }
        return $riparianVegetationLabels;
    }
}
