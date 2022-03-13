import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root:{
        
    },
    row:{
        width:"100%",
        borderBottom: "solid 1px lightgrey",
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


function BidDetails(props) {
    const { values } = props
    const classes = useStyles();
  return (
    <div className={classes.row}>
        <div >
            <p className={classes.p}>BID DETAILS</p>
            <p className={classes.details}>+91-{values.mobile_number}</p>
            <p className={classes.details}>{values.full_name}</p>
        </div>
        <div>
            <h3>₹567</h3>
            <p>fixed price</p>
        </div>
    </div>
  )
}

export default BidDetails