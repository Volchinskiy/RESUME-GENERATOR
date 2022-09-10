import React from "react";
import s from "./ResumeTemplate.module.scss";

interface propsI {
  [key: string]: string;
}

export default function ResumeTemplate({ name }: propsI) {
  return (
    <div className={s.paper}>
      <div className="entering-composition">
        <div className="title">
          <h1 className="name">
            <span className="blackBackground">
              {name ? name : "enter your name"}
            </span>
          </h1>
          <h2 className="position">Fullstack React Node.js Developer</h2>
        </div>
        <div className="body">
          <div className="left-side">
            <div className="info-block">
              <div className="subtitle">Summary:</div>
              <div className="text">
                I develop applications on React and Node.js using TypeScript.
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">Work Experience:</div>
              <div className="text lh4mm">
                <p>The total number of 10 months.</p>
                <br />
                <p>
                  Company: <span className="grayBackground">We Are Future</span>{" "}
                  <span className="grayWords">05/2022 - 09/2022</span>
                  <br />
                  <span className="fatDot">•</span> Took an active part in the
                  development of an online store of clothing and accessories.{" "}
                  <br />
                  <span className="fatDot">•</span> Worked in a team of 15
                  people, developed pages for the store's admin panel from
                  scratch. <br />
                  <span className="fatDot">•</span> Improved search for products
                  and orders. <br />
                  <span className="fatDot">•</span> Wrote a script to remove
                  products from a specific supplier (more than 24,000 products).{" "}
                  <br />
                  <span className="fatDot">•</span> Helped new team members run
                  the project and cope with common mistakes. <br />
                  <span className="fatDot">•</span> Fixed bugs. <br />
                  <span className="fatDot">•</span> Mastered Next, Redux-Saga,
                  Material UI, Nest, TypeORM, PostgreSQL. <br />
                </p>
                <br />
                <p>
                  <span className="grayBackground">Freelance</span>{" "}
                  <span className="grayWords">12/2021 - 05/2022</span>
                  <br />
                  <span className="fatDot">•</span> Make layout for small
                  business (Zoo store, Tattoo Master Portfolios, etc.) <br />
                  <span className="fatDot">•</span> Transfer layout to React
                  components. <br />
                  <span className="fatDot">•</span> In total, I completed 9
                  orders related to layout, React and pure Js. <br />
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">Another Work Experience:</div>
              <div className="text lh4mm">
                <p>
                  <span className="grayBackground">Metarhia</span> (OPEN SOURCE){" "}
                  <br />
                  <span className="fatDot">•</span> Сontributed to the
                  development of the Metaserverless/Console browser IDE. <br />
                  <span className="fatDot">•</span> Developed a CRUD system for
                  PostgreSQL, which is defined through a JSON description.{" "}
                  <br />
                  <span className="fatDot">•</span> Helped new team members
                  (contributors) to run the project. <br />
                  <span className="fatDot">•</span> Wrote the main part of the
                  manual "Installation and running on a local machine". <br />
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">Education:</div>
              <div className="text lh4mm">
                <dl>
                  <dt>
                    <span className="fatDot">•</span> Timur Shemsedinov - How
                    Programming Works (in progress).
                  </dt>
                  <dd>
                    Сourse from a KPI teacher about the fundamentals of
                    programming.
                  </dd>

                  <dt>
                    <span className="fatDot">•</span> webDev - Frontend
                    Interview Questions (in progress).
                  </dt>
                  <dd>
                    Сourse about questions that asked on frontend interview.
                  </dd>

                  <dt>
                    <span className="fatDot">•</span> angular.io (in progress).
                  </dt>
                  <dd>Angular documentation.</dd>

                  <dt>
                    <span className="fatDot">•</span> Vladilen Minin - Angular
                    (in progress).
                  </dt>
                  <dd>Сourse about developing angular applications.</dd>

                  <dt>
                    <span className="fatDot">•</span> Ave Coder - PostgreSQL for
                    beginners.
                  </dt>
                  <dd>Сourse about the fundamentals of PostgreSQL.</dd>

                  <dt>
                    <span className="fatDot">•</span> webDew - Redux-saga.
                  </dt>
                  <dd>Сourse about middleware for Redux.</dd>

                  <dt>
                    <span className="fatDot">•</span> CSG camp.
                  </dt>
                  <dd>
                    Two weeks camp from the company CSG where I developed a
                    fullstack application on React-Native and Express.
                  </dd>

                  <dt>
                    <span className="fatDot">•</span> Archakov Blog - React
                    Pizza.
                  </dt>
                  <dd>Course about React, Redux app development.</dd>

                  <dt>
                    <span className="fatDot">•</span> reactjs.org
                  </dt>
                  <dd>React documentation.</dd>

                  <dt>
                    <span className="fatDot">•</span> learn.javascript.ru
                  </dt>
                  <dd>Resource that have an introduction to Js.</dd>

                  <dt>
                    <span className="fatDot">•</span> BrainsCloud - layout for
                    beginners.
                  </dt>
                  <dd>Course about 'How to make layout?'.</dd>

                  <dt>
                    <span className="fatDot">•</span> htmlbook.ru
                  </dt>
                  <dd>Resource that I learn HTML, CSS.</dd>

                  <dt>
                    <span className="fatDot">•</span> Alexander Bebris - Golden
                    Playlist.
                  </dt>
                  <dd>Course that I learned English A0 - A2.</dd>

                  <dt>
                    <span className="fatDot">•</span> HTML Academy -
                    Introduction to HTML.
                  </dt>
                  <dd>Course that covers the very basics of development.</dd>
                </dl>
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">About Me:</div>
              <div className="text lh4mm">
                <p>
                  In development, I like that I can create, something, which can
                  bring practical benefits to a large number of people.
                </p>
                <br />
                <p>
                  Before development, I did tattoos and drew a lot. Therefore, I
                  pay a lot of attention to trifles, especially to what is
                  relate with the visual part of the application. Pixel Perfect
                  is about me.
                </p>
                <br />
                <p>
                  In my free time I like doing sports, watching some videos
                  about travelling and improving my English.
                </p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div></div>

            <div className="info-block">
              <div className="subtitle">Technical Skills:</div>
              <div className="text lh4mm">React</div>
              <div className="text lh4mm">Redux</div>
              <div className="text lh4mm">Redux-Saga</div>
              <div className="text lh4mm">Next</div>
              <div className="text lh4mm">React-Hooks</div>
              <div className="text lh4mm">React-Router</div>
              <div className="text lh4mm">JointJs</div>
              <div className="text lh4mm">Formik</div>
              <div className="text lh4mm">Axios</div>
              <div className="text lh4mm">Js</div>
              <div className="text lh4mm">TypeScript</div>
              <div className="text lh4mm">SQL</div>
              <div className="text lh4mm">HTML</div>
              <div className="text lh4mm">HTML5</div>
              <div className="text lh4mm">CSS</div>
              <div className="text lh4mm">CSS3</div>
              <div className="text lh4mm">SCSS</div>
              <div className="text lh4mm">SASS</div>
              <div className="text lh4mm">Material UI</div>
              <div className="text lh4mm">Git</div>
              <div className="text lh4mm">Node.js</div>
              <div className="text lh4mm">Express</div>
              <div className="text lh4mm">Nest</div>
              <div className="text lh4mm">TypeORM</div>
              <div className="text lh4mm">MongoDB</div>
              <div className="text lh4mm">PostgreSQL</div>
            </div>

            <div className="info-block">
              <div className="subtitle">Projects:</div>
              <div className="text">
                <dl>
                  <dt>https://buy-all.store/</dt>
                  <dd className="mb3mm">Store of clothing and accessories.</dd>

                  <dt>https://github.com/Volchinskiy/RESUME-GENERATOR</dt>
                  <dd className="mb3mm">
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

            <div className="info-block">
              <div className="subtitle">Contacts:</div>
              <div className="text">
                <span className="fatChar">Name:</span> Volchinskiy Maxim
              </div>
              <div className="text">
                <span className="fatChar">GitHub:</span>{" "}
                https://github.com/Volchinskiy
              </div>
              <div className="text">
                <span className="fatChar">Phone Number:</span> +380 99 408 58 86
              </div>
              <div className="text">
                <span className="fatChar">Location:</span> Kyiv
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">Languages:</div>
              <div className="text">
                <span className="fatChar">English:</span> A2+.
              </div>
              <div className="text">
                <span className="fatChar">Russian:</span> Native.
              </div>
              <div className="text">
                <span className="fatChar">Ukrainian:</span> Native.
              </div>
            </div>

            <div className="info-block">
              <div className="subtitle">Salary Expectations:</div>
              <div className="text">600 USD.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
