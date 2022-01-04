import React from 'react';

import styles from './styles.module.css';

import humberger from '../../../../assets/icon/humberger.png';
import close from '../../../../assets/icon/close.png';

const Navbar = () => {
  return (
    <nav>
      <h2>Menuju Akad</h2>
      <label for='check'>
        <img className={styles.humberger} src={humberger} id='btn' />
        <img className={styles.close} src={close} id='close' />
      </label>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Fitur</a></li>
        <li><a href='#'>Design</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Buat Undangan</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;