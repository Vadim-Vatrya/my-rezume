import React from 'react';

const Experiance = ({ profession, company, time, country, tasks }) => {
  return (
    <li>
      <h4>
        {profession}
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
