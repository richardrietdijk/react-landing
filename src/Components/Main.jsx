import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className='intro'>
      <h1>
        <span className='highlighted'>Hello,</span> I'm a Web
        <span className='highlighted'> Developer</span>
        <div className='mini-bio'>
          with a rich multimedia history, working for companies like SEGA and
          APPLE. <br />I have a passion for accessibility and UI.
        </div>
      </h1>
    </div>
  );
};

export default Main;
