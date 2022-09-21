import React from "react";
import s from "./ResumeTemplate.module.scss";

interface propsI {
  [key: string]: any;
}

export default function ResumeTemplate({
  name,
  position,
  summary,
  total,
  // companies: {
  //   company1: { companyName_input1, date_input1, achievements_textarea1 },
  // },
  // experience: {
  //   experience1: { experienceName_input1, achievements_textarea1 },
  // },
  education_textarea,
  aboutMe,
  texSkills,
  projects_textarea,
  contacts,
  languages,
  salary,
}: propsI) {
  return (
    <div className={s.wrapper}>
      <div className={s.paper}>
        <div className={s.enteringComposition}>
          <div className={s.title}>
            <h1 className={s.name}>
              <span className={s.blackBackground}>{name}</span>
            </h1>
            <h2 className={s.position}>{position}</h2>
          </div>
          <div className={s.body}>
            <div className={s.leftSide}>
              <div className={s.infoBlock}>
                <div className={s.subtitle}>Summary:</div>
                <div className={s.text}>{summary}</div>
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Work Experience:</div>
                <div className={`${s.text} ${s.lh4mm}`}>
                  <p>{total}</p>
                  <br />
                  Company:
                  {/* <span className={s.grayBackground}>
                    {company ? company : "Company #1"}
                  </span>
                  <span className={s.grayWords}>
                    {date ? date : "00/0000 - 00/0000"}
                  </span>
                  <br />
                  {achievements.map((achievement: any, i: number) => (
                    <div key={`${achievement}_${i}`}>
                      <span className={s.fatDot}>•</span>
                      {achievement}
                      <br />
                    </div>
                  ))} */}
                  <br />
                  <span className={s.grayBackground}>Freelance</span>
                  <span className={s.grayWords}>12/2021 - 05/2022</span>
                  <br />
                  <span className={s.fatDot}>•</span> Make layout for small
                  business (Zoo store, Tattoo Master Portfolios, etc.) <br />
                  <span className={s.fatDot}>•</span> Transfer layout to React
                  components. <br />
                  <span className={s.fatDot}>•</span> In total, I completed 9
                  orders related to layout, React and pure Js. <br />
                </div>
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Another Work Experience:</div>
                <div className={`${s.text} ${s.lh4mm}`}>
                  <p>
                    <span className={s.grayBackground}>Metarhia</span> (OPEN
                    SOURCE) <br />
                    <span className={s.fatDot}>•</span> Сontributed to the
                    development of the Metaserverless/Console browser IDE.
                    <br />
                    <span className={s.fatDot}>•</span> Developed a CRUD system
                    for PostgreSQL, which is defined through a JSON description.
                    <br />
                    <span className={s.fatDot}>•</span> Helped new team members
                    (contributors) to run the project. <br />
                    <span className={s.fatDot}>•</span> Wrote the main part of
                    the manual "Installation and running on a local machine".
                    <br />
                  </p>
                </div>
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Education:</div>
                <div className={`${s.text} ${s.lh4mm}`}>
                  <dl>
                    <dt>
                      <span className={s.fatDot}>•</span> Timur Shemsedinov -
                      How Programming Works (in progress).
                    </dt>
                    <dd>
                      Сourse from a KPI teacher about the fundamentals of
                      programming.
                    </dd>

                    <dt>
                      <span className={s.fatDot}>•</span> webDev - Frontend
                      Interview Questions (in progress).
                    </dt>
                    <dd>
                      Сourse about questions that asked on frontend interview.
                    </dd>

                    <dt>
                      <span className={s.fatDot}>•</span> angular.io (in
                      progress).
                    </dt>
                    <dd>Angular documentation.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> Vladilen Minin -
                      Angular (in progress).
                    </dt>
                    <dd>Сourse about developing angular applications.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> Ave Coder - PostgreSQL
                      for beginners.
                    </dt>
                    <dd>Сourse about the fundamentals of PostgreSQL.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> webDew - Redux-saga.
                    </dt>
                    <dd>Сourse about middleware for Redux.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> CSG camp.
                    </dt>
                    <dd>
                      Two weeks camp from the company CSG where I developed a
                      fullstack application on React-Native and Express.
                    </dd>

                    <dt>
                      <span className={s.fatDot}>•</span> Archakov Blog - React
                      Pizza.
                    </dt>
                    <dd>Course about React, Redux app development.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> reactjs.org
                    </dt>
                    <dd>React documentation.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> learn.javascript.ru
                    </dt>
                    <dd>Resource that have an introduction to Js.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> BrainsCloud - layout
                      for beginners.
                    </dt>
                    <dd>Course about 'How to make layout?'.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> htmlbook.ru
                    </dt>
                    <dd>Resource that I learn HTML, CSS.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> Alexander Bebris -
                      Golden Playlist.
                    </dt>
                    <dd>Course that I learned English A0 - A2.</dd>

                    <dt>
                      <span className={s.fatDot}>•</span> HTML Academy -
                      Introduction to HTML.
                    </dt>
                    <dd>Course that covers the very basics of development.</dd>
                  </dl>
                </div>
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>About Me:</div>
                <div className={`${s.text} ${s.lh4mm}`}>
                  {aboutMe.map((text: string, i: number) => (
                    <div key={`${text}_${i}`}>
                      <p>{text}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.rightSide}>
              <div></div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Technical Skills:</div>
                {texSkills.map((skill: string, i: number) => (
                  <div className={`${s.text} ${s.lh4mm}`} key={`${skill}_${i}`}>
                    {skill}
                  </div>
                ))}
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Projects:</div>
                <div className={s.text}>
                  <dl>
                    <dt>https://buy-all.store/</dt>
                    <dd className={s.mb3mm}>
                      Store of clothing and accessories.
                    </dd>

                    <dt>https://github.com/Volchinskiy/RESUME-GENERATOR</dt>
                    <dd className={s.mb3mm}>
                      App that helps fast generate Resume (this resume generated
                      thanks to the app).
                    </dd>

                    <dt>
                      https://github.com/Volchinskiy/SELF-EDUCATION-APP-PET-PROJECT
                    </dt>
                    <dd>
                      App that helps me remember hard technical information.
                    </dd>
                  </dl>
                </div>
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Contacts:</div>
                {contacts.map((contact: any, i: number) => (
                  <div className={s.text} key={`${contact[0]}_${i}`}>
                    <span className={s.fatChar}>{contact[0]}</span> {contact[1]}
                  </div>
                ))}
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Languages:</div>
                {languages.map((language: any, i: number) => (
                  <div className={s.text} key={`${language[0]}_${i}`}>
                    <span className={s.fatChar}>{language[0]}</span>
                    {language[1]}
                  </div>
                ))}
              </div>

              <div className={s.infoBlock}>
                <div className={s.subtitle}>Salary Expectations:</div>
                <div className={s.text}>
                  {salary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
