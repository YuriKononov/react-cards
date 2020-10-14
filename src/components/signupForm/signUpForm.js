import React ,{useState} from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
      display: "flex",
      flexDirection: "column"
    },
    reg:{
        alignSelf: "center",
        border: "1px solid black",
        display: 'flex',
        maxWidth: "30%",
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto"
    },
    btns:{
        display: "flex",
        justifyContent: 'center'
    }
  }));



function SignUpForm(props) {

    const [data, setData] = useState({email:'', password:'', name:'', repeatedPassword:''})
//added
const sendDataSignUp = async () => {
    const res = await axios.post('http://localhost:8080/signup', {email:data.email, password:data.password, name:data.name});
    return res;
}

const handleOnChange = (e) => {
    setData({...data, [e.target.name]:e.target.value})
}

const handleSubmitSignUp = async () => {
    if (data.password === data.repeatedPassword){
        const dataFromBack = await sendDataSignUp();
        console.log("user with email ",data.email, ' and password ', data.password, 'signed up.');
        setData({email:'', password:'', name:'', repeatedPassword:''});
        props.history.push('/log')
    }
    else{
        console.log('Passwords do not match')
    }
    

}
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={classes.reg}>
            <form className={classes.root} noValidate autoComplete="off">
            <Typography variant="h4" gutterBottom align='center'>
                Sign up
            </Typography>
                <Input
                    className={classes.inp}
                    placeholder="Email"
                    name='email'
                    id='email'
                    value={data.email}
                    onChange={handleOnChange}
                />
                <Input
                    className={classes.inp}
                    placeholder="Name"
                    name='name'
                    id='name'
                    value={data.name}
                    onChange={handleOnChange}
                />
                <Input
                    className={classes.inp}
                    type='password'
                    placeholder="Password"
                    name='password'
                    id='password'
                    value={data.password}
                    onChange={handleOnChange}
                />
                <Input
                    className={classes.inp}
                    type="password"
                    placeholder="Repeat your password"
                    name="repeatedPassword"
                    id="repeatedPassword"
                    value={data.repeatedPassword}
                    onChange={handleOnChange}
                />
                <div className={classes.btns}>
                    <Button color="primary" onClick={handleSubmitSignUp} variant="outlined">
                        Sign up
                    </Button>
                </div>
                
            </form>
            </div>
        </>
    )
}

export default SignUpForm
