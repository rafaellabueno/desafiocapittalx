<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Admin;

class Endereco extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'enderecos';

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
        'cep', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'pais'
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
