import React from 'react';
//utility
import moment from 'moment';
//material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


const EmployeeTable = ({ employees, handleSort }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Picture</TableCell>
          <TableCell>First <Button onClick={() => handleSort("first")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Last <Button onClick={() => handleSort("last")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>DOB</TableCell>
          <TableCell>Age <Button onClick={() => handleSort("age")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Email <Button onClick={() => handleSort("email")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Phone <Button onClick={() => handleSort("phone")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Cell <Button onClick={() => handleSort("cell")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Street <Button onClick={() => handleSort("street")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>City <Button onClick={() => handleSort("city")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>State <Button onClick={() => handleSort("state")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Country <Button onClick={() => handleSort("country")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Postal <Button onClick={() => handleSort("postal")}><ArrowDropDownIcon /></Button></TableCell>
          <TableCell>Timezone</TableCell>
          <TableCell>Username <Button onClick={() => handleSort("username")}><ArrowDropDownIcon /></Button></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map(user => (
          <TableRow key={user.login.uuid}>
            <TableCell>
              <Avatar src={user.picture.medium && user.picture.medium} alt="thumbnail" className={classes.large} />
            </TableCell>
            <TableCell>{user.name.first && user.name.first}</TableCell>
            <TableCell>{user.name.last && user.name.last}</TableCell>
            <TableCell>{user.gender && user.gender}</TableCell>
            <TableCell>{user.dob.date && moment(user.dob.date).format('M/D/YYYY')}</TableCell>
            <TableCell>{user.dob.age && user.dob.age}</TableCell>
            <TableCell>{user.email && user.email}</TableCell>
            <TableCell>{user.phone && user.phone}</TableCell>
            <TableCell>{user.cell && user.cell}</TableCell>
            <TableCell>{user.location.street && user.location.street.number + " " + user.location.street.name}</TableCell>
            <TableCell>{user.location.city && user.location.city}</TableCell>
            <TableCell>{user.location.state && user.location.state}</TableCell>
            <TableCell>{user.location.country && user.location.country}</TableCell>
            <TableCell>{user.location.postcode && user.location.postcode}</TableCell>
            <TableCell>{user.location.timezone.description && user.location.timezone.description}</TableCell>
            <TableCell>{user.login.username && user.login.username}</TableCell>
          </TableRow>
          ))
        }
      </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeeTable;