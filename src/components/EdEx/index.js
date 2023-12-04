import React, { useState } from 'react';
import './style.css';
import { Element } from 'react-scroll';
export default function EdEx() {
  const [contentType, setContentType] = useState('ex');
  const timeLineHandler = (type, event) => {
    setContentType(type);
  };

  const exContent = [
    {
      role: 'SDE I',
      company: 'Oslash',
      type: 'Full Time',
      time: 'June 2023 - Nov 2023'
    },
    {
      role: 'Product Engineer',
      company: 'Oslash',
      type: 'Internship',
      time: 'Nov 2022 - Jun 2023'
    },
    {
      role: 'SDE',
      company: 'Ezyfi Pvt. Ltd.',
      type: 'Internship',
      time: 'Nov 2021 - Jan 2022',
    },
  ];

  return (
    <Element id='edex-link' name='edex-link'>
      <div id='edex-container'>
        <div id='edex-header'>
          <h2>Experience</h2>
          <p>My journey</p>
        </div>
        <div id='edex-content'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <>
              <box-icon
                type='solid'
                name='briefcase-alt-2'
                size='md'></box-icon>
              <span
                id='head-span'
                style={{ fontSize: '1.2rem', marginLeft: '0.5rem' }}
                onClick={() => timeLineHandler('ex')}>
                Experience
              </span>
            </>
          </div>
            <TimeLine data={exContent} />
        </div>
      </div>
    </Element>
  );
}

export const TimeLine = (props) => {
  console.log(props);
  return (
    <div id='timeline-cont'>
      {props.data.map((ele) => {
        return <TimeLineItem data={ele} />;
      })}
    </div>
  );
};

export const TimeLineItem = (props) => {
  return (
    <div id='tl-item-cont'>
      <div id='tl-item-inner'>
        <h3>{props.data.role}</h3>
        <p>
          <span style={{ color: '#0e9392', fontWeight: '400' }}>
            {props.data.company} • {props.data.type}
          </span>
        </p>
        <p>{props.data.time}</p>
        <span id='circle'></span>
        <span id='arrow'></span>
      </div>
    </div>
  );
};
