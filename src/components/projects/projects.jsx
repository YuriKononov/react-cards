import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from '../navbar';
import ProjectsTable from './projectTable';

const useStyles = makeStyles((theme) => ({
  table: {
    margin: theme.spacing(10, 5, 10),
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <>
      <MenuAppBar />
      <Container>
        <div className={classes.table}>
          <ProjectsTable />
        </div>

      </Container>

    </>

  );
}

export default Projects;
