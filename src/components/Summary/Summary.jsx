import React from 'react';
import { createUseStyles } from 'react-jss';

import Project from '../Project';
import Experiance from '../Experiance';
import Education from '../Education';

const useStyles = createUseStyles({
  body: {
    padding: 100,
  },
  section: {
    marginBottom: 40,
  },
  profession: {
    fontWeight: 800,
    fontSize: 26,
    lineHeight: 1.3,
    textTransform: 'uppercase',
    marginBottom: 20,
    color: '#f7610a',
  },
  female: {
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 1.8,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
  },
  project: {
    marginBottom: 10,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.5,
    // color: '#2a0af7'
  },
  nameProject: {
    marginBottom: 20,
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.5,
  },
  typeProject: {
    color: '#f7610a',
  },
  list: {
    marginBottom: 20,
  },
});

const Summary = ({ teamWork, personalWork, workExperience, education }) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.section}>
        <h2 className={classes.profession}>Front-End Development</h2>
        <h1 className={classes.female}>Vadim Vatrya</h1>
        <p className={classes.text}>
          I'm a beginner front-end developer. Front-end technologies are the
          most promising and developing IT industry. My primary target is to get
          job in a good team for further education JavaScript, NodeJS and
          framework ReactJS. I want to grow and develop in these technologies.
          You can see the projects on these technologies below. I'm an
          enthusiastic and look forward new challenges.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.project}>PROJECTS</h3>
        <h4 className={classes.nameProject}>
          <span className={classes.typeProject}>Teamworks </span> projects
        </h4>
        <ol className={classes.list}>
          {teamWork.map(({ id, label, link, technology, about }) => (
            <Project
              key={id}
              label={label}
              link={link}
              technology={technology}
              about={about}
            />
          ))}
        </ol>
      </div>

      <div className={classes.section}>
        <h4 className={classes.nameProject}>
          <span className={classes.typeProject}>Single works</span> projects
        </h4>
        <ol className={classes.list}>
          {personalWork.map(({ id, label, link, technology, about }) => (
            <Project
              key={id}
              label={label}
              link={link}
              technology={technology}
              about={about}
            />
          ))}
        </ol>
      </div>

      <div className={classes.section}>
        <h3 className={classes.project}>WORK EXPERIENCE</h3>
        <ul>
          {workExperience.map(
            ({ id, specialty, company, time, country, tasks }) => (
              <Experiance
                key={id}
                specialty={specialty}
                company={company}
                time={time}
                country={country}
                tasks={tasks}
              />
            ),
          )}
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.project}>EDUCATION</h3>
        <ul>
          {education.map(({ id, university, label, time, experience }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
