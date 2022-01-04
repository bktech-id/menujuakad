import React from 'react';

import styles from './styles.module.css';

import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar className={styles.navbar} />
       
      <div className={styles.content}>

      </div>
    </div>
  )
}

export default HomePage;