import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

// styles

const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      margin: "1em",
      width: "80%",
    },
  },
});

export function useForms(initialValues, validateOnChange= false, validate ) {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({})
  // handel input changes

  const handelInputChange = (e) => {
    const { name, value } = e.target;

    // call the state values

    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange)
      validate({[name]: value} )
      
  };

   // reset function 

   const resetForm = () => {
    setValues(initialValues);
    setErrors({})
  }
  return { values, setValues, handelInputChange, errors,setErrors, resetForm };
}

export function Form(props) {
  const classes = useStyles();
  const {children, ...other} = props
  return <form className={classes.root} autoComplete='off' {...other} >{props.children}</form>;
}
