import React from 'react'
import MenuAppBar from '../navbar';
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = useStyles();
    return (
        <>
            <MenuAppBar />
            <Container maxWidth="md">
                <AddForm />
                <Album />
            </Container>
            
            
        </>
    )
}
