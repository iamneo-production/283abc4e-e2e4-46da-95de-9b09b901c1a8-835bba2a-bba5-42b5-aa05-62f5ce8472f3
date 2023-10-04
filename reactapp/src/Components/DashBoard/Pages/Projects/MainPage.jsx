import React from 'react';
import './MainPage.css';
import Project1 from './bjp.png';
import Project2 from './admk.jpg';
import Project3 from './congress.jpg';
import Project4 from './dmk1.jpg';

import tiptrick1 from './aap.jpg';
import tiptrick2 from './ncp.jpg';
import tiptrick3 from './cpi.jpg';
import tiptrick4 from './bsp3.png'
  
export default function MainPage() {
  return (
    <div className="main-page">
        <div className="header">
            <h1>YOUR VOTE IS YOUR VOICE</h1>
        </div>
        <div className="featured-projects">
            <h2>Featured Parties</h2>
            <div className='projects'>
              <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>Wall Sconces</h3>
              </div>
              <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>TERRACOTTA POT</h3>
              </div>
              <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>Terracotta Paint Hack</h3>
              </div>
              <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>PLANT STAND</h3>
               </div>
            </div>
        </div>
        <div className="latest-articles">
            <h2></h2>
            <div className='articles'>
              <div className="article-card">
                <img src={tiptrick1}/>
                <h3>When and How to Use Primer</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick2}/>
                <h3>4 Furniture Cleaning Tips</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick3}/>
                <h3>Top Ten Wood Glues</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick4}/>
                <h3>Top 7 Tips to Organize Your Bedroom</h3>
               </div>
            </div>
        </div>
      
    </div>
  );
}
