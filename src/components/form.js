import React ,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { getUsers, deleteUser, addUser, editUser } from '../actions';
import DialogTitle from '@material-ui/core/DialogTitle';
import{ useSelector, useDispatch} from 'react-redux';


export default function AddForm(props) {
  const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({name:'',email:'',company:'',description:''})

    const handleOnChange = (e) => {
      setData({...data, [e.target.id]:e.target.value})
    }
  
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(5,3,0),
          },
        
      }));


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(data))
        handleClose();
        setData({name:'',email:'',company:'',description:''})
    }
    
    
    const classes = useStyles();
    return (
      <div>
          
          <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
          {props.formName}
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
              <form method="POST">
              <TextField
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={handleOnChange}
              value={data.name}
            />
            <TextField
              
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              onChange={handleOnChange}
              value={data.email}
            />
            <TextField
             
              margin="dense"
              id="company"
              label="Company"
              onChange={handleOnChange}
              value={data.company}
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="description"
              label="Description"
              onChange={handleOnChange}
              value={data.description}
              fullWidth
            />
              </form>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
         
      </div>
    );
  }