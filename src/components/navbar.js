import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
    outline: 'none',
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            This is the project
          </Typography>
          <Link to={`/`} className = {classes.link}><Button color="inherit">Main</Button></Link>
          <Link to={`/contacts`} className = {classes.link}><Button color="inherit">Contacts</Button></Link>
          <Button color="inherit">About</Button>
          <Button color="inherit">More</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}