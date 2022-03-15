import React,{ useState,useEffect } from "react";
import JourneyDetails from "./JourneyDetails";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import BidDetails from "./BidDetails";
import OtpInput, { ResendOTP } from 'otp-input-react';
import Grid from '@material-ui/core/Grid';

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

const renderButton = (buttonProps) => {
return <Button size="small" color="primary" {...buttonProps}>Resend OTP</Button>;
};

export default function StepFour (props){
    const classes = useStyles();
    const { setStep, errors, touched, values } = props;
    const [disabled, setDisabled] = useState(false)
    const [otp, setOtp] = useState("")
    const [wrongOtp, setWrongOtp] = useState(false)
    // const handleSubmit = (values) => {
    //   props.next(values);
    // };
    const handleOtpSubmit = () => {
        setWrongOtp(true)
    }
    console.log(otp)
    const handleResend = () => {
        setOtp("")
        setWrongOtp(false)
        setDisabled(false)
    }
    
    useEffect(() => {
      if(otp==="1234"){
        setStep(5)
      }  
      
    }, [otp])
    

    const renderTime = (remainingTime) => {
        if (remainingTime === 0){
            setDisabled(true)
        }
        return <Button>{remainingTime} sec remaining</Button>;
      };
    

  
    return (
        <>
        <Grid item xs={11} >
        <JourneyDetails setStep={setStep} values={values}/>
        </Grid>
        <Grid item xs={11} >
        <BidDetails values={values} />
        </Grid>
        {wrongOtp ? (
            <p>You have entered wrong OTP.</p>
        ):(
            <p>We've sent OTP to your mobile number {values.mobile_number}, Please enter it below to submit your bid</p>
        )}
        <Grid item xs={11} >
        <OtpInput
            className={classes.field}
            name="otp"
            value={otp}
            onChange={setOtp}
            separator={<span>-</span>}
            autoFocus OTPLength={4} otpType="number" 
            disabled={disabled} 
        />
        
        <ResendOTP onResendClick={handleResend} renderButton={renderButton} renderTime={renderTime} />
        </Grid>
        <Grid item xs={11} >
        <Button
            variant="contained"
            color="primary"
            // type="submit"
            onClick={handleOtpSubmit}
            className={classes.button}
            fullWidth
            disabled={!(values.bid>0)}
        >
            Verify
        </Button>
        </Grid>
      </>
    );
  };