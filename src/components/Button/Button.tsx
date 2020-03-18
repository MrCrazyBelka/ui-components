import React from 'react';
import { getText } from './helper';
import './Button.scss';
import addfile from '~assets/icons/icon-addfile.svg';


export const Button = () => {



  console.log(addfile);
  return (
    <div className="button-container">
      <button className="button-new">{getText()}</button>
      <p>Testasdasdsadasdasd</p>
    </div>
  );
};
