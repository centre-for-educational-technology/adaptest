<?php

namespace App\Enums;

enum AquaticVegetations: int
{
    case VEEALUNE = 1;
    case UJULEHTEDEGA = 2;
    case VEEST_VALJAULATUV = 3;
    case PUUDUB = 4;

    public function getAquaticVegetationLabel(): string
    {
        return match ($this) {
            self::VEEALUNE => 'veealune',
            self::UJULEHTEDEGA => 'ujulehtedega',
            self::VEEST_VALJAULATUV => 'veest väljaulatuv',
            self::PUUDUB => 'puudub',
        };

    }

    //get a list of labels
    public static function getAquaticVegetationLabels(): array
    {
        $aquaticVegetationLabels = [];
        foreach (AquaticVegetations::cases() as $aquaticVegetation) {
            $aquaticVegetationLabels[$aquaticVegetation->value] = $aquaticVegetation->getAquaticVegetationLabel();
        }
        return $aquaticVegetationLabels;
    }
}
