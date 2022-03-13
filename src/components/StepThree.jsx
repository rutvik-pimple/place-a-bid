import React,{ useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField';
import JourneyDetails from "./JourneyDetails";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    field: {
      margin:"10px"
    },
    button: {
        margin: theme.spacing(1),
        marginTop:theme.spacing(2)
      },
    root:{
        width:"100%",
        borderBottom: "solid 1px lightgrey",
        textAlign:"center"
    },
    amount:{
        fontSize:"50px",
        fontFamily:"Arial, Helvetica, sans-serif",
        margin: "40px 0px",
    }
  }));

export default function StepThree (props){
    const classes = useStyles();
    const { setStep, errors, touched, values } = props;

    // const handleSubmit = (values) => {
    //   props.next(values);
    // };
    

  
    return (
        <>
        <h1>Step 3</h1>
        <JourneyDetails setStep={setStep} values={values}/>
        <div className={classes.root}>
            <h4 className={classes.amount}>₹{values.bid}</h4>
        </div>
        <Field
                name="mobile_number"
                label="Enter your 10 digit Mobile Number"
                as={TextField}
                error={touched.mobile_number && errors.mobile_number}
                helperText={touched.mobile_number && errors.mobile_number}
                variant = "outlined"
                fullWidth
                className = {classes.field}
            />
        <Field
                name="full_name"
                label="Enter your Name"
                as={TextField}
                error={touched.full_name && errors.full_name}
                helperText={touched.full_name && errors.full_name}
                variant = "outlined"
                fullWidth
                className = {classes.field}
            />
        <Button
            variant="contained"
            color="primary"
            // type="submit"
            onClick={()=>setStep(4)}
            className={classes.button}
            fullWidth
            disabled={!(values.bid>0)}
        >
            Verify via OTP
        </Button>
      </>
    );
  };