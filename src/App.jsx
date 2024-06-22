import React from 'react';
import Gambar1 from './assets/Gambar1.jpeg'; // pastikan Anda memiliki gambar ini di folder assets
import './index.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Rosihan Syahlan Syahputra</h1>
        <p>React JS Enthusiast</p>
      </header>
      <main className="content">
        <img src={Gambar1} alt="My Image" className="my-image" />
        <div className="description">
          <h2>About Me</h2>
          <p>I'm a passionate React developer with a keen interest in building interactive and dynamic web applications.</p>
          <button className="contact-button">Contact Me</button>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Rosihan Syahlan Syahputra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
