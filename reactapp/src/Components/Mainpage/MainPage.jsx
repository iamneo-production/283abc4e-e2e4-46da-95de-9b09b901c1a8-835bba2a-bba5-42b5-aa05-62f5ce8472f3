import React from 'react';
import './MainPage.css';
import Project1 from './MJ.jpg';
import Project2 from './VK.jpg';
import Project3 from './CG.jpg';
import Project4 from './JA.jpg';

import tiptrick1 from './SS.jpg';
import tiptrick2 from './SK.jpg';
import tiptrick3 from './KW.jpg';
import tiptrick4 from './DS.jpg';
  
export default function MainPage() {
  return (
    <div className="main-page">
        <div className="header">
            <h1>YOUR VOTE IS YOUR VOICE</h1>
        </div>
        <div className="featured-projects">
            <h2>BEST PLAYERS OF THE YEAR</h2>
            <div className='projects'>
              <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>MITCHELL JOHNSON</h3>
                <p>Mitchell Johnson is a Australian cricketer known for his left-arm fast bowling prowess,who played a significant role in Australia's Test and ODI cricket success.</p>
              </div>
              <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>VIRAT KOHLI</h3>
                <p>Virat Kohli is an Indian cricketer and captain of the Indian national cricket team, renowned for his exceptional batting skills and records .</p>
              </div>
              <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>CHRIS GAYLE</h3>
                <p>Chris Gayle is a Jamaican cricketer widely recognized as one of the most explosive and prolific batsmen in the history of Twenty20 (T20) cricket.</p>
              </div>
              <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>JIMMY ANDERSON</h3>
                <p>Jimmy Anderson is an English cricketer celebrated as one of the GOAT bowler, with a remarkable Test cricket career marked by swing bowling mastery.</p>
               </div>
            </div>
        </div>
        <div className="latest-articles">
            <h2></h2>
            <div className='articles'>
              <div className="article-card">
                <img src={tiptrick1}/>
                <h3>STEVEN SMITH</h3>
                <p>Steve Smith is an Australian cricketer known for his exceptional batting skills, particularly in Test cricket.</p>
              </div>
              <div className="article-card">
                <img src={tiptrick2}/>
                <h3>KUMAR SANGAKARA</h3>
                <p>Kumar Sangakkara is a Sri Lankan cricketer who is the greatest wicketkeeper-batsmen in the history of the sport, known for his elegant batting style.</p>
              </div>
              <div className="article-card">
                <img src={tiptrick3}/>
                <h3>KANE WILLIAMSON</h3>
                <p>Kane Williamson is a New Zealand cricketer acclaimed for his exemplary batting technique and leadership skills, serving as the captain of the kiwi's team.</p>
              </div>
              <div className="article-card">
                <img src={tiptrick4}/>
                <h3>DALE STEYN</h3>
                <p>Dale Steyn is a South African cricketer, considered one of the greatest fast bowlers in cricket history, known for his express pace, lethal swing, and wicket-taking ability.</p>
               </div>
            </div>
        </div>
      
    </div>
  );
}
