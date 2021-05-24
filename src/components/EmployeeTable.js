import React from 'react'

const EmployeeTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First</th>
          <th>Last</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Cell</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Postal</th>
          <th>Timezone</th>
          <th>Username</th>
        </tr>
      </thead>
      {users.results.map(user => (
        <tbody>
          <tr>
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
        </tbody>
        ))
      }
    </table>
  )
}

export default EmployeeTable;