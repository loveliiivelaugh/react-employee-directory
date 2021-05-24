import React, { useEffect, useState } from 'react';
import './App.css';


// const useFetch = url => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(url)
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error(error));
//     };
//     fetchData();
//   }, url);
  
//   console.log("useFetch returns: ", data);
//   return data;
// };

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://randomuser.me/api/')
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
      <table>
      {users.results &&
        users.results.map(user => {
          <>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
            <image src={user.picture.medium} alt="thumbnail"/>
            <h2>{user.name.first + " " + user.name.last}</h2>

          </>
        })
      }
      </table>
    </div>
  );
}

export default App;
