import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import Contacts from '../Contacts';
import Languages from '../Languages';

const useStyles = createUseStyles({
  sidebar: {
    minWidth: 300,
    padding: 40,
    background: '#525151',
  },
  wrapper: {
    display: 'flex',

    marginTop: 5,
  },
  city: {
    marginLeft: 4,
    fontSize: 12,
    lineHeight: 1.83,
    letterSpacing: 1,
    color: '#fcfce8',
    '&:hover,&:focus': {
      color: '#f7610a',
    },
  },
  icon: {
    marginRight: 10,
  },
  section: {
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    lineHeight: 1.6,
    color: '#fff',
  },
});

const SideBar = ({ contacts, techSkills, softSkills, languages }) => {
  const classes = useStyles();

  return (
    <aside className={classes.sidebar}>
      {/* <img src={photo} alt='Vadim Vatrya' className={style.photo}/> */}

      <div className={classes.section}>
        <h3 className={classes.title}>Contacts</h3>
        <div className={classes.wrapper}>
          {/* <img
            src={'https://image.flaticon.com/icons/png/512/2204/2204030.png'}
            alt="city"
            width="25"
            className={classes.icon}
          /> */}
          <h4 className={classes.city}>Kherson</h4>
        </div>
        <ul>
          {contacts.map(({ id, item, link, name }) => (
            <Contacts key={id} item={item} link={link} name={name} />
          ))}
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Languages</h3>
        <ul>
          {languages.map(({ id, label }) => (
            <Languages key={id} label={label} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default SideBar;
