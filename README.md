<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Desafio

<h6> – uma aplicação que permita registrar, atualizar, exibir e deletar usuários administradores de um sistema. </h6>

## Desenvolvimento
Para o desenvolvimento do desafio foram utilizadas algumas ferramentas e tecnologias:
- Laravel;
- ReactJS;
- MySQL;
- XAMPP;
- PHPStorm;

A aplicação conta com duas classes modelo, sendo elas Admin e Endereço, sendo essas as tabelas do banco de dados. A controller AdminController controla a chamada da view welcome.blade.php a partir das rotas e realiza as ações necessárias quanto ao cadastro, a edição de dados, a visualização das informações e a exclusão de dados dos administradores. A view welcome permite a chamada das nossas páginas JS: Home (permite o cadastro de um novo administrador), Lista (mostra todos os administradores cadastrados, permitindo a edição e exclusão) e Editar (permite editar dados de um administrador específico, escolhido a partir da lista).

## Dump
O arquivo dump do banco de dados pode ser encontrado no arquivo capittalx.sql do repositório.

## Demonstração
A demonstração do funcionamento da aplicação pode ser conferida através do link: https://drive.google.com/file/d/1HWQPFK8EEjG5Sa4bfMVrromO14-FLRSf/view?usp=sharing.
