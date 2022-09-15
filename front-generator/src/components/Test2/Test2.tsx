import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

export default function Test2() {
  const formik = useFormik({
    initialValues: {
      companies: {
        company1: {
          company_input1: "",
          date_input1: "",
          achievements_textarea1: "",
        },
      },
    },
    onSubmit(value) {
      console.log(value);
    },
  });

  return (
    <div>
      <TextField
        value={formik.values.companies.company1.company_input1}
        name={"companies.company1.company_input1"}
        onChange={formik.handleChange}
        size="small"
      ></TextField>
    </div>
  );
}
