<?php

namespace App\Policies;

use App\Models\ObservationSpot;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ObservationSpotPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {

    }

    public function view(User $user, ObservationSpot $observationSpot): bool
    {
    }

    public function create(User $user): bool
    {
    }

    public function update(User $user, ObservationSpot $observationSpot): bool
    {
    }

    public function delete(User $user, ObservationSpot $observationSpot): bool
    {
    }

    public function restore(User $user, ObservationSpot $observationSpot): bool
    {
    }

    public function forceDelete(User $user, ObservationSpot $observationSpot): bool
    {
    }
}