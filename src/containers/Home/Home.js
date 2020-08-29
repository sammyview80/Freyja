import React from 'react';
import classes from './Home.module.css';
import ProjectManager from '../ProjectManager/ProjectManage';

const Home = () => {
  return (
    <div className={classes.Home}>
      <h3>Grade My Poem</h3>
      <h4>Our Project Manager:</h4>
      <ProjectManager />
    </div>
  );
};

export default Home;