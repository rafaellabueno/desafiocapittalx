<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Endereco;

class Admin extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'admins';

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $schema = 'public';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome', 'sobrenome', 'rg', 'orgao', 'cpf', 'telefone', 'data', 'nacionalidade', 'nome_pai', 'nome_mae',
        'estado_civil', 'regime_casamento', 'email', 'endereco_id'
    ];

    public function endereco()
    {
        return $this->hasOne(Endereco::class, 'id', 'endereco_id');
    }
}
