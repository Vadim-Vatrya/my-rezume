import React from 'react';

import Project from '../Project';
import Experiance from '../Experiance';
import Education from '../Education';



const Summary = ({ teamWork, personalWork, workExperience, education }) => {
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
      <ul>
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
      </ul>
    </div>

    <div>
      <h3>Education</h3>
      <ul>
        {education.map(({ id, university, label, time, experience }) => (
          <Education
           key={id}
           university={university}
           label={label}
           time={time}
           experience={experience} 
          />
        )
        )}
      </ul>
    </div>

  </div>
  )
};


export default Summary;