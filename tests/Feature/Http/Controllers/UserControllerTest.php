<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(\Database\Seeders\RolesSeeder::class);


    }

    public function test_index_displays_view()
    {
        // Create a user
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get(route('users.index'));

        $response->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Users/Index')
            ->has('users'));
    }

    public function test_show_displays_view()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get(route('users.show', $user));

        $response->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Users/Show')
            ->has('user')
            ->where('user.id', $user->id));
    }

    public function test_update_cannot_change_admin_role()
    {
        // Create a user with id 1
        $user = User::factory()->create(['id' => 1]);

        // Attach 'admin' role to the user
        $user->attachRole('admin');

        // Attempt to update the user's role
        $data = [
            'role' => 'user',
        ];

        $response = $this->actingAs($user)->put(route('users.update', $user), $data);

        // Assert that the response is a redirect to the edit page with an error message
        $response->assertRedirect(route('users.edit', $user->id))
            ->assertSessionHas('flash.banner', 'This user role cannot be changed.')
            ->assertSessionHas('flash.bannerStyle', 'danger');

        // Refresh user instance to get the latest data from the database
        $user->refresh();

        // Assert the user still has 'admin' role
        $this->assertTrue($user->roles->contains('name', 'admin'));

    }

    public function test_update_updates_and_redirects()
    {
        // Create a user with id 1
        $adminUser = User::factory()->create(['id' => 1]);

        // Attach 'admin' role to the user
        $adminUser->attachRole('admin');

        // Create another user
        $user = User::factory()->create();

        // Attempt to update the user's role to 'admin'
        $data = [
            'role' => 'admin',
        ];

        $response = $this->actingAs($adminUser)->put(route('users.update', $user), $data);

        // Assert that the response is a redirect to the edit page with a success message
        $response->assertRedirect(route('users.edit', $user->id))
            ->assertSessionHas('flash.banner', 'User role has been updated.')
            ->assertSessionHas('flash.bannerStyle', 'success');

        // Refresh user instance to get the latest data from the database
        $user->refresh();

        // Assert the user now has 'admin' role
        $this->assertTrue($user->roles->contains('name', 'admin'));

        // Attempt to update the user's role to 'user'
        $data = [
            'role' => 'user',
        ];

        $response = $this->actingAs($adminUser)->put(route('users.update', $user), $data);

        // Assert that the response is a redirect to the edit page with a success message
        $response->assertRedirect(route('users.edit', $user->id))
            ->assertSessionHas('flash.banner', 'User role has been updated.')
            ->assertSessionHas('flash.bannerStyle', 'success');

        // Refresh user instance to get the latest data from the database
        $user->refresh();

        // Assert the user no longer has 'admin' role
        $this->assertFalse($user->roles->contains('name', 'admin'));
    }

    public function test_destroy_deletes_and_redirects()
    {
        // Create a user
        $user = User::factory()->create();

        // Attach 'admin' role to the user
        $user->attachRole('admin');

        // Create another user to be deleted
        $userToDelete = User::factory()->create();

        $response = $this->actingAs($user)->delete(route('users.destroy', $userToDelete));

        $response->assertRedirect(route('users.index'));
    }
}
