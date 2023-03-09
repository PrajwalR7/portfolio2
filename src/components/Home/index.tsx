import React, { Ref, useRef } from 'react';
import RightSection from '../RightSection';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBar from '../SideBar';
import { Element } from 'react-scroll';
import './style.css';
export let homeRef: Ref<HTMLDivElement>;
export default function Home() {
  homeRef = useRef(null);

  let bigScreen = useMediaQuery('(min-width:1000px)');

  return (
    <Element id='home-link' name='home-link'>
      <div id='home-container' ref={homeRef}>
        {bigScreen ? <SideBar /> : null}
        <RightSection />
      </div>
    </Element>
  );
}
