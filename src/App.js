import './App.css';
import React,{ useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StepTwo from './components/StepTwo';
import StepOne from './components/StepOne';
import StepThree from './components/StepThree'
import { makeStyles } from "@material-ui/core/styles";
import StepFour from './components/StepFour'
import Summary from './components/Sumary'

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "35%",
    minWidth: "400px"
  }
}));

const renderStep = (step, setStep, values, errors, touched, handleSubmit) => {
  switch (step) {
    case 1:
      return <StepOne setStep={setStep} values={values} errors={errors} touched={touched} handleSubmit={handleSubmit} />;
    case 2:
      return <StepTwo setStep={setStep} values={values} errors={errors} touched={touched} />;
    case 3:
      return <StepThree setStep={setStep} values={values} errors={errors} touched={touched} />;
    case 4:
      return <StepFour setStep={setStep} values={values} errors={errors} touched={touched} />;
    case 5:
      return <Summary setStep={setStep} values={values} errors={errors} touched={touched} />;
    default:
      return <StepOne setStep={setStep} values={values} errors={errors} touched={touched} />;
  }
};


function App() {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const formData = {
    source_location: "",
    destination: "",
    car_type: "",
    number_of_travellers: "",
    bid: 0,
    mobile_number: "",
    full_name: "",
  };
  const handleSubmit = () =>  {
    console.log("submit")
    setStep(step => step + 1);
  }

  const Validate = Yup.object().shape({
    source_location: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    destination: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    mobile_number: Yup.string()
      .min(10, 'Invalid')
      .max(10, 'Invalid')
      .required('Required'),
    full_name: Yup.string()
      .min(2, 'Invalid')
      .max(50, 'Invalid')
      .required('Required'),
    car_type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number_of_travellers: Yup.number().required('Required').when('car_type', (car_type, schema) => {
      return car_type==="SUV" ? schema.max(6) : schema.max(4)})
  });

  console.log(step)


  return (
    <div className="App">
      <header className="App-header1">
        <h4 style={{marginLeft:"1.5em"}}>Vahak</h4>
      </header>
      <header className="App-header2">
        {step===5 ? (
          "Summary & Place Your Bid"
        ):(
          `Place Your Bid Step (${step}/4)`
        )}
      </header>
      <Formik
        // enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validationSchema={Validate}
      >
        {({ values, errors, touched }) => (
          <Form className={classes.form}>
            {renderStep(step, setStep, values, errors, touched, handleSubmit)}
            {/* <StepButton step={step} /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
