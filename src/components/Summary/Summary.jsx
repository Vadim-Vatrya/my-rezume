import React from 'react';

import Project from '../Project';
import Experiance from '../Experiance';



const Summary = ({ teamWork, personalWork, workExperience }) => {
  return (
  <div>
    <div>
      <h2>Front-End Development</h2>
      <h2>Vadim Vatrya</h2>
      <p>
      I'm a beginner front-end developer.  Front-end technologies are the most promising and developing. 
      I want to find an inter job in a good team and solve interesting tasks. I am freandly, responsible and ready for new challenges. 
      </p>
    </div>

    <div>
      <h3>PROJECTS</h3>
      <h4>
        <p>Team project</p>
      </h4>
      <ol>
        {teamWork.map(({ id, label, link, technology}) => (
          <Project 
          key={id}
          label={label}
          link={link}
          technology={technology}
          />
        ))}
      </ol>
    </div>

    <div>
      <h4>
        <p>My project</p>
      </h4>
      <ol>
        {personalWork.map(({id, label, link, technology}) => (
          <Project
          key={id}
          label={label}
          link={link}
          technology={technology}
          />
        ))}
      </ol>
    </div>

    <div>
      <h2>Work Experiance</h2>
      <ol>
        {workExperience.map(({ id, specialty, company, time, country, tasks}) => (
          <Experiance 
           key={id}
           specialty={specialty}
           company={company}
           time={time}
           country={country}
           tasks={tasks}
           />
        ),
        )}
      </ol>
    </div>

  </div>
  )
};


export default Summary;