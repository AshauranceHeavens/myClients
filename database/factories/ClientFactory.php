<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'user_id' => fake()->name(),
            'name' => fake()->name(),
            'middle_name' => fake()->name(),
            'surname' => fake()->lastName(),
            'number' => fake()->phoneNumber(),
            'email' =>  fake()->email(),
            'website' => fake()->domainName(),
            'price' => fake()->numberBetween(0, 20000),
            'deposit' => fake()->numberBetween(0, 10000),
        ];
    }
}
