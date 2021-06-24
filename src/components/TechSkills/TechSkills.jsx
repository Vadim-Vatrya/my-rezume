import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    margitLeft: 20,
    fontSize: 16,
    lineHeight: 1.6,
    color: '#8ea143',
  },
  label: {
    color: '#fcfce8',
  },
});

const TechSkills = ({ label }) => {
  const classes = useStyles();

  return (
    <li className={classes.list}>
      <span className={classes.label}>{label}</span>
    </li>
  );
};

export default TechSkills;
