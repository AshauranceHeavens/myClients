<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'middle_name' => $this->middle_name,
            'surname' => $this->surname,
            'email' => $this->email,
            'number' => $this->number,
            'price' => $this->price,
            'deposit' => $this->deposit,
            'website' => $this->website,
            'created_at' => $this->created_at->format('Y-m-d')
        ];
    }
}
