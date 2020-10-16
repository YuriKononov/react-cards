import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useDispatch } from 'react-redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import { editUser } from '../actions/userActions';

export default function EditForm(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: props.data.name,
    email: props.data.email,
    company: props.data.company,
    description: props.data.description,
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
    setFormData(props.data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
    handleClose();
  };

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
              onChange={handleOnChange}
              value={formData.name}
            />
            <TextField
              name="email"
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              onChange={handleOnChange}
              value={formData.email}
            />
            <TextField
              name="company"
              margin="dense"
              id="company"
              label="Company"
              onChange={handleOnChange}
              value={formData.company}
              fullWidth
            />
            <TextField
              name="description"
              margin="dense"
              id="description"
              label="Description"
              onChange={handleOnChange}
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
