import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contact: {
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-child)': {
      marginBottom: 5,
    },
  },

  // icon: {
  //   marginRight: 10,
  // },

  link: {
    fontSize: 16,
    lineHeight: 1.83,
    letterSpacing: 1,
    color: '#fcfce8',
    '&:hover,&:focus': {
      color: '#f7610a',
    },
  },
});

const Contacts = ({ item, link, name }) => {
  const classes = useStyles();
  return (
    <li className={classes.contact}>
      {/* <img src={icon} alt={item} width="25" className={classes.icon} /> */}
      <a href={link} className={classes.link}>
        {name}
      </a>
    </li>
  );
};

export default Contacts;
