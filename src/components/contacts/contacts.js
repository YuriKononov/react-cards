import React ,{useState, useEffect} from 'react';
import MenuAppBar from '../navbar';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Album from '../Album';
import AddForm from '../form';
import { Container } from '@material-ui/core';


export default function Contacts() {
    const useStyles = makeStyles((theme) => ({
        heroContent: {
            minHeight: "50vh",
            background: "linear-gradient(to top left, powderblue, pink)",
            padding: theme.spacing(30,0,30),
          },
        
      }));


    const [users, setUsers] = useState([])
    const [data, setData] = useState({name:'',email:'',company:'',description:''});
  

    const sendData = async () => {
       await axios.post('http://localhost:8080/cards', {name:data.name, email:data.email, company:data.company, description:data.description});
       const users = await axios.get('http://localhost:8080/cards');
       console.log('after add', users);
       setUsers(users.data);

    }
    const handleSubmit = (e) => {
   
        sendData();
        console.log(data);
    }
    const handleNameChange =(e) => {
        setData({...data, name: e.target.value });
    }
    const handleEmailChange =(e) => {
        setData({...data, email: e.target.value });
    }
    const handleCompanyChange =(e) => {
        setData({...data, company: e.target.value });
    }
    const handleDescriptionChange =(e) => {
        setData({...data, description: e.target.value });
    }

      const deleteUser = async (_id) => {
        try{
          const users =
          await axios(
            {
              method: "DELETE",
              url: "http://localhost:8080/cards",
              data: {
                _id
              }
            }
          );
          console.log(users)
          //const {data} = await axios.get('http://localhost:8080/cards')
          //setUsers(data)
          setUsers(users.data)
          
          
        }
        catch(error){
          throw(error)
        }
      }
    

      const getUsers = async () => {
        try {
            //const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            const {data} = await axios.get('http://localhost:8080/cards')
            setUsers(data)
        }
        catch(error){
            throw(error)
        }
        
      }
      useEffect(() => {
        getUsers();
      },[])
    const classes = useStyles();
    return (
        <>
            <MenuAppBar />
            <Container maxWidth="md">
                <AddForm formName = 'Add new user'
                 data ={data}
                 handleSubmit={handleSubmit}
                 handleNameChange={handleNameChange} 
                 handleEmailChange={handleEmailChange} 
                 handleCompanyChange={handleCompanyChange} 
                 handleDescriptionChange={handleDescriptionChange}/>
                <Album users = {users} getUsers ={getUsers} deleteUsers={deleteUser}/>
            </Container>
            
            
        </>
    )
}
