import React from 'react';
import style from './SideBar.scss';
import PropTypes from 'prop-types';
// import contacts from '../json/contacts.json';

import Contacts from '../Contacts';

function SideBar({ contacts }) {
  return (
    <div>
      {/* <img src={photo} alt='Vadim Vatrya' className={style.photo}/> */}
      <aside className={style.aside}>
        <div className={style.section}>
          <h3 className={style.name}>Contacts</h3>
          <ul>
          {contacts.map(({ id, item, link, name, icon }) => (
          <Contacts
            key={id}
            item={item}
            link={link}
            name={name}
            icon={icon}
          />
          ))}
          </ul>
        </div>
        {/* <div>
          <h3>Tech Skills</h3>
          <ul>
            {techSkills.map(({id, label}) => {
              <TechSkills 
               key={id}
               label={label}
              />
            })}
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map(({}) => {
              <SoftSkills
               key={id}
               label={label}/>
            })}
          </ul>
        </div> */}
      </aside>
    </div>
  );
};

SideBar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  // techSkills: PropTypes.arrayOf(PropTypes.object),
  // softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default SideBar;
