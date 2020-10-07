import React, { useState, useEffect } from 'react';
import MenuAppBar from './navbar';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const User = (props) => {
    const [user, setUser] = useState(null);
    const classes = useStyles();
    let id = props.match.params.id;

    const getUser = async () => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            console.log(data)
            setUser(data)
            console.log(user)
        }
        catch(error){
            throw(error)
        }
        
      }
      useEffect(() => {
        getUser();
        
      },[])
      console.log('user',user)
    return(
        <>
            
            <MenuAppBar />
            {user ? 
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={"https://robohash.org/"+user.id}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {user.email}, {user.company.catchPhrase}
                    </Typography>
                    
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                    Delete
                    </Button>
                    <Button size="small" color="primary">
                    Edit
                    </Button>
                </CardActions>
            </Card>
            :<p>loading...</p>}
            </>
    )   
}

export default User