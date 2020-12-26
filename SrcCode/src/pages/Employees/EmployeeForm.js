import React, { useState, useEffect } from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Radio,
  makeStyles,
} from "@material-ui/core";
import { useForms, Form } from "../../components/useForms";

import Input from "../../components/controls/Input";
import RadioGroups from "../../components/controls/RadioGroups";
import Select from "../../components/controls/Select";
import Btn from "../../components/controls/Btn";
import * as EmployeeServices from "../../service/EmployeeServices";

// genders

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

// initializng the form
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  geder: "male",
  company: "",
  address: "",
  departmentId: "",
};

// Styles
const useStyles = makeStyles({
  root: {
    margin: "0  auto",
  },
});

function EmployeeForm(props) {

  const {addOrEdit, recodeForEdit}  = props
  const { values, setValues, handelInputChange, errors, setErrors, resetForm } = useForms(initialValues
  );

  // validation function
  const validate = (fieldValues = values) => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "Name is Required.";
    temp.company = values.company ? "" : "Company Name is Required.";
    temp.address = values.address ? "" : "Address is Required.";

    
    temp.email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(values.email) ? "" : "Email is Not valid.";
    temp.mobile = values.mobile.length > 9 ? "" : "Minium 10 Numbers Required";
    temp.departmentId =
      values.departmentId.length != 0 ? "" : "This fiels is Required";

    setErrors({
      
      ...temp,
    });

    return Object.values(temp).every( x => x == '')
  };

  // handel Submit

  const handelSubmit = e => {
    e.preventDefault()
    if (validate()) {
      addOrEdit(values, resetForm)
    }
  };

 useEffect(() => {
   if (recodeForEdit != null)
     setValues({
       ...recodeForEdit
     })
 }, [recodeForEdit])

  const classes = useStyles();
  return (
    <Form onSubmit={handelSubmit}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handelInputChange}
            error = {errors.fullName}
          />

          <Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handelInputChange}
            error = {errors.email}
          />
          <Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handelInputChange}
            error = {errors.mobile}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Input
            variant="outlined"
            label="Company"
            name="company"
            value={values.company}
            onChange={handelInputChange}
            error = {errors.company}
          />
          <Input
            variant="outlined"
            label="Address"
            name="address"
            value={values.address}
            onChange={handelInputChange}
            error = {errors.address}
          />

          <Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handelInputChange}
            options={EmployeeServices.getDepartmentCollection()}
            error = {errors.departmentId}
          />
        </Grid>

        <div className={classes.root}>
          <Btn type="submit" text="Submit" />
          <Btn color="default" text="Reset" onClick={resetForm} />
        </div>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
