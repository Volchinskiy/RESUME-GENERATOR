import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import ResumeTemplate from "./components/ResumeTemplate/ResumeTemplate";
import Test from "./components/Test/Test";

// осталось продумать как динамически генерировать куски резюме как например достижение во время работы в компании, их же может быть разное количество или обучение на курсах их тоже может быть много
// раздел про меня будет всегда содержать 3 абзатца
// проектов на пример тоже всегда будет 3
// языков, тех скилов, контактов может быть множество

// когда рендериться резюму в пдф второй проект вылазит за пределы рамки потому что там длинное слово и машина не может его перенести(разделить для переноса на следующюю строку), это решаеться если увеличить ширину правой стороны.

// delete redux...

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      summary: "",
      total: "",

      company: "",
      date: "",
      achievements: "",

      texSkills: "",
      salary: "",
      contacts: "",
      languages: "",
      aboutMe: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // inputs
  const title = [{ name: "name" }, { name: "position" }];
  const summary = [{ name: "summary" }];
  const workExperience = [
    { name: "total" },
    { name: "company" },
    { name: "date" },
  ];
  const achievements = [{ name: "achievements" }];
  const texSkills = [{ name: "texSkills" }];
  const salary = [{ name: "salary" }];
  const contacts = [{ name: "contacts" }];
  const languages = [{ name: "languages" }];
  const aboutMe = [{ name: "aboutMe" }];

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

  const renderTextArea = (input: any) => {
    const name = input.name;
    return (
      <TextareaAutosize
        placeholder={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
        minRows={5}
        {...formik.getFieldProps(name)}
      />
    );
  };

  const addComapny = () => {};

  return (
    <main className="page">
      <form className="forms">
        <div className="wrapper">
          <Test />
          {/* <div>{title.map(renderInput)}</div>
          <div>{summary.map(renderInput)}</div>
          <div>{workExperience.map(renderInput)}</div>
          <div>{achievements.map(renderTextArea)}</div>
          <div>{aboutMe.map(renderTextArea)}</div>
          <div>{texSkills.map(renderTextArea)}</div>
          <div>{contacts.map(renderTextArea)}</div>
          <div>{languages.map(renderTextArea)}</div>
          <div>{salary.map(renderInput)}</div>
          <Button>Add Company</Button>
          <Button onClick={formik.submitForm}>Create</Button> */}
        </div>
      </form>
      <div className="liveResume">
        <ResumeTemplate {...formik.values} />
      </div>
    </main>
  );
}

export default App;
