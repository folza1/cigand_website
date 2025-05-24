<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/testuleti-ulesek-files', function () {
    $baseDir = public_path('documents_files/testuleti_ulesek');
    $files = [];

    foreach (File::allFiles($baseDir) as $file) {
        $relativePath = str_replace(public_path(), '', $file->getPathname());
        $files[] = [
            'path' => $relativePath,
            'size_mb' => round($file->getSize() / 1024 / 1024, 2),
            'array_index' => $files ? count($files) : 0,
        ];
    }

    $files = array_reverse($files);

    return response()->json($files);
});
