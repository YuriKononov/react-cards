import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { deleteProject, getProjects } from '../../actions/projectActions';
import { getUsers } from '../../actions/userActions';
import MenuAppBar from '../navbar';
import EditBtn from './editBtn';
import DevsView from './devsView';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    marginTop: 10,
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    minHeight: 250,
    minWidth: 250,
  },
  userPage: {
    background: 'white',
    marginTop: 30,
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    
  },
  title: {
    fontSize: 14,
  },
  desc: {
    marginTop: 10,
    marginBottom: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600,
    minWidth: 250,
  },
  userAndTags: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  break: {
    overflowWrap: 'break-word',
  },
  btns: {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    padding: theme.spacing(0, 0, 2),
    minHeight: '100vh',

    },
}));

const Project = (props) => {
  const dispatch = useDispatch();
  const _id = props.match.params.id;
  const projects = useSelector((state) => state.projects.projects);
  const project = projects.find((p) => p._id === _id);
  const classes = useStyles();

  const handleDelete = () => {
    const tempArr = [];
    tempArr.push(_id);
    dispatch(deleteProject(tempArr));
    props.history.push('/projects');
  };

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getUsers())
  }, []);
  return (
    <div className={classes.content}>

      <MenuAppBar />
      {project
        ? (
          <div className={classes.userPage}>
            <div className={classes.desc}>
              <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  Project name
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {project.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Status
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {project.status}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Price
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {project.price}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Developers
                </Typography>
                <DevsView data={project}/>
              </CardContent>
              <div className={classes.btns}>
                <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                <EditBtn data={project} _id={project._id} />
              </div>

            </div>

          </div>
        )
        : <p>loading...</p>}

    </div>

  );
};

export default withRouter(Project);
