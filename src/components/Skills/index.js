import React from 'react';
import './style.css';
import { Element } from 'react-scroll';
export default function Skills() {
  return (
    <Element id='skills-link' name='skills-link'>
      <div id='skill-container'>
        <div id='skill-header'>
          <h2>Skills</h2>
          <p>My technical Skill</p>
        </div>
        <div id='skill-content'>
          <div id='frontend'>
            <div id='end-head'>
              <span>Frontend</span>
            </div>
            {/* <div id='front-content'> */}
            <li>
              <h6>React.js</h6>
              {/* <p style={{ color: 'red', fontWeight: 500 }}>Advanced</p> */}
            </li>
            <li>
              <h6>Redux</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Tailwind CSS</h6>
              {/* <p style={{ color: 'orangered', fontWeight: 400 }}>
                Intermediate
              </p> */}
            </li>
            <li>
              <h6>GraphQL</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Progressive Web Apps</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Next.js</h6>
              {/* <p style={{ color: 'orangered', fontWeight: 400 }}>
                Intermediate
              </p> */}
            </li>
            <li>
              <h6>Astro</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            {/* </div> */}
          </div>
          <div id='backend'>
            <div id='end-head'>
              <span>Backend</span>
            </div>
            <li>
              <h6>Node.js</h6>
              {/* <p style={{ color: 'red', fontWeight: 500 }}>Advanced</p> */}
            </li>
            <li>
              <h6>MongoDB</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Cloudflare</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>AWS</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>MySQL</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Typescript</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>Firebase</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
            <li>
              <h6>CI/CD</h6>
              {/* <p style={{ color: 'orange', fontWeight: 200 }}>Beginner</p> */}
            </li>
          </div>
        </div>
      </div>
    </Element>
  );
}
