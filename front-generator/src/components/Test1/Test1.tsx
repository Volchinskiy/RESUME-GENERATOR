import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import s from "./Test.module.scss";

interface CompaniesI {
  [key: string]: {
    [key: string]: string;
  };
}
interface initialValuesI {
  [key: string]: string | CompaniesI | any;
}

export default function Test1() {
  const formik = useFormik<initialValuesI>({
    initialValues: {
      companies: {
        company1: {
          company_input1: "",
          date_input1: "",
          achievements_textarea1: "",
        },
        company2: {
          company_input2: "",
          date_input2: "",
          achievements_textarea2: "",
        },
      },
      name_input: "",
    },
    onSubmit(value) {
      console.log(value);
    },
  });

  const input = (form: any, value: any, label: any, i: number) => {
    return (
      <TextField
        key={`${form}_${i}`}
        label={label.charAt(0).toLocaleUpperCase() + label.slice(1)}
        variant="standard"
        margin="dense"
        size="small"
        type="text"
        name={form}
        onChange={formik.handleChange}
        value={value}
      />
    );
  };

  const textarea = (form: string, value: any, label: any, i: number) => {
    return (
      <TextareaAutosize
        key={`${form}_${i}`}
        minRows={3}
        placeholder={label.charAt(0).toLocaleUpperCase() + label.slice(1)}
        name={form}
        onChange={formik.handleChange}
        value={value}
      />
    );
  };

  const renderForms = (formikValues: any) => {
    const forms = Object.keys(formikValues);

    return forms.map((form, i) => {
      const [name, tag] = form.split("_");

      if (name === "companies") {
        const companiesObj = formikValues[form];
        const companies = Object.keys(companiesObj);
        return companies.map((company: string, i: number) => {
          const companyData = companiesObj[company];
          const forms = Object.keys(companyData);
          return (
            <div key={`${company}_${i}`}>
              <div>{company}</div>
              {forms.map((form, i) => {
                const [label, tag] = form.split("_");
                const name = `companies.${company}.${form}`;
                if (tag.includes("input")) {
                  return (
                    <TextField
                      key={`${form}_${i}`}
                      label={
                        label.charAt(0).toLocaleUpperCase() + label.slice(1)
                      }
                      variant="standard"
                      margin="dense"
                      size="small"
                      type="text"
                      name={name}
                      onChange={formik.handleChange}
                      value={formik.values[`.${name}`]}
                    />
                  );
                }
                return (
                  <TextareaAutosize
                    key={`${form}_${i}`}
                    minRows={3}
                    placeholder={
                      label.charAt(0).toLocaleUpperCase() + label.slice(1)
                    }
                    name={name}
                    onChange={formik.handleChange}
                    value={formik.values[`.${name}`]}
                  />
                );
              })}
            </div>
          );
        });
      }
      const value = formik.values[form];
      if (tag === "input") return input(form, value, name, i);
      return textarea(form, value, name, i);
    });
  };

  const addInput = () => {
    const { length } = Object.keys(formik.values.companies);
    formik.setValues({
      ...formik.values,
      companies: {
        ...formik.values.companies,
        [`company${length + 1}`]: {
          company_input1: "",
          date_input1: "",
          achievements_textarea1: "",
        },
      },
    });
    console.log(formik.values);
  };

  return (
    <div className={s.test}>
      {renderForms(formik.values)}
      <Button onClick={addInput}>Add New Input</Button>
      <Button onClick={formik.submitForm}>Create</Button>
    </div>
  );
}
