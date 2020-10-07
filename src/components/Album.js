import React ,{useState, useEffect} from 'react';
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import CardItem from './cardItem'

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

export default function Album() {
  const classes = useStyles();
  const [users, setUsers] = useState([])
  

  const getUsers = async () => {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
    }
    catch(error){
        throw(error)
    }
    
  }
  useEffect(() => {
    getUsers();
  },[])
  

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {users.length?
            users.map((user) => (
              <Grid item key={user.id} xs={12} sm={4} md={4}>
                <CardItem
                key = {user.id}
                user = {user} />
              </Grid>
            )):<p>Loading...</p>
            }
          </Grid>
        </Container>
      </main>
      {/* End footer */}
    </React.Fragment>
  );
}