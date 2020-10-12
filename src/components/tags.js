import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
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
  const [chipData, setChipData] = React.useState([
    
  ]);

  const addNewTag = (labelFromForm) => {
      
    const newTag = {key: Math.random(), label: labelFromForm};
    console.log('new tag',newTag);
    setChipData([...chipData, newTag]);
    props.addTag(labelFromForm);
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {props.tags.map((tag, i) => {

        return (
          <li key={i}>
            <Chip
              label={tag}
              onDelete={handleDelete(tag)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <AddTag addNewTag = {addNewTag}/>
    </Paper>
  );
}