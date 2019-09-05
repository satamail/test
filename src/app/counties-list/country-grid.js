import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CountryGrid({children}) {
  const classes = useStyles();

  const rows = [];
  for (let i = 0; i < children.length / 3; i++) {
      rows.push([
          children[i],
          children[i + 1],
          children[i + 2]
      ]);
  }

  return (
      <div className={classes.root}>
        <Grid container spacing={1}>
            {rows.map((row, index) =>
                <Grid key={index} container item xs={12} spacing={3}>
                    {row.map((item, index) =>
                        <Grid key={index} item xs={4}>
                            {item}
                        </Grid>
                    )}
                </Grid>
            )}
        </Grid>
      </div>
  );
}
