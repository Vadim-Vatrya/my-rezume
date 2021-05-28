import React from 'react';

import Container from './components/Container';
import SideBar from './components/SideBar';

import contacts from './components/json/contacts.json';


function App() {
  return (
    <Container>
      <SideBar 
     сontacts={contacts}/>
      {/* <AboutMe /> */}
    </Container>
    
  );
}

export default App;
