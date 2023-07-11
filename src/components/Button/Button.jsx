import React from 'react';
import css from './Button.module.scss';

const Button = () => {
  return (
    <button class='button'>
      <span>view menu</span>
      <span class='arrow'></span>
    </button>
  );
};


export default Button