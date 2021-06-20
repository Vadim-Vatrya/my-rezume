import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    listStyle: 'none',
    '&:not(:last-child)': {
      marginBottom: 20,
    },
  },
  institution: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.5,
    color: '#f7610a',
  },
  degree: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.71,
    listStyle: 'inside',
    color: '#000000',
    marginBottom: 10,
  },
  time: {
    display: 'block',
    marginBottom: 15,
    fontSize: 12,
    lineHeight: 2,
    color: '#000000',
  },
  delimiter: { color: '#000000' },
  list: {
    fontSize: 14,
    lineHeight: 1.71,
    listStyle: 'inside',
    color: '#585859',
    marginBottom: 10,
  },
});

const Education = ({ university, label, time, experience }) => {
  const classes = useStyles();

  return (
    <li className={classes.item}>
      <p className={classes.institution}>{university}</p>
      <p className={classes.degree}>{label}</p>
      <span className={classes.time}>
        {time}
        <span className={classes.delimiter}>|</span> Ukraine
      </span>
      {experience && (
        <ul className={classes.list}>
          {experience.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Education;
