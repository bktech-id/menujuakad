import React from 'react';

import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav>
      <h2>Menuju Akad</h2>
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