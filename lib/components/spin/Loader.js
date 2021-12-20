import React from 'react';
import styles from './Loader.css';
import { ReactComponent as Loading } from '../../assets/illustration_loading.svg';

const Loader = () => {
  return (
    <div className={styles.vdsContainer}>
      <div className={styles.vdsTopText}>Loading...</div>
      <div className={styles.vdsImgWrap}>
        <Loading />
        <span className={styles.vdsSpinner} />
      </div>
    </div>
  );
};

export default Loader;
