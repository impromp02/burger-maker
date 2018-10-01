import React from 'react';

import LogoImage from '../../../assests/images/logo.png';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoImage} alt="Logo"/>
  </div>
);

export default Logo;