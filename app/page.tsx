import React from 'react'


const Home: React.FC = () => {
  return (
    <div className="container">
      <b><h1>Home Page</h1></b>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home
