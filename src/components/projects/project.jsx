import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getProjects } from '../../actions/projectActions';
import MenuAppBar from '../../components/navbar';
import { makeStyles } from '@material-ui/core/styles';
import EditBtn from './editBtn';


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
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
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
    content: {
      padding: theme.spacing(0, 0, 2),
      minHeight: '100vh',
      background: 'linear-gradient(to top right, rgb(77, 136, 214), rgb(90, 139, 213), rgb(103, 142, 211), rgb(116, 146, 210), rgb(129, 149, 209), rgb(142, 152, 208), rgb(154, 155, 206), rgb(167, 158, 205), rgb(180, 161, 204), rgb(193, 165, 203), rgb(206, 168, 201), rgb(219, 171, 200))',
    },
  }));



const Project = (props) => {
  const dispatch = useDispatch();
  const _id = props.match.params.id;
  const projects = useSelector((state) => state.projects.projects);
  const project = projects.find((p) => p._id === _id);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProjects());
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
                <Typography variant="h5" component="p" gutterBottom className={classes.break}>
                  {project.devs}
                </Typography>
              </CardContent>
              <EditBtn data={project} _id={project._id}/>
            </div>

          </div>
        )
        : <p>loading...</p>}

    </div>

  );
};

export default Project;
