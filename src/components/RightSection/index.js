import React from 'react';
import './style.css';
import profile from '../../resources/profile1 1.png';
// import 'boxicons';
import { Link } from 'react-scroll';
export default function RightSection() {
  return (
    <div id='right-sec'>
      <div id='right-left-sec'>
        <h1>
          <span style={{ color: '#0e9392' }}>Prajwal</span> Ramesh
        </h1>
        <h3>Software Engineer</h3>
        <p>
          Building Scalable, Secure, and User-Friendly Applications
        </p>
        <Link to='contact-link' spy={true} smooth={true} offset={-80}>
          <button id='say-hello'>Say Hello</button>
        </Link>
      </div>
      <div id='right-right-sec'>
        <img src={profile} alt='profile' />
      </div>
    </div>
  );
}
