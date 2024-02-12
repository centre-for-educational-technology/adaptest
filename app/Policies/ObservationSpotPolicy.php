<?php

namespace App\Policies;

use App\Models\ObservationSpot;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class ObservationSpotPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        //allow if logged in user and role is admin
        return Auth::check() && $user->roles->contains('name', 'admin');
    }

    public function view(User $user, ObservationSpot $observationSpot): bool
    {
        //allow if logged in user
        return Auth::check();

    }

    public function create(User $user): bool
    {
    }

    public function update(User $user, ObservationSpot $observationSpot): bool
    {

        //author or admin
        return $user->id === $observationSpot->user_id || $user->roles->contains('name', 'admin');
    }

    public function delete(User $user, ObservationSpot $observationSpot): bool
    {


        //author or admin
        return true;

    }

    public function restore(User $user, ObservationSpot $observationSpot): bool
    {
    }

    public function forceDelete(User $user, ObservationSpot $observationSpot): bool
    {
    }
}
