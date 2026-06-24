<?php
use App\Models\ElshadayData; // Example model

Route::get('/elshaday-web-info', function () {
    // Fetch data and return it as JSON
    return response()->json([
        'status' => 'success',
        'data' => ElshadayData::all()
    ]);
});