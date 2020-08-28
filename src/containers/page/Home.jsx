import React from 'react';
import Questions from '../components/Question';
import Nav from '../Nav/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <Questions />
    </div>
  );
};

export default Home;