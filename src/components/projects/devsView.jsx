import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginTop: 20,
    maxWidth: 250,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function DevsView(props) {
  const classes = useStyles();
  const arrayOfDevsID = props.data.devs
  const allDevs = useSelector((state) => state.users.users);
  const filteredDevs = allDevs.filter((dev) => arrayOfDevsID.includes(dev._id))


  return (
    <div component="ul" className={classes.root}>
      {filteredDevs.map((dev) => (
        <li key={dev._id}>
          <Chip
            label={dev.name}
            className={classes.chip}
          />
        </li>
      ))}
    </div>
  );
}
