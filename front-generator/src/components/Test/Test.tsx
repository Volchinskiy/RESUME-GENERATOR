import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import s from "./Test.module.scss";

export default function Test() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit(value) {
      console.log(value);
    },
  });

  const renderinput = (formikValues: any) => {
    const inputs = Object.keys(formikValues);
    return inputs.map((input) => (
      <TextField
        label={input.charAt(0).toLocaleUpperCase() + input.slice(1)}
        variant="standard"
        margin="dense"
        size="small"
        type="text"
        {...formik.getFieldProps(input)}
      />
    ));
  };

  const addInput = () => {
    const { length } = Object.keys(formik.values);
    formik.setValues({ ...formik.values, ["rr" + length]: "" });
  };

  return (
    <div className={s.test}>
      {renderinput(formik.values)}
      <Button onClick={addInput}>Add New Input</Button>
    </div>
  );
}
