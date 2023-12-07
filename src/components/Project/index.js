import React from 'react';
import './style.css';
import soap_search from '../../resources/soap-search.svg';
import chat from '../../resources/chat.jpg';
import reddit from '../../resources/reddit.jpg';
import att from '../../resources/a-t.png';
import npmlogo from '../../resources/npm.svg'
import social_network from '../../resources/social_network.svg'
import zip_code from '../../resources/zip-code.svg'
import token from '../../resources/token.svg'
import hpm from '../../resources/hospital.svg'
import note from '../../resources/note.svg'
import oslash from '../../resources/oslash.svg'
import url from '../../resources/url.svg'
import { Element } from 'react-scroll';
export default function Project() {
  const projectList = [
    {
      url: 'https://github.com/PrajwalR7/note-app',
      name: 'Note App',
      img: note,
      desc: 'User-friendly note-taking platform for seamless creation, storage, and management of text snippets with JWT Authentication',
    },
    {
      url: 'https://github.com/PrajwalR7/url-shortner',
      name: 'Social Network',
      img: social_network,
      desc: 'Minimalistic social network backend simulating core functionalities.',
    },
    {
      url: 'https://github.com/PrajwalR7/url-shortner',
      name: 'URL Shortner',
      img: url,
      desc: 'URL shortner similar to bit.ly, tinyurl etc, developed using Node.js, MongoDB, React.js',
    },
    {
      url: 'https://github.com/PrajwalR7/zip-code-info-app',
      name: 'Zip-code Info',
      img: zip_code,
      desc: 'Application which recieves a pincode and points you out on the map',
    },
    {
      url: 'https://github.com/PrajwalR7/oslash-clone',
      name: 'Oslash Clone',
      img: oslash,
      desc: 'Clone of oslash\'s shortcut using Next.js, Tailwind CSS, GraphQL',
    },
    {
      url: 'https://github.com/PrajwalR7/token-inspector',
      name: 'Token Inspector',
      img: token,
      desc: 'A publicly accessible API that accurately estimates token count for any given text.',
    },
    {
      url: 'https://github.com/PrajwalR7/hospital-management',
      name: 'Hospital Management',
      img: hpm,
      desc: 'Simple backend application implementing some of the core functionalities of hospital management',
    },
    {
      url: 'https://github.com/PrajwalR7/Soap_search',
      name: 'Soap Search',
      img: soap_search,
      desc: 'Web application integrating with soap2day, providing movie search results',
    },
    {
      url: 'https://github.com/PrajwalR7/cli-reddit',
      name: 'Reddit CLI',
      img: reddit,
      desc: 'A node.js package providing CLI for effectively interacting with reddit',
    },
    {
      url: 'https://github.com/PrajwalR7/token-inspector',
      name: 'Chat Application',
      img: chat,
      desc: 'Chat application using Node.js, MongoDB, Websockets, React.js',
    },
    {
      url: 'https://github.com/PrajwalR7/token-inspector',
      name: 'Collection Iterator',
      img: npmlogo,
      desc: 'Node.js package which provides a simple interface to iterate over collections in both directions',
    },
    {
      url: 'https://github.com/PrajwalR7/Audio-Text ',
      name: 'Audio-Text',
      img: att,
      desc: 'Web application which converts audio to text in real time, using websockets and deepgram API',
    },
  ];

  return (
    <Element id='project-link' name='project-link'>
      <div id='project-container'>
        <div id='project-header'>
          <h2>Projects</h2>
          <p>My recent works</p>
        </div>
        <div id='project-content'>
          {projectList.map((ele) => {
            return <ProjectListItem data={ele} />;
          })}
        </div>
      </div>
    </Element>
  );
}

export const ProjectListItem = ({ data }) => {
  const clickHandler = (e, url) => {
    e.preventDefault()
    e.stopPropagation()

    window.open(url, '_blank')
  }
  return (
    <div onClick={(e) => clickHandler(e, data.url)} id='outer-proj-cont'>
      <div id='inner-project-container'>
        <img src={data.img} alt={data.name} />
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};
