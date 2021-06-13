import React from 'react';
import Container from './components/Container';
import SideBar from './components/SideBar';
import Summary from './components/Summary'
 

import contacts from './components/json/contacts.json';
import techSkills from './components/json/techSkills.json';
import softSkills from './components/json/softSkills.json';
import languages from './components/json/languages.json';
import teamWork from './components/json/teamWork.json';
import personalWork from './components/json/personalWork.json';
import education from './components/json/education.json';
import workExperience from './components/json/workExperience.json';

function App() {
  return (
    <Container>
      <SideBar
        techSkills={techSkills}
        softSkills={softSkills}
        contacts={contacts}
        languages={languages}
      />
      <Summary
        teamWork={teamWork}
        personalWork={personalWork}
        workExperience={workExperience}
        education={education}
      /> 
    </Container>
  );
}

export default App;
