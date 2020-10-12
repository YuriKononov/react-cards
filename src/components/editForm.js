import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';


export default function EditForm(props) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        name: props.data.name,
        email: props.data.email,
        company: props.data.company,
        description: props.data.description
    })
    
    const handleNameChange =(e) => {
        setFormData({...formData, name: e.target.value });
    }
    const handleEmailChange =(e) => {
        setFormData({...formData, email: e.target.value });
    }
    const handleCompanyChange =(e) => {
        setFormData({...formData, company: e.target.value });
    }
    const handleDescriptionChange =(e) => {
        setFormData({...formData, description: e.target.value });
    }

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
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
      setFormData(props.data);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.editUser(formData);
        handleClose();
    }
    
    
    const classes = useStyles();
    return (
      <div>
          
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          {props.formName}
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
              <form method="POST">
              <TextField
              name="name"
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={handleNameChange}
              value={formData.name}
            />
            <TextField
              name="email"
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              onChange={handleEmailChange}
              value={formData.email}
            />
            <TextField
             name='company'
              margin="dense"
              id="company"
              label="Company"
              onChange={handleCompanyChange}
              value={formData.company}
              fullWidth
            />
            <TextField
              name="description"
              margin="dense"
              id="description"
              label="Description"
              onChange={handleDescriptionChange}
              value={formData.description}
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