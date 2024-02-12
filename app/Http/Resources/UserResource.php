<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'remember_token' => $this->remember_token,
            'current_team_id' => $this->current_team_id,
            'profile_photo_path' => $this->profile_photo_path,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'two_factor_secret' => $this->two_factor_secret,
            'two_factor_recovery_codes' => $this->two_factor_recovery_codes,
            'two_factor_confirmed_at' => $this->two_factor_confirmed_at,
            'profile_photo_url' => $this->profile_photo_url,
            'notifications_count' => $this->notifications_count,
            'read_notifications_count' => $this->read_notifications_count,
            'roles_count' => $this->roles_count,
            'tokens_count' => $this->tokens_count,
            'unread_notifications_count' => $this->unread_notifications_count,
        ];
    }
}
