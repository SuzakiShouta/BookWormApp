import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchForm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value ? props.value : "");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  }

  return (
    <div className={props.className}>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            label="Search" 
            variant="outlined" 
            name="search"
            value={value}
            onChange={handleChange}
          />
      </form>
    </div>
  );
}