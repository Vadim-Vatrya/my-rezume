import React from 'react';
import Container from './components/Container';
import SideBar from './components/SideBar';
import techSkills from '';

import contacts from './components/json/contacts.json';

function App() {
  return (
    <Container>
      <SideBar
        contacts={contacts}
        techSkills={techSkills}
        /> 
       {/* <AboutMe />  */}
    </Container>
  );
};

export default App;
