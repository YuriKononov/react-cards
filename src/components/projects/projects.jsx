import React from 'react';
import MenuAppBar from '../navbar';
import ProjectsTable from './projectTable';
import Container from '@material-ui/core/Container';


function Projects() {
  return (
    <>
      <MenuAppBar />
      <Container>
        <ProjectsTable />
      </Container>
      

    </>

  );
}

export default Projects;