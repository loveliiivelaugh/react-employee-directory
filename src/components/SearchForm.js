import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchForm = ({ handleSearchFilter }) => {
  const classes = useStyles();
  return (
    <form>
      <label htmlFor="search"></label>
      <InputBase
        placeholder="Search…"
        onChange={handleSearchFilter}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      {/* <input name="search" onChange={handleSearchFilter}></input> */}
    </form>
  )
}

export default SearchForm;
