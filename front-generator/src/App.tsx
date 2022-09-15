import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import ResumeTemplate from "./components/ResumeTemplate/ResumeTemplate";
import Test1 from "./components/Test1/Test1";
import Test2 from "./components/Test2/Test2";

// осталось продумать как динамически генерировать куски резюме как например достижение во время работы в компании, их же может быть разное количество или обучение на курсах их тоже может быть много
// раздел про меня будет всегда содержать 3 абзатца
// проектов на пример тоже всегда будет 3
// языков, тех скилов, контактов может быть множество

// когда рендериться резюму в пдф второй проект вылазит за пределы рамки потому что там длинное слово и машина не может его перенести(разделить для переноса на следующюю строку), это решаеться если увеличить ширину правой стороны.

function App() {
  const formik = useFormik({
    initialValues: {
      name_input: "",
      position_input: "",
      summary_input: "",
      total_input: "",

      companies: [
        { company_input1: "", date_input1: "", achievements_textarea1: "" },
      ],

      texSkills_textarea: "",
      salary_input: "",
      contacts_textarea: "",
      languages_textarea: "",
      aboutMe_textarea: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const renderForms = (formikValues: any) => {
    const forms = Object.keys(formikValues);

    return forms.map((form, i) => {
      const [name, tag] = form.split("_");

      if (name === "companies") {
        const companies = formikValues[form];
        return companies.map((company: any) => {
          // const forms = Object.keys(company);
          return renderForms(company);
        });
        // console.log(formikValues[form]);
      }

      if (tag === "input") {
        return (
          <TextField
            key={`${form}_${i}`}
            label={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
            variant="standard"
            margin="dense"
            size="small"
            type="text"
            {...formik.getFieldProps(form)}
          />
        );
      }

      return (
        <TextareaAutosize
          key={`${form}_${i}`}
          minRows={3}
          placeholder={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
          {...formik.getFieldProps(form)}
        />
      );
    });
  };

  const addComapny = () => {
    // const { length } = Object.keys(formik.values);
    // formik.setValues({ ...formik.values, ["rr" + length]: "" });
  };

  return (
    <main className="page">
      <form className="forms">
        <Test1></Test1>
        {/* <Test2></Test2> */}
        {/* <div className="wrapper">{renderForms(formik.values)}</div>
        <Button onClick={addComapny}>Add Company</Button> */}
      </form>
      <div className="liveResume">
        <ResumeTemplate {...formik.values} />
      </div>
    </main>
  );
}

export default App;
