<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddClientRequest;
use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    public function index(Request $request)
    {
        $clients = ClientResource::collection($request->user()->clients()
            ->latest()
            ->filter(['name' => $request->name])
            ->paginate(10));

        return $clients;
    }

    public function store(ClientRequest $request)
    {
        $formFields = $request->validated();

        $request->user()->clients()->create($formFields);

        return response()->json(['message' => 'New client created successfully']);
    }


    public function show(Request $request, Client $client)
    {
        if (!$client->authorized($request->user())) {
            return response()->json(['message' => "You are not allowed to view this client"], 403);
        }

        return response()->json(['client' => new ClientResource($client)]);
    }


    public function update(Client $client, ClientRequest $request)
    {

        if (!$client->authorized($request->user())) {
            return response()->json(['message' => "You are not allowed to update this client"], 403);
        }

        $formFields = $request->validated();

        $client->update($formFields);

        return response()->json(['message' => "$client->name has been updated"]);
    }

    public function destroy(Request $request, Client $client)
    {
        if ($request->user()->id == $client->user_id) {
            $name = $client->name . $client->middle_name . $client->surname;

            $client->delete();

            return response()->json(['message' => "$name has been deleted"]);
        }
        return response()->json(['message' => "you are not allowed to delete this user"]);
    }
}
