<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
Route::get('/test', function () {
    return 'Laravel is working!';
});

Route::get('/dashboard', function () {
    return view('home');
})->name('dashboard');


 Route::get('/admin/users', function () {
    $users = User::all();   
      return User::all();
 });

Route::get('/api/members', function () {
    // This fetches all users from the database and automatically converts them to JSON
    return response()->json(User::all());
});
require __DIR__.'/auth.php';