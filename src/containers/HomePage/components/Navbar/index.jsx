import React from 'react';

import styles from './styles.module.css';

import mainLogo from '../../../../assets/images/main-logo.png';
import humberger from '../../../../assets/icon/humberger.png';
import close from '../../../../assets/icon/close.png';

const Navbar = () => {
  return (
    <nav>
      <input type='checkbox' id={styles.check} />
      <label for={styles.check}>
        <img className={styles.humberger} src={humberger} id={styles.btn} alt=''/>
        <img className={styles.close} src={close} id={styles.close} alt=''/>
      </label>
      <img className={styles.mainLogo} src={mainLogo} alt=''/>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Fitur</a></li>
        <li><a href='#'>Design</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a className={styles.buatUndangan} href='#'>Buat Undangan</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;