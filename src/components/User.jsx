import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from './editForm';
import Tags from './tags';
import {
  deleteUser, editUser, getUsers,
} from '../actions/userActions';
import MenuAppBar from './navbar';
import ProjectsView from './projectsView';

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

const User = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const _id = props.match.params.id;

  const user = users.find((u) => u._id === _id);
  const classes = useStyles();
  // eslint-disable-next-line no-underscore-dangle

  const addTag = (tag) => {
    const tempUser = { ...user };
    if (tempUser.tags.includes(tag)) {
      console.log('Already exists!');
    } else {
      tempUser.tags.push(tag);
    }

    dispatch(editUser(tempUser));
  };

  const deleteTag = (tagToDelete) => {
    const newTags = [...user.tags].filter((tag) => tag !== tagToDelete);
    const tempUser = { ...user, tags: newTags };
    dispatch(editUser(tempUser));
  };

  const deleteCard = () => {
    dispatch(deleteUser(_id));
    props.history.push('/contacts');
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className={classes.content}>

      <MenuAppBar />
      {user
        ? (
          <div className={classes.userPage}>
            <div className={classes.userAndTags}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`https://robohash.org/${user._id}`}
                  />
                </CardActionArea>
                <CardActions>

                  <Button color="primary" onClick={deleteCard} variant="outlined">
                    Delete
                  </Button>
                  <EditForm
                    data={user}
                    formName="Edit"
                  />

                </CardActions>

              </Card>
              <Tags addTag={addTag} tags={user.tags} deleteTag={deleteTag} />
              <ProjectsView data={user}/>
            </div>
            <div className={classes.desc}>
              <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  Name
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {user.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Email
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {user.email}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Company
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom className={classes.break}>
                  {user.company}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Info about developer
                </Typography>
                <Typography variant="h5" component="p" gutterBottom className={classes.break}>
                  {user.description}
                </Typography>
              </CardContent>
            </div>

          </div>
        )
        : <p>loading...</p>}

    </div>

  );
};

export default withRouter(User);
