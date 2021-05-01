import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import {TextField, Button, MenuItem, Box, Grid, Collapse} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const currencies = [
{
  value: 'solteiro',
  label: 'Solteiro',
},
{
  value: 'casado',
  label: 'Casado',
},
{
  value: 'separado',
  label: 'Separado',
},
{
  value: 'divorciado',
  label: 'Divorciado',
},
{
  value: 'viuvo',
  label: 'Viúvo',
},
];

const currencies2 = [
{
  value: 'comunhao_parcial',
  label: 'Comunhão parcial',
},
{
  value: 'comunhao_universal',
  label: 'Comunhão universal',
},
{
  value: 'participacao',
  label: 'Participação final nos aquestos',
},
{
  value: 'separacao',
  label: 'Separação convencional de bens',
},
{
  value: 'nao_aplica',
  label: 'Não se aplica',
},
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function EditarAdmin() {

  const handleSubmit= (e) => {
    axios.post('./../edita-admin', {
      nome: nome,
      sobrenome: sobrenome,
      rg: rg,
      orgao: orgao,
      cpf: cpf,
      telefone: telefone,
      data: data,
      nacionalidade: nacionalidade,
      nome_pai: nome_pai,
      nome_mae: nome_mae,
      estado_civil: estado_civil,
      regime_casamento: regime_casamento,
      email: email,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade, cidade, 
      estado: estado,
      pais: pais
    })
    .then(function (response) {
      if(response.data.open == true){
        setOpen(true);
      }
      else{
        window.location.href="./../lista-admin";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  }

  function HeaderView() {
    return location.pathname;
  }

  const s = HeaderView();
  var string = s.split('/');

  useEffect(()  =>{
    if(nome == ''){
      axios.get('./../dados/'+string[string.length - 1])
      .then((response) =>{
       setNome(response.data.nome);
       setSobrenome(response.data.sobrenome);
       setRg(response.data.rg);
       setOrgao(response.data.orgao);
       setCpf(response.data.cpf);
       setTelefone(response.data.telefone);
       setData(response.data.data);
       setNacionalidade(response.data.nacionalidade);
       setNomePai(response.data.nome_pai);
       setNomeMae(response.data.nome_mae);
       setEstadoCivil(response.data.estado_civil);
       setRegime(response.data.regime_casamento);
       setEmail(response.data.email);
       setCep(response.data.endereco.cep);
       setLogradouro(response.data.endereco.logradouro);
       setNumero(response.data.endereco.numero);
       setComplemento(response.data.endereco.complemento);
       setBairro(response.data.endereco.bairro);
       setCidade(response.data.endereco.cidade);
       setEstado(response.data.endereco.estado);
       setPais(response.data.endereco.pais);
       return 'true';
     })
      .catch(error=>{
        console.log(error)
      })
    }
  }, [nome])

  const width = 550;
  const classes = useStyles();
  const [dados, setDados] = useState(null);
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [orgao, setOrgao] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [data, setData] = React.useState('');
  const [nacionalidade, setNacionalidade] = React.useState('');
  const [nome_pai, setNomePai] = React.useState('');
  const [nome_mae, setNomeMae] = React.useState('');
  const [estado_civil, setEstadoCivil] = React.useState('solteiro');
  const [regime_casamento, setRegime] = React.useState('comunhao_parcial');
  const [email, setEmail] = React.useState('');

  const [cep, setCep] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [complemento, setComplemento] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [pais, setPais] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <Form onSubmit={e => {handleSubmit(e)}}>
    <Grid container justify="center">
    <Grid item>
    Altere aqui seus dados:
    </Grid>
    <Grid item xs={12}>
    <Box m={2}>
    <Grid
    container
    justify="space-between"
    alignItems="center" 
    >
    <Grid item>
    <TextField value={nome} onChange={e => setNome(e.target.value)} style={{ width }} 
    name="nome" type="text" label="NOME" variant="outlined" size="small" required/>
    </Grid>
    <Grid item>
    <TextField value={sobrenome} onChange={e => setSobrenome(e.target.value)} style={{ width }} 
    name="sobrenome" type="text" label="SOBRENOME" variant="outlined" size="small" required/>
    </Grid>
    </Grid>
    </Box>
    </Grid>
    

    <Grid item xs={12}>
    <Box m={2}>
    <Grid
    container
    justify="space-between"
    alignItems="center" 
    >
    <Grid item>
    <TextField value={rg} onChange={e => setRg(e.target.value)} style={{width: 370}} 
    name="rg" type="text" label="RG" variant="outlined" size="small" required disabled/>
    </Grid>
    <Grid item>
    <TextField value={orgao} onChange={e => setOrgao(e.target.value)} style={{width: 370}} 
    name="orgao" type="text" label="ORGÃO EMISSOR" variant="outlined" size="small" required/>
    </Grid>
    <Grid item>
    <TextField value={cpf} onChange={e => setCpf(e.target.value)} style={{width: 370}} 
    name="cpf" type="text" label="CPF" variant="outlined" size="small" required disabled/>
    </Grid>
    </Grid>
    </Box>
    </Grid>

    <Grid item xs={12}>
    <Box m={2}>
    <Grid
    container
    justify="space-between"
    alignItems="center" 
    >
    <Grid item>
    <TextField value={telefone} onChange={e => setTelefone(e.target.value)} style={{width: 370}} 
    name="telefone" type="text" label="TELEFONE" variant="outlined" size="small" required/>
    </Grid>
    <Grid item>
    <TextField value={data} onChange={e => setData(e.target.value)} style={{width: 370}} name="data" 
    type="date" label="DATA DE NASCIMENTO" variant="outlined" size="small" className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    required/>
    </Grid>
    <Grid item>
    <TextField  value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} style={{width: 370}} 
    name="nacionalidade" type="text" label="NACIONALIDADE" variant="outlined" size="small" required/>
    </Grid>
    </Grid>
    </Box>
    </Grid>


    <Grid item xs={12}>
    <Box m={2}>
    <Grid
    container
    justify="space-between"
    alignItems="center" 
    >
    <Grid item>
    <TextField value={nome_pai} onChange={e => setNomePai(e.target.value)}  style={{ width }}  name="nome_pai" 
    type="text" label="NOME DO PAI" variant="outlined"  size="small" required/>
    </Grid>
    <Grid item>
    <TextField value={nome_mae} onChange={e => setNomeMae(e.target.value)}  style={{ width }}  name="nome_mae"
    type="text" label="NOME DA MÃE" variant="outlined"  size="small" required/>
    </Grid>
    </Grid>
    </Box>
    </Grid>

    <Grid item xs={12}>
    <Box m={2}>
    <Grid
    container
    justify="space-between"
    alignItems="center" 
    >
    <Grid item>
    <TextField
    style={{ width }}
    select
    label="Estado Civil"
    value={estado_civil}
    onChange={e => setEstadoCivil(e.target.value)}
    variant="outlined"
    name="estado_civil"
    size="small"
    >
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
      {option.label}
      </MenuItem>
      ))}
      </TextField>
      </Grid>
      <Grid item>
      <TextField
      style={{ width }}
      select
      label="Regime de Casamento"
      value={regime_casamento}
      onChange={e => setRegime(e.target.value)}
      variant="outlined"
      name="regime_casamento"
      size="small"
      >
      {currencies2.map((option) => (
        <MenuItem key={option.value} value={option.value}>
        {option.label}
        </MenuItem>
        ))}
        </TextField>
        </Grid>
        </Grid>
        </Box>
        </Grid>
        

        <Grid item xs={12}>
        <Box m={2}>
        <Grid
        container
        justify="center"
        alignItems="center" 
        >
        <TextField value={email} onChange={e => setEmail(e.target.value)} style={{ width }} name="email" 
        type="email" label="E-MAIL" variant="outlined" size="small" required/> 
        </Grid>
        </Box>
        </Grid>

        </Grid>

        <Grid container justify="center">
        <Grid item>
        Endereço Residencial:
        </Grid>

        <Grid item xs={12}>
        <Box m={2}>
        <Grid
        container
        justify="space-between"
        alignItems="center" 
        >
        <Grid item>
        <TextField value={cep} onChange={e => setCep(e.target.value)}  style={{ width }} name="cep" type="text" 
        label="CEP" variant="outlined" size="small" required/>
        </Grid>
        <Grid item>
        <TextField
        style={{ width }}
        name="logradouro"
        label="LOGRADOURO"
        multiline
        rows={3}
        variant="outlined"
        size="small"
        value={logradouro} 
        onChange={e => setLogradouro(e.target.value)} 
        required
        />
        </Grid>
        </Grid>
        </Box>
        </Grid>
        <Grid item xs={12}>
        <Box m={2}>
        <Grid
        container
        justify="space-between"
        alignItems="center" 
        >
        <Grid item>
        <TextField value={numero} onChange={e => setNumero(e.target.value)}  style={{ width }}  name="numero" 
        type="text" label="NÚMERO" variant="outlined" size="small" required/>
        </Grid>
        <Grid item>
        <TextField value={complemento} onChange={e => setComplemento(e.target.value)}  style={{ width }}  
        name="complemento" type="text" label="COMPLEMENTO" variant="outlined" size="small" required/>
        </Grid>
        </Grid>
        </Box>
        </Grid>

        <Grid item xs={12}>
        <Box m={2}>
        <Grid
        container
        justify="space-between"
        alignItems="center" 
        >
        <Grid item>
        <TextField value={bairro} onChange={e => setBairro(e.target.value)}  style={{ width }}  name="bairro" 
        type="text" label="BAIRRO" variant="outlined" size="small" required/>
        </Grid>
        <Grid item>
        <TextField value={cidade} onChange={e => setCidade(e.target.value)}  style={{ width }}  name="cidade" 
        type="text" label="CIDADE" variant="outlined" size="small" required/>
        </Grid>
        </Grid>
        </Box>
        </Grid>


        <Grid item xs={12}>
        <Box m={2}>
        <Grid
        container
        justify="space-between"
        alignItems="center" 
        >
        <Grid item>
        <TextField value={estado} onChange={e => setEstado(e.target.value)}  style={{ width }}  name="estado"
        type="text" label="ESTADO" variant="outlined" size="small" required/>
        </Grid>
        <Grid item>
        <TextField  value={pais} onChange={e => setPais(e.target.value)}  style={{ width }}  name="pais" 
        type="text" label="PAÍS" variant="outlined" size="small" required/>
        </Grid>
        </Grid>
        </Box>
        </Grid>
        </Grid>

        <Grid container justify="center">
        <Collapse in={open}>
        <Alert  variant="filled" severity="error">
        <AlertTitle>Erro</AlertTitle>
        Os dados informados já constam nos nossos registros
        </Alert>
        </Collapse>
        </Grid>

        <Grid container justify="center">
        <Grid item>
        <Button type="submit" variant="contained" color="primary" disableElevation>
        Salvar Alterações
        </Button>
        </Grid>
        </Grid>
        
        </Form>
        )
      }