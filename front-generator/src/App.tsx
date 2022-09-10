import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import ResumeTemplate from "./components/ResumeTemplate/ResumeTemplate";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputs = [{ name: "name" }, { name: "position" }];

  return (
    <main className="page">
      <form className="forms">
        {inputs.map((input) => {
          const name = input.name;
          return (
            <TextField
              label={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
              variant="standard"
              type="text"
              {...formik.getFieldProps(name)}
            />
          );
        })}
        <Button onClick={formik.submitForm}>Create</Button>
      </form>
      <div className="liveResume">
        <ResumeTemplate {...formik.values} />
      </div>
    </main>
  );
}

export default App;
