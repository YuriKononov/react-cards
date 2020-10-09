import React ,{useState, useEffect} from 'react';
import Header from '../components/header/header'
import Album from './Album';
import axios from "axios";



function Home() {

  
  const [users, setUsers] = useState([])

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
    return (
        <>
          <Header />
          <Album limit = {3} users = {users} getUsers ={getUsers} deleteUsers={deleteUser}/>
        </>
      
    );
  }
  
  export default Home;