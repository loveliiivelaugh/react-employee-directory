import React, { useEffect, useState } from 'react';
import './App.css';
//components
import EmployeeTable from './components/EmployeeTable';
import SearchForm from './components/SearchForm';
//utilites
import { sort } from './util/sort.js';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


function App() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error(error));
    };
    fetchData();
  }, []);


  const handleSort = category => {
    let employees = [ ...users ];

    console.log(category);

    switch (category) {
      case "first":
        sort.sortByFirst(employees)
        setUsers(employees);
        break;
      case "last":
        sort.sortByLast(employees)
        setUsers(employees);
        break;
      case "age":
        sort.sortByAge(employees)
        setUsers(employees);
        break;
      case "email":
        sort.sortByEmail(employees)
        setUsers(employees);
        break;
      case "phone":
        sort.sortByPhone(employees)
        setUsers(employees);
        break;
      case "cell":
        sort.sortByCell(employees)
        setUsers(employees);
        break;
      case "street":
        sort.sortByStreet(employees)
        setUsers(employees);
        break;
      case "city":
        sort.sortByCity(employees)
        setUsers(employees);
        break;
      case "state":
        sort.sortByState(employees)
        setUsers(employees);
        break;
      case "country":
        sort.sortByCountry(employees)
        setUsers(employees);
        break;
      case "postal":
        sort.sortByPostal(employees)
        setUsers(employees);
        break;
      case "username":
        sort.sortByUsername(employees)
        setUsers(employees);
        break;
      default:
        return;
    }
  };

  const find = (items, text) => {
    text = text.split(' ');
    return items.filter(item => {
      return text.every(el => {
        console.log(el, item)
        return item.name.first.indexOf(el) ? 
          item.name.first.indexOf(el) > -1 ||
          item.name.last.indexOf(el) > -1 ||
          item.name.first.indexOf(el) > -1 ||
          item.email.indexOf(el) > -1 ||
          item.phone.indexOf(el) > -1 ||
          // item.dob.age.indexOf(el) > -1 || //need to format age to a string
          item.cell.indexOf(el) > -1 ||
          item.location.city.indexOf(el) > -1 ||
          item.location.state.indexOf(el) > -1 ||
          item.location.country.indexOf(el) > -1 ||
          item.login.username.indexOf(el) > -1 ||
          item.location.street.name.indexOf(el) > -1 : 
          "No items match your search";
      });
    });
  };

  const handleSearchFilter = event => {
    event.preventDefault();
    const search = event.target.value.trim();
    console.log(search)
    setUsers(find([ ...users ], search));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Employee Directory
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={handleSearchFilter}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Employee Directory
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            {/* <SearchForm handleSearchFilter={handleSearchFilter} /> */}
            {users &&
              <EmployeeTable employees={users} handleSort={handleSort} />
            }
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
