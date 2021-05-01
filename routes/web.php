<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Rotas

//Cadastro
Route::get('/home', function () {
    return view('welcome');
})->name('home');
Route::get('/','App\Http\Controllers\AdminController@index');
Route::post('/cadastra-admin','App\Http\Controllers\AdminController@cadastra');

///Lista
Route::get('/lista-admin','App\Http\Controllers\AdminController@lista')->name('lista');
Route::get('/dados-admin','App\Http\Controllers\AdminController@dadosAdministradores')->name('dados');

//Deleta
Route::get('/exclui-admin/{key}','App\Http\Controllers\AdminController@delete');

//Edita
Route::get('/editar-admin/{key}','App\Http\Controllers\AdminController@editar');
Route::post('/edita-admin','App\Http\Controllers\AdminController@edita');
Route::get('/dados/{key}','App\Http\Controllers\AdminController@dadosAdminRg');