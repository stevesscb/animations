import React from 'react';

import classes from './Cards.module.css';

const Cards = () => {
  return (
    <div className={classes.cardWrapper}>
      <div>
        <p>
          <strong>HTML</strong> <br />
          Make things show up as they should
          <br />
          be.
        </p>
      </div>
      <div>
        <p>
          <strong>CSS</strong> <br />
          Make things look beautiful in good
          <br />
          browsers.
        </p>
      </div>
      <div>
        <p>
          <strong>JS</strong> <br />
          Make great fancy things happen on
          <br />
          the fly.
        </p>
      </div>
    </div>
  );
};

export default Cards;
