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

export default function ProjectsView(props) {
  const classes = useStyles();
  
  const allProjects = useSelector((state) => state.projects.projects);
  const filteredProjects = allProjects.filter((project) => project.devs.includes(props.data._id))


  return (
    <>
    <div component="ul" className={classes.root}>
      {filteredProjects.map((project) => (
        <li key={project._id}>
          <Chip
            label={project.name}
            className={classes.chip}
          />
        </li>
      ))}
    </div>
    
    </>
  );
}
