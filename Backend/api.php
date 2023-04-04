<?php

use App\Http\Controllers\frontend\BasicController;
use App\Http\Controllers\ProjectController;
use App\Models\Basic;
use App\Models\Category;
use App\Models\Idea;
use App\Models\News;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/basic-fe', function () {
    $basics = Basic::get();
    return response()->json($basics);
});

Route::get('/idea-fe', function () {
    $ideas = Idea::get();
    return response()->json($ideas);
});

Route::get('/news-fe', function () {
    $news = News::get();
    // dd($news);
    return response()->json($news);
});


Route::get('/project-fe', function () {
    $project = Project::get();
    return response()->json($project);
});



Route::get('/design-cat', function () {

    $designcat = DB::table('categories')
        ->where('type',  '=', 'Design')
        ->select('id', 'name')
        ->get();

    return response()->json($designcat);
});


Route::get('/design-item/{id}', [ProjectController::class, 'design_item']);
Route::get('/cat_project/{id}', [ProjectController::class, 'cat_project']);
Route::get('/single_project/{id}', [ProjectController::class, 'single_project']);




// Construction Cat


Route::get('/const-cat', function () {

    $constCat = DB::table('categories')
        ->where('type',  '=', 'Construction')
        ->select('id', 'name')
        ->get();

    return response()->json($constCat);
});




// Route::get('/design-category/{id}', function ($id) {

//     $designTitle = DB::table('categories')
//         ->join('projects', 'categories.id', '=', 'projects.cat_id')
//         ->where('categories.id',  '=',$id)
//         ->select('categories.id', 'categories.name', 'projects.id', 'projects.cat_id', 'projects.name', 'projects.image_01')
//         ->get();

//     return response()->json($designTitle);
// });





// Route::get('/basic-fe', [BasicController::class, 'basic'])->name('basic.fe');
// Route::get('/idea-fe', [BasicController::class, 'idea'])->name('idea-fe');
// Route::get('/news-fe', [BasicController::class, 'news'])->name('news-fe');
// Route::get('/project-fe', [BasicController::class, 'project'])->name('project-fe');

// Route::get('/project-title', [BasicController::class, 'projectTitle'])->name('project-title');
// Route::get('/design-title', [BasicController::class, 'DesignTitle'])->name('design-title');
// Route::get('/construction-title', [BasicController::class, 'ConstructionTitle'])->name('construction-title');

// Route::get('/category-fe', [BasicController::class, 'category'])->name('category-fe');
