<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Endereco;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    //Home
    public function index(){
    	return view('welcome');
    }

    //Cadastra administrador
    public function cadastra(Request $request){
    	$data = $request->all();

        $rg = Admin::where('rg', $data['rg'])->get()->first();
        $cpf = Admin::where('cpf', $data['cpf'])->get()->first();
        $email = Admin::where('email', $data['email'])->get()->first();
       
        if(($rg == null) && $cpf == null && $email == null){

        	$e = Endereco::create([
                'cep' => $data['cep'],
                'logradouro' => $data['logradouro'],
                'numero' => $data['numero'],
                'complemento' => $data['complemento'],
                'bairro' => $data['bairro'],
                'cidade' => $data['cidade'],
                'estado' => $data['estado'],
                'pais' => $data['pais'],
            ]);

            Admin::create([
                'nome' => $data['nome'],
                'sobrenome' => $data['sobrenome'],
                'rg' => $data['rg'],
                'orgao' => $data['orgao'],
                'cpf' => $data['cpf'],
                'telefone' => $data['telefone'],
                'data' => $data['data'],
                'nacionalidade' => $data['nacionalidade'],
                'nome_pai' => $data['nome_pai'],
                'nome_mae' => $data['nome_mae'],
                'estado_civil' => $data['estado_civil'],
                'regime_casamento' => $data['regime_casamento'],
                'email' => $data['email'],
                'endereco_id' => $e['id'],
            ]);

            return "certo";
        }
        else{
            return response()->json(['open' => true]);
        }
    }

    //Página de lista de administradores
    public function lista(){
        return view('welcome');
    }

    //Informações de todos os administradores do sistema
    public function dadosAdministradores(){
        $data = Admin::all();
        return $data;
    }

    //Informações de usuário específico, identificado pelo RG (único) 
    public function dadosAdminRg($rg){
        $id = Admin::where('rg', $rg)->get()->first()->id;
        $data = Admin::with('endereco')->where('id', $id)->get()->first(); 
        return $data;
    }

    public function delete($key){
        $end = Admin::where('email', $key)->get()->first()->endereco_id;
        Admin::where('email',$key)->delete();
        Endereco::where('id',$end)->delete();
        return "ok";
    }

    //Página para editar um administrador
    public function editar(){
        return view('welcome');
    }

    //Edita administrador
    public function edita(Request $request){
        $data = $request->all();

        $adm = Admin::where('rg', $data['rg'])->get()->first();

        if($adm->email != $data['email']){
            $email = Admin::where('email', $data['email'])->get()->first();
           
            if($email != null){
                return response()->json(['open' => true]);
            }
        }
        Endereco::where('id', $adm->endereco_id)->update([
            'cep' => $data['cep'],
            'logradouro' => $data['logradouro'],
            'numero' => $data['numero'],
            'complemento' => $data['complemento'],
            'bairro' => $data['bairro'],
            'cidade' => $data['cidade'],
            'estado' => $data['estado'],
            'pais' => $data['pais'],
        ]);

        Admin::where('rg', $data['rg'])->update([
            'nome' => $data['nome'],
            'sobrenome' => $data['sobrenome'],
            'rg' => $data['rg'],
            'orgao' => $data['orgao'],
            'cpf' => $data['cpf'],
            'telefone' => $data['telefone'],
            'data' => $data['data'],
            'nacionalidade' => $data['nacionalidade'],
            'nome_pai' => $data['nome_pai'],
            'nome_mae' => $data['nome_mae'],
            'estado_civil' => $data['estado_civil'],
            'regime_casamento' => $data['regime_casamento'],
            'email' => $data['email'],
            'endereco_id' => $adm->endereco_id,
        ]);

        return 'certo';
    }
}
