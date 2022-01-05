import React from 'react';

import styles from './styles.module.css';

import mainDesign from '../../assets/images/mainDesign.png';
import designMobile from '../../assets/images/designMobile.png';
import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar className={styles.navbar} />

      <div className={styles.about}>
        <div className={styles.aboutWording}>
          <h1>BUAT MOMEN SPESIALMU <br /> DIKETAHUI SEMUA <br /> ORANG</h1>
          <p>Buat dan bagikan undangan Pernikahanmu. <br />
            Pilih template yang sesuai dan keinginanmu lalu<br />
            sebar ke siapapun yang kamu inginkan
          </p>
          <button className={styles.buatUndangan} href='#'>Buat Undangan</button>
        </div>
        <img className={styles.designDesktop} src={mainDesign} />
        <img className={styles.designMobile} src={designMobile} />
      </div>
    </div>
  )
}

export default HomePage;