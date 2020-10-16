import React from 'react';
import { Container } from '@material-ui/core';
import MenuAppBar from '../navbar';
import Album from '../Album';
import AddForm from '../form';

export default function Contacts() {
  return (
    <>
      <MenuAppBar />
      <Container maxWidth="md">
        <AddForm formName="Add new developer" />
        <Album />
      </Container>

    </>
  );
}
