import React from 'react';

const Experiance = ({ specialty, company, time, country, tasks }) => {
  return (
    <li>
      <h4>
        {specialty}
        <span>{company}</span>
      </h4>
      <span>
        {time}
        <span> |</span> {country}
      </span>
      <ul>
        {tasks.map(({ id, task }) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </li>
  );
};

export default Experiance;
