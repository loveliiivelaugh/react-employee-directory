import React, { useEffect, useState } from 'react';
import './App.css';
//components
import EmployeeTable from './components/EmployeeTable';


function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    };
    fetchData();
  }, []);

  console.log("users", users);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      {users &&
        <EmployeeTable users={users} />
      }
    </div>
  );
}

export default App;
