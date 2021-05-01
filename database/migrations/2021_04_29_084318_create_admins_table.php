<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome');
            $table->string('sobrenome');
            $table->bigInteger('rg')->unique();
            $table->string('orgao');
            $table->bigInteger('cpf')->unique();
            $table->string('telefone');
            $table->date('data');
            $table->string('nacionalidade');
            $table->string('nome_pai');
            $table->string('nome_mae');
            $table->string('estado_civil');
            $table->string('regime_casamento')->nullable();
            $table->string('email')->unique();
            $table->timestamps();
            $table->unsignedBigInteger('endereco_id')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
