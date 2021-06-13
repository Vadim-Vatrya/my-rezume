import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item:{
    listStyle: 'none',
      '&:not(:last-child)': {
    marginBottom: 25,
    },
  },
  title:{
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.5,
    color:'#f7610a'
  },
  company:{
    marginBottom: 5,
    
  },
  time: {
    display: 'block',
    marginBottom: 15,
    fontSize: 12,
    lineHeight: 2,
    color: '#9b99ad'
  },
  delimiter: {
    color: '#000000',
  },
  task: {
    fontSize: 14,
    lineHeight: 1.71,
    listStyle: 'inside',
    color: '#585859',
    // marginBottom: 10
  },
})

const Experiance = ({ specialty, company, time, country, tasks }) => {

  const classes = useStyles();

  return (
    <li className={classes.item}>
      <h4 className={classes.title}>
        {specialty}
      </h4>
      <h4 className={classes.company}>{company}</h4>
      <span className={classes.time}>
        {time}
        <span className={classes.delimiter}> |</span> {country}
      </span>
      <ul>
        {tasks.map(({ id, task }) => (
          <li key={id} className={classes.task}>{task}</li>
        ))}
      </ul>
    </li>
  );
};

export default Experiance;
