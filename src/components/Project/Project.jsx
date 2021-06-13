import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    marginLeft: 20,
    fontWeight: 500,
  },
  project: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    marginRight: 5,
    width: '50%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.71,
    color: '#585859',
    '&after': {
      marginLeft: 5,
      content: '................................................................',
    },
    
    '&:hover,&:focus': {
      color: '#f7610a',
    },
  },
  name: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.71,
    color:'#585859',
  }
  });


const Project = ({ label, link, technology }) => {
  
  const classes = useStyles();

  return (
    <li className={classes.item}>
      <div className={classes.project}>
        <a className={classes.link} href={link} target="_blank">
          {label}
        </a>
        <span>
          <b>[</b> <span className={classes.name}>{technology}</span> <b>]</b>
        </span>
      </div>
    </li>
  );
};

export default Project;
