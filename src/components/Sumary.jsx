import React,{ useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import JourneyDetails from "./JourneyDetails";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import BidDetails from "./BidDetails";
import OtpInput, { ResendOTP } from 'otp-input-react';

const useStyles = makeStyles(theme => ({
    field: {
      margin:"25px"
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


export default function Summary (props){
    const classes = useStyles();
    const { setStep, errors, touched, values } = props;
    const [submited, setSubmited] = useState(false)
  
    return (
        <>
        {submited ? (
            <h3>Bid Placed Successfully</h3>
        ):(
            <>
            <JourneyDetails setStep={setStep} values={values}/>
            <BidDetails values={values} />
            <Button
                variant="contained"
                color="primary"
                // type="submit"
                onClick={()=>setSubmited(true)}
                className={classes.button}
                fullWidth
                disabled={!(values.bid>0)}
            >
                Submit
            </Button>
            </>
        )}
      </>
    );
  };