import React from 'react';

const EmployeeTable = ({ employees, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First <button onClick={event => handleSort(event)} name="first">v</button></th>
          <th>Last <button onClick={event => handleSort(event)} name="last">v</button></th>
          <th>Gender <button onClick={event => handleSort(event)} name="last">v</button></th>
          <th>DOB</th>
          <th>Age <button onClick={event => handleSort(event)} name="age">v</button></th>
          <th>Email <button onClick={event => handleSort(event)} name="email">v</button></th>
          <th>Phone <button onClick={event => handleSort(event)} name="phone">v</button></th>
          <th>Cell <button onClick={event => handleSort(event)} name="cell">v</button></th>
          <th>Street <button onClick={event => handleSort(event)} name="street">v</button></th>
          <th>City <button onClick={event => handleSort(event)} name="city">v</button></th>
          <th>State <button onClick={event => handleSort(event)} name="state">v</button></th>
          <th>Country <button onClick={event => handleSort(event)} name="country">v</button></th>
          <th>Postal <button onClick={event => handleSort(event)} name="postal">v</button></th>
          <th>Timezone</th>
          <th>Username <button onClick={event => handleSort(event)} name="username">v</button></th>
        </tr>
      </thead>
      <tbody>
        {employees.map(user => (
          <tr key={user.login.uuid}>
            <th>
              <img src={user.picture.medium && user.picture.medium} alt="thumbnail"/>
            </th>
            <th>{user.name.first && user.name.first}</th>
            <th>{user.name.last && user.name.last}</th>
            <th>{user.gender && user.gender}</th>
            <th>{user.dob.date && user.dob.date}</th>
            <th>{user.dob.age && user.dob.age}</th>
            <th>{user.email && user.email}</th>
            <th>{user.phone && user.phone}</th>
            <th>{user.cell && user.cell}</th>
            <th>{user.location.street && user.location.street.number + " " + user.location.street.name}</th>
            <th>{user.location.city && user.location.city}</th>
            <th>{user.location.state && user.location.state}</th>
            <th>{user.location.country && user.location.country}</th>
            <th>{user.location.postcode && user.location.postcode}</th>
            <th>{user.location.timezone.description && user.location.timezone.description}</th>
            <th>{user.login.username && user.login.username}</th>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default EmployeeTable;