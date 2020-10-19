import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 37.5,
    borderRadius: '37.5px/18.75px',
    border: '2px solid',
  },
  green: {
    background: '#B1F100',
  },
  yellow: {
    background: '#FFD300',
  },
  red: {
    background: '#FF4040',
  },
  gray: {
    background: 'gray',
  },
}));

const StatusComponent = (props) => {
  const { status } = props;

  const classes = useStyles();

  const className = cx(classes.statusBadge, {
    [classes.green]: status === 'done',
    [classes.red]: status === 'failed',
    [classes.yellow]: status === 'pending',
    [classes.gray]: status === 'in progress',
  });

  

  return (
    <div className={className}>
      <span className={classes.text}>
        {props.status}
      </span>
    </div>
  );
};

export default StatusComponent;
