import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));



function createData(nome, email, rg, nacionalidade, telefone) {
  return { nome, email, rg, nacionalidade, telefone };
}

const rows = [
  
];


export default function Tabela() {
	const [loadingData, setLoadingData] = React.useState('');
	const classes = useStyles();
	const [dados, setDados] = useState(null);
	const [email, setEmail] = React.useState('');

	useEffect(()  =>{
		if(dados == null){
	    	axios.get('./dados-admin')
	        .then((response) =>{
	        	 setDados(response.data);
	        	 return 'true';
	        })
	        .catch(error=>{
	            console.log(error)
	        })
    	}
	}, [dados])
	
	if(dados != null){
		for (var i = 0; i < dados.length; i++) {
		 	rows.push(createData(dados[i].nome, dados[i].email, dados[i].rg, dados[i].nacionalidade, dados[i].telefone));
		}
	}

	function handleClick(email){
        axios.get('./exclui-admin/'+email, {

           
        })
        .then(function (response) {
            window.location.reload();;
        })
        .catch(function (error) {
            console.log(error);
        });
        
     }

     function redirectTo(rg){
         window.location.href="./editar-admin/"+rg;
        
     }

	return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">RG</TableCell>
            <TableCell align="right">Nacionalidade</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.rg}</TableCell>
              <TableCell align="right">{row.nacionalidade}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">
              		<IconButton aria-label="edit" component="a" onClick={redirectTo.bind(this, row.rg)}   color="primary" className={classes.margin}>
			          <EditIcon fontSize="small" />
			        </IconButton>
			        <IconButton aria-label="delete"  onClick={handleClick.bind(this, row.email)} color="secondary" className={classes.margin}>
			          <DeleteIcon fontSize="small" />
			        </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	)
}