import './style.css';
import AboutMeSVG from '../AboutMeSVG';
import { Element } from 'react-scroll';
import FileSaver from 'file-saver/src/FileSaver';
export default function About() {
  const download = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/assets/Prajwal R - Resume.pdf',
      'Resume.pdf'
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
              I&apos;m a Full-Stack Developer located in India (Bangalore,
              Karnataka). I have a serious passion for UI effects, animations
              and creating intuitive, dynamic user experiences. I'm currently
              pursuing my Bachelor&apos;s Degree in Computer Science at Visvesvaraya
              Technological University (4th year) Well-organized person, problem
              solver, independent employee with high attention to detail. Fan of
              F1, MMA, outdoor activities, movies. Interested in the entire
              webDev spectrum and working on ambitious projects with positive
              people.
            </p>
            <button onClick={download}>Download CV</button>
          </div>
        </div>
      </div>
    </Element>
  );
}
