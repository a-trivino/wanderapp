import React from 'react';
import { Theme, makeStyles, createStyles, AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(5),
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2)
    }
  })
);

const WanderHeader: React.FC = (props) => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        Wander App
      </Typography>
    </AppBar>
  );
};

export default WanderHeader;
