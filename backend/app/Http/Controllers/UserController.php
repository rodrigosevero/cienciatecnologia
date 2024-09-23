<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PragmaRX\Google2FAQRCode\Google2FA;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($user, 201);
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }

    public function enable2FA(Request $request)
    {
        $user = $request->user();
        $google2fa = new Google2FA();

        $secret = $google2fa->generateSecretKey();
        $user->google2fa_secret = $secret;
        $user->save();

        return response()->json(['secret' => $secret, 'qrcode' => $google2fa->getQRCodeUrl(
            config('app.name'),
            $user->email,
            $secret
        )], 200);
    }

    public function verify2FA(Request $request)
    {
        $request->validate([
            '2fa_code' => 'required',
        ]);

        $google2fa = new Google2FA();
        $user = $request->user();

        if ($google2fa->verifyKey($user->google2fa_secret, $request->input('2fa_code'))) {
            // Retorne uma resposta JSON
            return response()->json(['message' => '2FA verificado com sucesso.'], 200);
        }

        // Em caso de falha, retorne uma resposta de erro
        return response()->json(['message' => 'Código inválido.'], 403);
    }
}
