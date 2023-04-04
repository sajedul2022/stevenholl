<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $projects = Project::latest()->paginate(5);

        return view('project.index', compact('projects'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        // $category = Category::whereNotIn('id', [1,2])->get();
        $category = Category::get();

        return view('project.create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'cat_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'image_01' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_02' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_03' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_04' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_05' => 'image|mimes:jpeg,png,jpg,giv,svg',
        ]);

        $input = $request->all();

        if ($image = $request->file('image_01')) {
            $destinationPath = "images/";
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_01'] = "$profileImage";
        }

        if ($image = $request->file('image_02')) {
            $destinationPath = "images/";
            $profileImage = date('mdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_02'] = "$profileImage";
        }
        if ($image = $request->file('image_03')) {
            $destinationPath = "images/";
            $profileImage = date('dHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_03'] = "$profileImage";
        }
        if ($image = $request->file('image_04')) {
            $destinationPath = "images/";
            $profileImage = date('ydHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_04'] = "$profileImage";
        }
        if ($image = $request->file('image_05')) {
            $destinationPath = "images/";
            $profileImage = date('HisY') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_05'] = "$profileImage";
        }

        Project::create($input);
        return redirect()->route('project.index')
            ->with('success', 'Product created successfully.');
        // return "Product Created Successfully";
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        // $category = Category::whereNotIn('id', [1,2])->get();
        $category = Category::get();
        return view('project.edit', compact('project', 'category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'cat_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'image_01' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_02' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_03' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_04' => 'image|mimes:jpeg,png,jpg,giv,svg',
            'image_05' => 'image|mimes:jpeg,png,jpg,giv,svg',
        ]);

        $input = $request->all();

        if ($image = $request->file('image_01')) {
            $destinationPath = "images/";
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_01'] = "$profileImage";
        }

        if ($image = $request->file('image_02')) {
            $destinationPath = "images/";
            $profileImage = date('mdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_02'] = "$profileImage";
        }
        if ($image = $request->file('image_03')) {
            $destinationPath = "images/";
            $profileImage = date('dHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_03'] = "$profileImage";
        }
        if ($image = $request->file('image_04')) {
            $destinationPath = "images/";
            $profileImage = date('ydHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_04'] = "$profileImage";
        }
        if ($image = $request->file('image_05')) {
            $destinationPath = "images/";
            $profileImage = date('HisY') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image_05'] = "$profileImage";
        }


        $project->update($input);

        return redirect()->route('project.index')
            ->with('success', ' Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return redirect()->route('project.index')
            ->with('success', 'Deleted successfully');
    }


    public function design_item($id)
    {
        $designTitle = Project::where('cat_id', '=', $id)
            //    ->join('projects', 'categories.id', '=', 'projects.cat_id')
            // ->select('categories.id', 'categories.name', 'projects.id', 'projects.cat_id', 'projects.name', 'projects.image_01')
            ->get();
        return response()->json($designTitle);
    }



    public function cat_project($id)
    {
        // dd('ok');

        $cat_project = DB::table('projects')
            ->select( 'id','name', 'cat_id', 'image_01')
            ->where('cat_id',$id)
            ->get();

        return response()->json($cat_project);
    }





    public function single_project($id)
    {

        $single_project = Project::where('id', '=', $id)
            ->get();

        return response()->json($single_project);
    }


}
