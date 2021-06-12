import React from 'react';

const Project = ({ label, link, technology }) => {
  return (
    <li>
      <div>
        <a href={link} target='_blank' >
          {label}
        </a>
        <span>[</span>
      <span>{technology}</span>
        <span>]</span>
      </div>
    </li>
  );
};

export default Project;
