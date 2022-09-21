import React from "react";

import ResumeTemplate from "./../ResumeTemplate/ResumeTemplate";

interface propsI {
  [key: string]: any;
}

export default function DataConverter({
  name_input: name,
  position_input: position,
  summary_input: summary,
  total_input: total,
  companies,
  experience,
  education_textarea: education,
  aboutMe_textarea: aboutMe,

  texSkills_textarea: texSkills,
  projects_textarea: projects,
  contacts_textarea: contacts,
  languages_textarea: languages,
  salary_input: salary,
}: propsI) {
  const makeArray = (str: string) => str.split("\n");
  const makeAnother = (str: string) => {
    const arr = str.split("\n");
    const arr2 = arr.map((str) => {
      const arr = str.split(" ");
      return [arr[0], arr.slice(1).join(" ")];
    });
    return arr2;
  };

  if (!name) name = "Enter name";
  if (!position) position = "Enter position that you want.";
  if (!summary) summary = "Enter a short information about yourself.";
  if (!total) total = "In total I work ... years/months.";
  if (!aboutMe) {
    aboutMe = [
      "In development, I like that I can create, something, which can bring practical benefits to a large number of people.",
      "Before development, I did tattoos and drew a lot. Therefore, I pay a lot of attention to trifles, especially to what is relate with the visual part of the application. Pixel Perfect is about me.",
      "In my free time I like doing sports, watching some videos about travelling and improving my English.",
    ];
  } else {
    aboutMe = makeArray(aboutMe);
  }
  if (!Object.keys(companies).length) {
    companies = [
      {
        companyName_input1: "",
        date_input1: "",
        achievements_textarea1: ["a", "b", "c"],
      },
    ];
  } else {
  }

  if (!texSkills) {
    texSkills = ["React", "Redux", "JS"];
  } else {
    texSkills = makeArray(texSkills);
  }
  if (!contacts) {
    contacts = [
      ["Name:", "John Doe"],
      ["GitHub:", "https://github.com/..."],
      ["Phone:", "+000 00 000 00 00"],
      ["Location:", "Dream City"],
      ["...", ""],
    ];
  } else {
    contacts = makeAnother(contacts);
  }
  if (!languages) {
    languages = [
      ["Ukrainian", "Native"],
      ["English", "C2"],
      ["...", ""],
    ];
  } else {
    languages = makeAnother(languages);
  }
  if (!salary) salary = "1 limon/nona sec";

  return (
    <>
      <ResumeTemplate
        name={name}
        position={position}
        summary={summary}
        total={total}
        aboutMe={aboutMe}
        texSkills={texSkills}
        contacts={contacts}
        languages={languages}
        salary={salary}
      />
    </>
  );
}
