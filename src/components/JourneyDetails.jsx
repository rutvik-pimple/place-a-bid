import React from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root:{
        width:"100%",
        borderBottom: "solid 1px lightgrey"
    },
    row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    p:{
        leftMargin:"5px",
        fontSize:"14px",
        color:"grey",
        fontWeight:"bold"
    },
    details:{
        marginTop:"0",
        leftMargin:"5px",
        fontSize:"14px",
        fontWeight:"bold"
    }

  }));


function JourneyDetails(props) {
    const {setStep, values} = props
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.row}>
            <p className={classes.p}>JOURNEY DETAILS</p>
            <Button className={classes.button} startIcon={<EditOutlinedIcon/>} onClick={()=>setStep(1)} size="small" color="primary" >Edit</Button>
        </div>
        <p className={classes.details}>{values.source_location} - {values.destination}</p>
        <p className={classes.details}>{values.number_of_travellers}/{values.car_type}</p>
    </div>
  )
}

export default JourneyDetails