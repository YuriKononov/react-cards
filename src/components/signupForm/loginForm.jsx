import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
  },
  reg: {
    alignSelf: 'center',
    border: '1px solid black',
    display: 'flex',
    maxWidth: '30%',
    flexDirection: 'column',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btns: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function LoginForm(props) {
  const [data, setData] = useState({ email: '', password: '' });
  // added
  const sendDataLogin = async () => {
    const res = await axios(
      {
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: {
          email: data.email,
          password: data.password,
        },
      },

    );
    // await axios.post('http://localhost:8080/login', {email:data.email, password:data.password});
    return res;
  };

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async () => {
    const dataFromBack = await sendDataLogin();
    setData({ email: '', password: '' });
    localStorage.setItem('auth-token', dataFromBack.data.authToken);
    localStorage.setItem('email', dataFromBack.data.email);
    localStorage.setItem('_id', dataFromBack.data._id);
    localStorage.setItem('name', dataFromBack.data.name);
    props.history.push('/contacts');
  };
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.reg}>
        <form className={classes.root} noValidate autoComplete="off">
          <Typography variant="h4" gutterBottom align="center">
            Sign in
          </Typography>
          <Input
            className={classes.inp}
            placeholder="Email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleOnChange}
          />
          <Input
            className={classes.inp}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleOnChange}
          />
          <div className={classes.btns}>
            <Button color="primary" onClick={handleSubmitLogin} variant="outlined">
              Sign in
            </Button>
          </div>

        </form>
      </div>
    </>
  );
}

export default LoginForm;
