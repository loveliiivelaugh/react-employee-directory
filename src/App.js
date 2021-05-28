import React, { useEffect, useState } from 'react';
import './App.css';
//components
import EmployeeTable from './components/EmployeeTable';
import SearchForm from './components/SearchForm';
//utilites
import { sort } from './util/sort.js';


function App() {
  const [users, setUsers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error(error));
    };
    fetchData();
  }, []);

  console.log("users", users);

  const handleSort = event => {
    event.preventDefault();

    let employees = [ ...users ];

    console.log(event.target.name);

    switch (event.target.name) {
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

    console.log(find([ ...users ], search));
    setUsers(find([ ...users ], search));
  };

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <SearchForm handleSearchFilter={handleSearchFilter} />
      {users &&
        <EmployeeTable employees={users} handleSort={handleSort} />
      }
    </div>
  );
}

export default App;
