import React from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function HeaderView() {
  return location.pathname;
}

const string = HeaderView();
var linkHome = '';
var linkLista = '';
if(string.includes('/editar-admin')){
  linkHome = "./../home";
  linkLista = "./../lista-admin";
}
else{
  linkHome = "./home";
  linkLista = "./lista-admin";
}

export const mainListItems = (
  
  <div>
  <ListItem button component="a" href={linkHome}>
  <ListItemIcon >
  <PersonAddIcon style={{ color: "white" }}/>
  </ListItemIcon>
  <ListItemText style={{ color: "white" }} primary="Cadastrar Administrador" />
  </ListItem>
  <ListItem button component="a" href={linkLista}>
  <ListItemIcon>
  <FormatListBulletedIcon style={{ color: "white" }}/>
  </ListItemIcon>
  <ListItemText style={{ color: "white" }} primary="Administradores" />
  </ListItem>
  <ListItem button>
  <ListItemIcon>
  <ExitToAppIcon style={{ color: "white" }}/>
  </ListItemIcon>
  <ListItemText style={{ color: "white" }} primary="Sair" />
  </ListItem>
  <ListSubheader style={{ color: "white",
  marginTop: "70px", fontSize: "12px" }}>Todos os valores dos </ListSubheader>
  <ListSubheader style={{ color: "white",
  marginTop: "-20px", fontSize: "12px"  }}>ativos aqui apresentados </ListSubheader>
  <ListSubheader style={{ color: "white",
  marginTop: "-20px", fontSize: "12px"  }}> são convertidos ao </ListSubheader>
  <ListSubheader style={{ color: "white",
  marginTop: "-20px", fontSize: "12px"  }}> equivalente em moeda </ListSubheader>
  <ListSubheader style={{ color: "white",
  marginTop: "-20px", fontSize: "12px"  }}> 
  corrente (R$)</ListSubheader>
  </div>
  );
