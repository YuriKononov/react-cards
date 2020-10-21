import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AddTag from './addTag';


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
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

export default function Tags(props) {
  const classes = useStyles();

  const addNewTag = (labelFromForm) => {
    props.addTag(labelFromForm);
  };

  return (
    <>
    
    <Paper component="ul" className={classes.root}>
      {props.tags.map((tag) => (
        <li key={tag}>
          <Chip
            label={tag}
            onDelete={() => { props.deleteTag(tag); }}
            className={classes.chip}
          />
        </li>
      ))}
      <AddTag addNewTag={addNewTag} />
    </Paper>
    </>
  );
}
