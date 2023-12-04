import React from 'react';
import './style.css';
import AboutMeSVG from '../AboutMeSVG';
import { Element } from 'react-scroll';
import FileSaver from 'file-saver';
export default function About() {
  const download = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/assets/Resume.docx',
      'Prajwal-Ramesh-Resume.docx'
    );
  };

  return (
    <Element id='about-link' name='about-link'>
      <div id='about-container'>
        <div id='about-header'>
          <h2>About Me</h2>
          <p>My introduction</p>
        </div>
        <div id='about-content'>
          <div id='about-svg'>
            <AboutMeSVG />
          </div>
          <div id='about-right-content'>
            <p>
            Passionate software engineer with 1 year of experience in creating innovative and scalable web applications that solve complex business problems and enhance user experience.<br/>

Having strong background in <span style={{fontWeight: '500', color:'black', fontSize:'20px'}}>React, Node, Typescript, GoLang, database management across SQL, NoSQL and vector databases, cloud technologies and react-redux</span>. Worked on various projects both frontend and backend with a team of talented engineers to build and maintain scalable, secure, and user-friendly web applications.<br />
I contribute to the full software development lifecycle, from ideation and design to deployment and testing, ensuring high-quality code and performance.
            </p>
            <button onClick={download}>Download CV</button>
          </div>
        </div>
      </div>
    </Element>
  );
}
