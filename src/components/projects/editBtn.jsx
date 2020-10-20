import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { editProject } from '../../actions/projectActions';
import DevsField from './devsCheckfield';
import { editUser } from '../../actions/userActions';

export default function EditProject(props) {
  const project = useSelector((state) => state.projects.projects).filter((ele) => ele._id === props._id);
  const users = useSelector((state) => state.users.users);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const [statusOpen, setStatusOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: project[0].name,
    status: project[0].status,
    price: project[0].price,
    devs: project[0].devs,
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleStatusClose = () => {
    setStatusOpen(false);
  };

  const handleStatusOpen = () => {
    setStatusOpen(true);
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0, 0, 0),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const developers = useSelector((state) => state.projects.developersToProject);
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const user of users) {
      user.projects.splice(user.projects.indexOf(props._id), 1);
      dispatch(editUser(user));
    }
    const devs = [...developers];
    if (data.name === '' || !data.price === '') {
      console.log('Missing input!');
    } else {
      for (const user of users) {
        if (devs.includes(user._id)) {
          user.projects.push(props._id);
          dispatch(editUser(user));
        }
      }
      dispatch(editProject({ ...data, status, devs }, props._id));
      handleClose();
      setData({
        name: '', status: '', price: '',
      });
    }
  };

  const classes = useStyles();
  return (
    <div>

      <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
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
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={statusOpen}
                onClose={handleStatusClose}
                onOpen={handleStatusOpen}
                value={status}
                onChange={handleStatusChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="done">Done</MenuItem>
                <MenuItem value="failed">Failed</MenuItem>
                <MenuItem value="in progress">In progress</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="number"
              margin="dense"
              id="price"
              label="Price"
              onChange={handleOnChange}
              value={data.price}
              fullWidth
            />
            <DevsField />
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
