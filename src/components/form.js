import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddForm() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({name:'',email:'',company:'',description:''})
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        
    }
    const handleNameChange =(e) => {
        setData({...data, name: e.target.value });
    }
    const handleEmailChange =(e) => {
        setData({...data, email: e.target.value });
    }
    const handleCompanyChange =(e) => {
        setData({...data, company: e.target.value });
    }
    const handleDescriptionChange =(e) => {
        setData({...data, description: e.target.value });
    }
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
              onChange={handleNameChange}
              value={data.name}
            />
            <TextField
              
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              onChange={handleEmailChange}
              value={data.email}
            />
            <TextField
             
              margin="dense"
              id="company"
              label="Company"
              onChange={handleCompanyChange}
              value={data.company}
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="description"
              label="Description"
              onChange={handleDescriptionChange}
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