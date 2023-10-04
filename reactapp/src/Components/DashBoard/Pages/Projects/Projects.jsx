import React from 'react';
import './Projects.css';
import Project1 from './ABD.jpg';
import Project2 from './MS.jpg';
import Project3 from './MSD.jpg';
import Project4 from './DJ.jpg';

export default function Projects() {
  return (
    <div className="projects-main-content">
      <div className='projects-welcome'>
        <h1>PLAYERS</h1>
          </div>
      <div className='projects-projects'>
        <div className="projects-project-card">
          <img src={Project1} alt="Project 1" />
          <h3>ABRAHAM BENJAMIN DE VILLIERS</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project2} alt="Project 2" />
          <h3>MITCHELL STARC</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project3} alt="Project 3" />
          <h3>MAHENDRA SINGH DHONI</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project4} alt="Project 4" />
          <h3>DJ BRAVO</h3>
        </div>
      </div>
    </div>
  )
}
