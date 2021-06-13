import React from 'react';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';


const useStyles = createUseStyles({
  Container: {
    display: "flex",
    margin: "0 auto",
    maxWidth: 1200,
    backgroundColor: '#fff',
  }
})

const  Container = ({ children }) => {

  const classes = useStyles();

  return <div className={classes.Container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
