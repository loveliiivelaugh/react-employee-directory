import React, { useEffect, useState } from 'react';
import './App.css';
//components
import EmployeeTable from './components/EmployeeTable';
import { sort } from './util/sort.js';


function App() {
  const [users, setUsers] = useState();

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
    }
  };

  // console.log(employees);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      {users &&
        <EmployeeTable employees={users} handleSort={handleSort} />
      }
    </div>
  );
}

export default App;
