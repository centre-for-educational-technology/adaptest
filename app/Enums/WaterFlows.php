<?php

namespace App\Enums;

enum WaterFlows: int
{
    case VESI_SEISAB = 1;
    case VESI_VOOLAB_AEGLASELT = 2;
    case VESI_VOOLAB_KIIRESTI = 3;

    public function getWaterFlowLabel(): string
    {
        return match($this) {
            self::VESI_SEISAB => 'vesi seisab',
            self::VESI_VOOLAB_AEGLASELT => 'vesi voolab aeglaselt',
            self::VESI_VOOLAB_KIIRESTI => 'vesi voolab kiiresti',
        };
    }

    //get a list of labels
    public static function getWaterFlowLabels(): array
    {
        $waterFlowLabels = [];
        foreach (WaterFlows::cases() as $waterFlow) {
            $waterFlowLabels[$waterFlow->value] = $waterFlow->getWaterFlowLabel();
        }
        return $waterFlowLabels;
    }

}
