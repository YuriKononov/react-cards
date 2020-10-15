import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Redirect } from 'react-router-dom';
import { getUsers, deleteUser, addUser, editUser } from '../actions'
import{ useSelector, useDispatch} from 'react-redux';



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
  const dispatch = useDispatch();
  const classes = useStyles();
  const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('name');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    
  }

  const name= 'aaa';
  const email= 'bbb';
  const company= 'ccc';
  const description= 'ddd';
  const formData = {name, email, company, description}

  
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
          <Typography variant="h6" className={classes.title}>
            {localStorage.getItem('name') ? 'Good day, ' + localStorage.getItem('name') : null}
          </Typography>
          <Link to={`/`} className = {classes.link}><Button color="inherit">Main</Button></Link>
          <Link to={`/contacts`} className = {classes.link}>
              {localStorage.getItem('name') ? <Button color="inherit">Developers</Button> : null}
          </Link>
          <Link to={`/log`} className = {classes.link}><Button color="inherit">Sign in</Button></Link>
          <Link to={`/reg`} className = {classes.link}><Button color="inherit">Sign up</Button></Link>
          <Link to={`/log`} className = {classes.link}>
            {localStorage.getItem('name') ? <Button color="inherit" onClick={logout}>Log out</Button> : null}
          </Link>
          <Button color="inherit" onClick={() => dispatch(getUsers())}>GET</Button>
          <Button color="inherit" onClick={() => dispatch(deleteUser("5f8820f8b8f6f20a91ee0aba"))}>DEL</Button>
          <Button color="inherit" onClick={() => dispatch(addUser(name, email, company, description))}>ADD</Button>
          <Button color="inherit" onClick={() => dispatch(editUser(formData, "5f883457136e621fbaf52a96"))}>edit</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
