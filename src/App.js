import React from 'react';
import Container from './components/Container';
import SideBar from './components/SideBar';


import contacts from './components/json/contacts.json';
import techSkills from './components/json/techSkills.json';
import softSkills from './components/json/softSkills.json';
import languages from './components/json/languages.json';


function App() {
  return (
    <Container>
      <SideBar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        languages={languages}
        /> 
       {/* <AboutMe />  */}
    </Container>
  );
};

export default App;
