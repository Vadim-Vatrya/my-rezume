import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    display: 'list-item',
    marginLeft: 20,
    fontWeight: 500,
  },
  // project: {
  //   display: 'list-item',
  //   alignItems: 'center',
  //   flexWrap: 'wrap',
  // },
  link: {
    marginLeft: 10,
    marginRight: 5,
    width: '50%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.71,
    color: '#000000',
    '&after': {
      marginLeft: 5,
      content:
        '................................................................',
    },

    '&:hover,&:focus': {
      color: '#f7610a',
    },
  },
  span: {
    marginLeft: 20,
  },
  name: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.71,
    color: '#000000',
  },
  about: {
    fontSize: 16,
    lineHeight: 2,
    color: '#000000',
  },
});

const Project = ({ label, link, technology, about }) => {
  const classes = useStyles();

  return (
    <li className={classes.item}>
      <div className={classes.project}>
        <a className={classes.link} href={link} target="_blank">
          {label}
        </a>
        <span className={classes.span}>
          <b>[</b> <span className={classes.name}>{technology}</span> <b>]</b>
        </span>
        <p className={classes.about}>About project: {about}</p>
      </div>
    </li>
  );
};

export default Project;
