import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#eee',
  },
  appBar: {
      backgroundColor:'#eee',
      boxShadow:'none',
  },
  title: {
    flexGrow: 1,
    color: '#000',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div data-testid="navbar" className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Property Listings
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
