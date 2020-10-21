import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useSelector, useDispatch } from 'react-redux';
import { addProjectsToDeveloper } from '../actions/userActions';
import { editProject } from '../actions/projectActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  btn: {
    margin: theme.spacing(3, 2, 1),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, projectName, theme) {
  return {
    fontWeight:
        projectName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
  };
}

export default function ProjectsCheckField(props) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const classes = useStyles();
  const theme = useTheme();
  const [projectName, setProjectName] = useState([]);
  const [projectID, setProjectID] = useState([]);
  const handleChange = (e) => {
    setProjectName(e.target.value);
  };
  const handleIdChange = (e) => {
    if (projectID.includes(e.target.id)) {
      projectID.splice(projectID.indexOf(e.target.id), 1);
    } else {
      projectID.push(e.target.id);
    }
    setProjectID(projectID);
    dispatch(addProjectsToDeveloper(projectID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const project of projects) {
      if (project.devs.includes(props._id)) {
        project.devs.splice(project.devs.indexOf(props._id), 1);
        dispatch(editProject(project));
      }
    }
    for (const project of projects) {
      if (projectID.includes(project._id)) {
        project.devs.push(props._id);
        dispatch(editProject(project));
      }
    }
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel>Projects</InputLabel>
        <Select
          multiple
          value={projectName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {projects.map((project) => (
            <MenuItem
              onClick={handleIdChange}
              key={project._id}
              value={project.name}
              id={project._id}
              name={project._id}
              style={getStyles(project.name, projectName, theme)}
            >
              {project.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="outlined" color="primary" className={classes.btn} onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>

    </div>
  );
}
