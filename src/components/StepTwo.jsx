import React,{ useState,} from "react";
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
      }
  }));

export default function StepTwo (props){
    const classes = useStyles();
    const { setStep, errors, touched, values } = props;
    const [amount, setAmount] = useState(values.bid)

    // const handleSubmit = (values) => {
    //   props.next(values);
    // };

    // console.log(values)

  
    return (
        <>
        <JourneyDetails setStep={setStep} values={values}/>

        <FormControl style={{marginTop:"15px"}} fullWidth >
          <InputLabel htmlFor="standard-adornment-amount">Bid Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            name="bid"
            value={amount}
            onChange={(e)=>{setAmount(e.target.value); values.bid =e.target.value }}
            startAdornment={<InputAdornment style={{fontSize:"35px"}} position="start">₹</InputAdornment>}
            style={{fontSize:"35px",borderBottom:"none"}}
            type="number"
          />
        </FormControl>
        <Button
            variant="contained"
            color="primary"
            // type="submit"
            onClick={()=>setStep(3)}
            className={classes.button}
            fullWidth
            disabled={!(values.bid>0)}
        >
            Next
        </Button>
      </>
    );
  };
  

  


  
  