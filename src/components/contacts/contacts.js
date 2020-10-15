import React ,{useState, useEffect} from 'react';
import MenuAppBar from '../navbar';
import{ useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Album from '../Album';
import AddForm from '../form';
import { Container } from '@material-ui/core';
import { getUsers, deleteUser, addUser, editUser } from '../../actions';



export default function Contacts() {


    return (
        <>
            <MenuAppBar />
            <Container maxWidth="md">
                <AddForm formName = 'Add new developer'/>
                <Album />
            </Container>
            
            
        </>
    )
}
