import React from 'react';
import Container from './components/Container';
import SideBar from './components/SideBar';
import Specification from './components/Specification'
 

import contacts from './components/json/contacts.json';
import techSkills from './components/json/techSkills.json';
import softSkills from './components/json/softSkills.json';
import languages from './components/json/languages.json';

function App() {
  return (
    <Container>
      <SideBar
        techSkills={techSkills}
        softSkills={softSkills}
        contacts={contacts}
        languages={languages}
      />
      <Specification/> 
    </Container>
  );
}

export default App;
