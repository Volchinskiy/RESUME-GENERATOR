import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import ResumeTemplate from "./components/ResumeTemplate/ResumeTemplate";
// import Test1 from "./components/Test1/Test1";
// import Test2 from "./components/Test2/Test2";

// когда рендериться резюму в пдф второй проект вылазит за пределы рамки потому что там длинное слово и машина не может его перенести(разделить для переноса на следующюю строку), это решаеться если увеличить ширину правой стороны.

interface CompaniesI {
  [key: string]: {
    [key: string]: string;
  };
}
interface initialValuesI {
  [key: string]: string | CompaniesI | any;
}

function App() {
  const formik = useFormik<initialValuesI>({
    initialValues: {
      name_input: "",
      position_input: "",
      summary_input: "",
      total_input: "",
      companies: {
        company1: {
          companyName_input1: "",
          date_input1: "",
          achievements_textarea1: "",
        },
      },
      experience: {
        experience1: {
          experienceName_input1: "",
          achievements_textarea1: "",
        },
      },
      education_textarea: "",
      aboutMe_textarea: "",

      texSkills_textarea: "",
      projects_textarea: "",
      contacts_textarea: "",
      languages_textarea: "",
      salary_input: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const input = (name: string, value: any, label: string, i: number) => (
    <TextField
      key={`${name}_${i}`}
      label={label.charAt(0).toLocaleUpperCase() + label.slice(1)}
      variant="standard"
      size="small"
      type="text"
      name={name}
      onChange={formik.handleChange}
      value={value}
      style={{ width: "280px", margin: "5px 0px" }}
    />
  );

  const textarea = (name: string, value: any, label: string, i: number) => (
    <div className="textareaWrapper" key={`${name}_${i}`}>
      <TextareaAutosize
        placeholder={label.charAt(0).toLocaleUpperCase() + label.slice(1)}
        name={name}
        minRows={3}
        maxRows={10}
        onChange={formik.handleChange}
        value={value}
      />
    </div>
  );

  const renderDifficultStructure = (
    formikValues: any,
    form: string,
    structure: string
  ) => {
    const structureObj = formikValues[form];
    const instances = Object.keys(structureObj);
    return instances.map((instance: string, i: number) => {
      const instanceData = structureObj[instance];
      const forms = Object.keys(instanceData);
      return (
        <div className="structureInstance" key={`${instance}_${i}`}>
          <div>{instance}</div>
          {forms.map((form, i) => {
            const [label, tag] = form.split("_");
            const name = `${structure}.${instance}.${form}`;
            const value = formik.values[`.${name}`];
            if (tag.includes("input")) {
              return input(name, value, label, i);
            }
            return textarea(name, value, label, i);
          })}
        </div>
      );
    });
  };

  const renderForms = (formikValues: any) => {
    const forms = Object.keys(formikValues);

    return forms.map((form, i) => {
      const [label, tag] = form.split("_");

      if (label === "companies") {
        return renderDifficultStructure(formikValues, form, "companies");
      }

      if (label === "experience") {
        return renderDifficultStructure(formikValues, form, "experience");
      }
      const value = formik.values[form];
      if (tag === "input") return input(form, value, label, i);
      return textarea(form, value, label, i);
    });
  };

  const addComapny = () => {
    const { length } = Object.keys(formik.values.companies);
    const newLength = length + 1;
    formik.setValues({
      ...formik.values,
      companies: {
        ...formik.values.companies,
        [`company${newLength}`]: {
          [`companyName_input${newLength}`]: "",
          [`date_input${newLength}`]: "",
          [`achievements_textarea${newLength}`]: "",
        },
      },
    });
  };

  const addExperience = () => {
    const { length } = Object.keys(formik.values.experience);
    const newLength = length + 1;
    formik.setValues({
      ...formik.values,
      experience: {
        ...formik.values.experience,
        [`experience${newLength}`]: {
          [`experienceName_input${newLength}`]: "",
          [`achievements_textarea${newLength}`]: "",
        },
      },
    });
  };

  return (
    <main className="page">
      <form className="forms">
        <div className="wrapper">{renderForms(formik.values)}</div>
        <Button onClick={addExperience}>Add Experience</Button>
        <Button onClick={addComapny}>Add Company</Button>
        <Button onClick={formik.submitForm}>Create</Button>
      </form>
      <div className="liveResume">
        <ResumeTemplate {...formik.values} />
      </div>
    </main>
  );
}

export default App;
