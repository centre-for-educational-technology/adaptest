<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     *
     */
    public function index(): InertiaResponse
    {
        // Show all users
        //authorize
        $this->authorize('viewAny', User::class);
        $users = UserResource::collection(User::all());
        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new user.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created user in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate and store the user
    }

    /**
     * Display the specified user.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user): InertiaResponse
    {
        // Show the user
        //Only logged in user
        $this->authorize('view', $user);

        return Inertia::render('Users/Show', [
            //user with observations
            'user' => new UserResource($user),
        ]);

    }

    /**
     * Show the form for editing the specified user.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user): InertiaResponse
    {
        // Edit the user
        //Only admin
        $this->authorize('update', $user);

        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user),
        ]);
    }


    /**
     * Update the specified user in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     */
    public function destroy(User $user)
    {
        // Only admin can delete user
        $this->authorize('delete', $user);

        // Prevent deletion for a specific user id
        if ($user->id === 1) {
            return Redirect::route('users.index')
                ->with('flash.banner', __('This user cannot be deleted.'))
                ->with('flash.bannerStyle', 'danger');
        }

        // Delete the user
        $user->delete();

        return Redirect::route('users.index')
            ->with('flash.banner', __('User has been deleted.'))
            ->with('flash.bannerStyle', 'success');
    }

    public function update(Request $request, User $user)
    {
        // Only admin can update user role
        $this->authorize('update', $user);

        // Prevent role change for a specific user id
        if ($user->id === 1) {
            return Redirect::route('users.edit', $user->id)
                ->with('flash.banner', __('This user role cannot be changed.'))
                ->with('flash.bannerStyle', 'danger');
        }

        // Validate the request data
        $validatedData = $request->validate([
            'role' => 'required|in:admin,user',
        ]);

        // Get the 'admin' role
        $adminRole = Role::where('name', 'admin')->first();

        // Attach the role to the user
        if ($validatedData['role'] === 'admin') {
            $user->attachRole('admin');
        } else {
            $user->roles()->detach($adminRole->id);
        }

        return Redirect::route('users.edit', $user->id)
            ->with('flash.banner', __('User role has been updated.'))
            ->with('flash.bannerStyle', 'success');
    }
}
