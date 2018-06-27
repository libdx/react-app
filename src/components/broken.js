import React from 'react';

const Broken = () => {
  throw new Error('Attempt to render Broken Component');
};

export default Broken;
