import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposit() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title> Number of Hours Worked so far</Title>
      <Typography component="p" variant="h4">
        11 hours
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Keep up the momentum!
      </Typography>
      <div>
        <Link color="primary" href="/index" onClick={preventDefault}>
          Explore Opportunities
        </Link>
      </div>
    </React.Fragment>
  );
}
