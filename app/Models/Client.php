<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'middle_name',
        'surname',
        'email',
        'number',
        'website',
        'price',
        'deposit',
    ];

    public function scopeFilter($query, array $filters)
    {
        if ($filters['name']) {
            $query->where('name', 'like', "%" . $filters['name'] . "%")
                ->orWhere('middle_name', 'like', "%" . $filters['name'] . "%");
        }
    }

    public function authorized(User $user)
    {
        return $this->user_id == $user->id;
    }
}
