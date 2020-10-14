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
import {withRouter} from 'react-router-dom';
import EditForm from './editForm';
import Tags from './tags'


const useStyles = makeStyles({
    root: {
      marginTop: 10,
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto"
    },
    media: {
      minHeight: 250,
      minWidth: 250
    },
    userPage:{
      marginTop: 30,
      maxWidth: 800,
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    desc :{
      marginTop: 10,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 400,
      minWidth: 250,
    },
    userAndTags:{
      display: "flex",
      flexDirection: "column"
    },
    break:{
      overflowWrap: "break-word"
    }
  });


const User = (props) => {
    const [user, setUser] = useState(null);
    const classes = useStyles();
    let _id = props.match.params.id;



    const editUser = async (formData) => {
      try {
        const {data} = await axios(
          {
            method: "PATCH",
            url: "http://localhost:8080/cards",
            data: {
              _id : props.match.params.id,
              ...formData
            }
          }
          
        );
        console.log('data', data)
        const user = data.find(user => user._id ===_id)
        setUser(user)
      }
      catch(error){
        throw(error)
      }
    }

    const addTag = (tag) => {
      const tempUser = {...user};
      if (tempUser.tags.includes(tag)){
        console.log('Already exists!')
      }
      else{
        tempUser.tags.push(tag)
      }
      
      editUser(tempUser);
    }

    const deleteTag = (tagToDelete) => {
      console.log(tagToDelete)
      const newTags = [...user.tags].filter((tag) => tag !== tagToDelete);
      const tempUser = {...user, tags:newTags};
      editUser(tempUser)
    }

    const deleteUser = async () => {
      try{
        await axios(
          {
            method: "DELETE",
            url: "http://localhost:8080/cards",
            data: {
              _id
            }
          }
        )
        props.history.push('/contacts')

      }
      catch(error){
        throw(error)
      }
    }

    const getUser = async () => {
        try {
            const {data} = await axios.get('http://localhost:8080/cards')
            console.log(_id)
            const user = data.find(user => user._id ===_id)
            setUser(user)
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
        <div>
            
            <MenuAppBar />
            {user ? 
            <div className={classes.userPage}>
              <div className={classes.userAndTags}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={"https://robohash.org/"+user._id}
                    />
                    </CardActionArea>
                    <CardActions>
                    <Button  color="primary" onClick={deleteUser} variant="outlined">
                    Delete
                    </Button>
                    <EditForm data = {user}
                    formName = 'Edit'
                    editUser = {editUser}/>
                </CardActions>
                
            </Card>
            <Tags addTag={addTag} tags={user.tags} deleteTag = {deleteTag}/>
            </div>
            <Card className={classes.desc}>
                    <CardContent>
                      <Typography variant='h4'component="h3" gutterBottom>
                      {user.name}
                      </Typography>
                      <Typography variant="h5" component="h3">
                      {user.email}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {user.company}
                      </Typography>
                      <Typography variant="body2" component="p" className={classes.break}>
                        {user.description}
                      </Typography>
                    </CardContent>
            </Card>
            
            </div>
            :<p>loading...</p>}
            
        </div>
            
    )   
}

export default withRouter(User)