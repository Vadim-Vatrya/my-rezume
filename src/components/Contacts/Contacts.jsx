import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({

  contact: {
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    marginRight: '10',
  },

  link: {

  },

})

const Contacts = ({ item, link, name, icon }) => {
  const classes = useStyles();
  return (
    <li className={classes.contact}>
      <img src={icon} alt={item} width="25" className={classes.icon}/>
      <a href={link} className={classes.link}>
        {name}
      </a>
    </li>
  )
};

export default Contacts;