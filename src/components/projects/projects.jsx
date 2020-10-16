import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from '../navbar';
import ProjectsTable from './projectTable';
import AddProject from './addProject';

const useStyles = makeStyles((theme) => ({
  table: {
    margin: theme.spacing(5, 5, 10),
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <>
      <MenuAppBar />
      <Container>
        <div className={classes.table}>
          <AddProject />
          <ProjectsTable />
        </div>

      </Container>

    </>

  );
}

export default Projects;
