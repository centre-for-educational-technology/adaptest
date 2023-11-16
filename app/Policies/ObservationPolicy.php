<?php

namespace App\Policies;

use App\Models\Observation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class ObservationPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {

    }

    public function view(User $user, Observation $observation): bool
    {
    }

    public function create(User $user): bool
    {
        //allow if logged in user
        return Auth::check();

    }

    public function update(User $user, Observation $observation): bool
    {
    }

    public function delete(User $user, Observation $observation): bool
    {
    }

    public function restore(User $user, Observation $observation): bool
    {
    }

    public function forceDelete(User $user, Observation $observation): bool
    {
    }
}
