<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{

    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'profile_photo_url' => $this->profile_photo_url,
            'notifications_count' => $this->notifications_count,
            'read_notifications_count' => $this->read_notifications_count,
            'roles_count' => $this->roles_count,
            'tokens_count' => $this->tokens_count,
            'unread_notifications_count' => $this->unread_notifications_count,
            'role' => $this->role,
            'observations_count' => $this->observations_count,
        ];
    }
}
