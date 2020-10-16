import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuAppBar from '../navbar';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    minHeight: '95vh',
    background: 'linear-gradient(to top right, rgb(77, 136, 214), rgb(90, 139, 213), rgb(103, 142, 211), rgb(116, 146, 210), rgb(129, 149, 209), rgb(142, 152, 208), rgb(154, 155, 206), rgb(167, 158, 205), rgb(180, 161, 204), rgb(193, 165, 203), rgb(206, 168, 201), rgb(219, 171, 200));;',
    padding: theme.spacing(30, 0, 30),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <MenuAppBar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            300 hundred bucks
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
        </Container>
      </div>
    </header>
  );
};

export default Header;
