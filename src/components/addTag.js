import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddTag(props) {
  const [open, setOpen] = React.useState(false);
  const [tag, setTag] = useState('');

  const handleChange =(e) => {
    setTag(e.target.value);
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
       ➕
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new tag
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleChange}
            type="tag"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {props.addNewTag(tag)}} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}