import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import {Chip} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EditIcon from '@material-ui/icons/Edit';
import { mainListItems, secondaryListItems } from './listItems';
import {logo} from "./Logo"
import FormAdmin from "./FormAdmin"
import Tabela from "./Tabela"
import EditarAdmin from "./EditarAdmin"

function HeaderView() {
  return location.pathname;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
    Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
    );
}

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    background: 'linear-gradient(to right, #0d47a1, #673ab7 130%)',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const string = HeaderView();
  var page = '';
  var iconPage = '';
  if(string.includes('/editar-admin')){
    page = <EditarAdmin />;
    iconPage = <Chip
    icon={<EditIcon />}
    label="Editar Administrador"
    clickable
    color="primary"
    />
  }
  else if (string.includes('/lista-admin')){
    page = <Tabela />;
    iconPage = <Chip
    icon={<FormatListBulletedIcon />}
    label="Administradores"
    clickable
    color="primary"
    />
  }
  else{
    page = <FormAdmin />;
    iconPage = <Chip
    icon={<PersonAddIcon />}
    label="Cadastrar Administrador"
    clickable
    color="primary"
    />;
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
    <CssBaseline />
    
    <Drawer

    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), 
    }}
    open={open}
    >
    {logo}
    <List>{mainListItems}</List>
    </Drawer>
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Grid container style={{ marginLeft: 50 }}>
    {iconPage}
    </Grid>
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
    {page}
    </Grid>
    </Container>
    </main>
    </div>
    );
  }