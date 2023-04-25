<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FriendFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->firstName(),
            'second_name' => fake()->firstName(),
            'surname' => fake()->lastName(),
            'name' => fake()->name(),
            'DOB' => fake()->date(),
            'number' => fake()->phoneNumber(),
            'email' => fake()->safeEmail(),
            'notes' => fake()->paragraph(3),
        ];
    }
}
