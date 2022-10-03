import React from 'react';
import './style.css';
import 'boxicons';

export default function SideBar() {
  return (
    <div id='sidebar'>
      <ul>
        <li id='github'>
          <a href='https://github.com/PrajwalR7' target='_blank'>
            <box-icon
              style={{ fill: '#393939' }}
              type='logo'
              name='github'
              size='md'></box-icon>
          </a>
        </li>
        <li id='linkedin'>
          <a
            href='https://www.linkedin.com/in/prajwal-ramesh-918a84187/'
            target='_blank'>
            <box-icon
              style={{ fill: '#393939' }}
              name='linkedin-square'
              type='logo'
              size='md'></box-icon>
          </a>
        </li>
        <li id='stack'>
          <a
            href='https://stackoverflow.com/users/16412216/prajwal-ramesh'
            target='_blank'>
            <box-icon
              style={{ fill: '#393939' }}
              name='stack-overflow'
              type='logo'
              size='md'></box-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}
