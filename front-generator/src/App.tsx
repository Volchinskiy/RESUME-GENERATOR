import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import ResumeTemplate from "./components/ResumeTemplate/ResumeTemplate";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      summary: "",
      total: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // inputs
  const title = [{ name: "name" }, { name: "position" }];
  const summary = [{ name: "summary" }];
  const workExperience = [{ name: "total" }];

  const renderInput = (input: any) => {
    const name = input.name;
    return (
      <TextField
        label={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
        variant="standard"
        margin="dense"
        size="small"
        type="text"
        {...formik.getFieldProps(name)}
      />
    );
  };

  return (
    <main className="page">
      <form className="forms">
        <div className="wrapper">
          <div>{title.map(renderInput)}</div>
          <div>{summary.map(renderInput)}</div>
          <div>{workExperience.map(renderInput)}</div>
          <Button onClick={formik.submitForm}>Create</Button>
        </div>
      </form>
      <div className="liveResume">
        <ResumeTemplate {...formik.values} />
      </div>
    </main>
  );
}

export default App;

// {inputs.map((input) => {
//   const name = input.name;
//   return (
// <TextField
//   label={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
//   variant="standard"
//   type="text"
//   {...formik.getFieldProps(name)}
// />
//   );
// })}
