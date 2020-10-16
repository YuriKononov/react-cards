import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUsers,
} from '../actions';

import CardItem from './cardItem';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <CssBaseline />
      <main>

        <Container className={classes.cardGrid} maxWidth="md">

          <Grid container spacing={4}>
            {
            users && users.length
              ? users.slice(0, props.limit)
                .map((user) => (
                  <Grid item key={user._id} xs={12} sm={4} md={4}>
                    <CardItem
                      key={user._id}
                      user={user}
                    />
                  </Grid>
                )) : <p>Loading...</p>
            }
          </Grid>
        </Container>
      </main>
      {/* End footer */}
    </div>
  );
}
