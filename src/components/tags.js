import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AddTag from './addTag';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginTop: 20,
    maxWidth: 250
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Tags(props) {
  const classes = useStyles();
  //const [chipData, setChipData] = React.useState(
    //props.tags
  //);


  const addNewTag = (labelFromForm) => {
    props.addTag(labelFromForm);
  }


  return (
    <Paper component="ul" className={classes.root}>
      {props.tags.map((tag) => {

        return (
          <li key={tag}>
            <Chip
              label={tag}
              onDelete={() => {props.deleteTag(tag)}}
              className={classes.chip}
            />
          </li>
        );
      })}
      <AddTag addNewTag = {addNewTag}/>
    </Paper>
  );
}