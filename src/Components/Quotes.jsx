import React from 'react';
import './Quotes.scss';

const Quotes = () => {
  return (
    <div className='quotes-container'>
      <div className='quote'>
        "Richard is a skilled programmer and a valuable asset in any software
        development team."{' '}
        <div className='quoter'>MARCUS HAMMARBERG, SPOTIFY</div>
      </div>
      <div className='quote'>
        "Richard has a wonderful working attitude. We were lucky to have him on
        our team."
        <br />
        <div className='quoter'>GREG TOWNSEND, APPLE INC.</div>
      </div>
      <div className='quote'>
        "It is rare to find such a broad set of talents in one person."
        <br />
        <br />
        <div className='quoter'>TOM MORAN, LUMEN</div>
        <div></div>
      </div>
    </div>
  );
};

export default Quotes;
