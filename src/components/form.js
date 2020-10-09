import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";


export default function AddForm(props) {
    const [open, setOpen] = React.useState(false);
    
  
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
        props.handleSubmit(e);
        handleClose();
    }
    
    
    const classes = useStyles();
    return (
      <div>
          
          <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
          Add new person
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
              onChange={props.handleNameChange}
              value={props.data.name}
            />
            <TextField
              
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              onChange={props.handleEmailChange}
              value={props.data.email}
            />
            <TextField
             
              margin="dense"
              id="company"
              label="Company"
              onChange={props.handleCompanyChange}
              value={props.data.company}
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="description"
              label="Description"
              onChange={props.handleDescriptionChange}
              value={props.data.description}
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