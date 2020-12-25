import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "../Employees/EmployeeForm";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
} from "@material-ui/core";

import * as EmployeeServices from "../../service/EmployeeServices";
import useTable from "../../components/controls/useTable";
import Input from '../../components/controls/Input'
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Btn from '../../components/controls/Btn';
import Popup from "../../components/Popup";
import Action from "../../components/controls/Action";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// styles

const useStyles = makeStyles({
  pageContent: {
    margin: "2em",
    padding: "2em",
    boxShadow: "none",
  },
  mail: {
    opacity: "0.7",
    fontSize: "1em",
  },
  name: {
    fontWeight: "500",
    fontSize: "1.2em",
  },
  company: {
    fontWeight: "600",
    fontSize: "1.2em",
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px',
    padding: '2em '
}
});

// headCEll

const headCells = [
  { id: "fullName", label: "Basic Info" },
  { id: "company", label: "Company" },
  { id: "actions", label: "Actions", disableSorting: true  },
];

function Employees() {
  const classes = useStyles();

  // employee reacodes

  const [recods, setRecods] = useState(EmployeeServices.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
  const [openPopup, setOpenPopup] = useState(false);
  // recodes for edit

  const [recodeForEdit, setRecodeForEdit] = useState(null)
  // call the table container
    const {
        TblContainer,
        TblHead,
      TblPagination,
      recordsAfterPagingAndSorting
  } = useTable(recods, headCells, filterFn);
  
  // handel search

  const handelSearch = e => {
    let target = e.target
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.fullName.includes(target.value))
      } 
    })
  }

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0)
      EmployeeServices.insertEmployee(employee)
    else
      EmployeeServices.updateEmployee(employee)
    resetForm()
    
    setOpenPopup(false)
    setRecods(EmployeeServices.getAllEmployees())
  }

  // edit button function

  const openInPopup = item => {
    setRecodeForEdit(item)
    setOpenPopup(true)
  }

  // delete function
  const onDelete = id => {
    if (window.confirm(`Are You Sure to Delete this Contact`)) {
      EmployeeServices.deleteEmployee(id);
      setRecods(EmployeeServices.getAllEmployees())
    }
  }

  return (
    <div>
      <PageHeader
        title="Contact"
        subTitle="Welcome to the contact Page"
        icon={<PermContactCalendarIcon fontSize="20px" />}
      />
      <Paper className={classes.pageContent}>
        {/*  */}

        <Toolbar>
          <Input
            label='Search Employees'
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                  <Search />
              </InputAdornment>)
          }}
            onChange={handelSearch}
          
          />

          <Btn
          text='Add Contact'
          variant='outlined'
          startIcon={<AddIcon />}
            className={classes.newButton}
            onClick= {() => setOpenPopup(true)  }
        />
        </Toolbar>
        

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow>
                <TableCell key={item.id}>
                  <span className={classes.name}>{item.fullName}</span> <br />
                  <span className={classes.mail}>{item.email}</span>
                </TableCell>
                <TableCell key={item.id}>
                  <span className={classes.company}>{item.company}</span>
                </TableCell>
                <TableCell >
                  <Action
                    color='primary' 
                  >  <EditIcon
                      onClick={ ()=>{openInPopup(item)} }/>
                  </Action>
                  <Action
                    color='primary' 
                    onClick={ ()=> onDelete(item.id)}
                  >  <DeleteOutlineIcon/>
                  </Action>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination/>
      </Paper>
              
      <Popup
        title= 'Add New Contact'
        openPopup={openPopup}
        setOpenPopup = {setOpenPopup}
      > <EmployeeForm addOrEdit={addOrEdit} recodeForEdit={recodeForEdit} />
      </Popup>

    </div>
  );
}

export default Employees;
