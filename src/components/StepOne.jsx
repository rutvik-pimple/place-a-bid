import React,{ useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import CustomSelect from "./CustomSelect";

const useStyles = makeStyles(theme => ({
    field: {
      margin:"10px"
    },
    button: {
        margin: theme.spacing(1)
      }
  }));

const options = [
    { value: 'HatchBack', label: 'HatchBack' },
    { value: 'Sedan', label: 'Sedan' },
    { value: 'SUV', label: 'SUV' },
]

export default function StepOne(props){
    const classes = useStyles();
    const { setStep, errors, touched, values } = props;
    // const handleSubmit = (values) => {
    //   props.next(values);
    // };
    
  
    return (
      <>
      <Grid container spacing={1}>
        <Grid item xs={6} >
            <Field
                name="source_location"
                label="Source Location"
                as={TextField}
                error={touched.source_location && errors.source_location}
                helperText={touched.source_location && errors.source_location}
                variant = "outlined"
                fullWidth
                className = {classes.field}
                required
            />
        </Grid>
        <Grid item xs={6} >
            <Field
                name="destination"
                label="Destination"
                as={TextField}
                error={touched.destination && errors.destination}
                helperText={touched.destination && errors.destination}
                variant = "outlined"
                fullWidth
                className = {classes.field}
                required
            />
        </Grid>
        <Grid item xs={12} >
            <CustomSelect
                name="car_type"
                label="Enter Car Type"
                // as={Autocomplete}
                error={touched.car_type && errors.car_type}
                helperText={touched.car_type && errors.car_type}
                variant = "outlined"
                fullWidth
                className = {classes.field}
                options={options}
                onChange={value=>values.car_type=value.value}
                value={values.car_type}
            />
        </Grid>
        <Grid item xs={12} >
            <Field
                name="number_of_travellers"
                label="Number of Travellers"
                as={TextField}
                error={touched.number_of_travellers && errors.number_of_travellers}
                helperText={touched.number_of_travellers && errors.number_of_travellers}
                variant = "outlined"
                fullWidth
                className = {classes.field}
                type="number"
            />
        </Grid>
        <Grid item xs={12} >
            <Button
                variant="contained"
                color="primary"
                // type="submit"
                onClick={()=>setStep(step=> 2)}
                className={classes.button}
                fullWidth
                disabled={!(values.car_type && values.source_location && values.destination && values.number_of_travellers)}
            >
                Enter Bid Details
            </Button>
        </Grid>
        </Grid>

      </>
    );
  };