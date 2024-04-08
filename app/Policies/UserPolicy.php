<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        // if logged in
        return $user->id !== null;

    }

    public function view(User $user, User $model): bool
    {
        // if logged in
        return $user->id !== null;

    }

    public function create(User $user): bool
    {
    }

    public function update(User $user, User $model): bool
    {
        // Only admin can update user
        return $user->is_admin;
    }

    public function delete(User $user, User $model): bool
    {
        // Only admin can delete user
        return $user->is_admin;
    }

    public function restore(User $user, User $model): bool
    {
    }

    public function forceDelete(User $user, User $model): bool
    {
    }
}
