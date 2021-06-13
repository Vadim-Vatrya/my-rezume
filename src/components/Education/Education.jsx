import React from 'react';

const Education = ({university, label, time, experience}) => {
 return (
   <li>
     <p>{university}</p>
     <p>{label}</p>
     <span>
       {time}<span>|</span> Ukraine
     </span>
     {experience && (
        <ul >
          {experience.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
      )}
   </li>
 )
};


export default Education;