import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useSelector, useDispatch } from 'react-redux';
import {addDevelopersToProject} from '../../actions/projectActions';

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
  };
}

export default function DevsField() {
    
  const dispatch = useDispatch();
  const devs = useSelector((state) => state.users.users);
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [personID, setPersonID] = useState([]);
  const handleChange = (e) => {
    setPersonName(e.target.value);
  };
  const handleIdChange = (e) => {
    if (personID.includes(e.target.id)) {
      personID.splice(personID.indexOf(e.target.id), 1);
    } else {
      personID.push(e.target.id);
    }
    setPersonID(personID);
    dispatch(addDevelopersToProject(personID));
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel>Developers</InputLabel>
        <Select
          multiple
          value={personName}
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
          {devs.map((dev) => (
            <MenuItem onClick={handleIdChange} key={dev._id} value={dev.name} id={dev._id} name={dev._id} style={getStyles(dev.name, personName, theme)}>
              {dev.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
