<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'middle_name' => $this->middle_name,
            'surname' => $this->surname,
            'email' => $this->email,
            'created_at' => $this->created_at->format('d/m/Y'),
            'clients' => $this->clients->count(),
        ];
    }
}
