import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './footer.css';

const { Link } = Typography;
const { Footer: FooterAntd } = Layout;

const year = new Date().getFullYear();

const Footer = () => (
  <FooterAntd className={styles.vdsContainer}>
    <div className={styles.copyright}>{`© Copyright ${year} Virtru Corporation`}</div>

    <ul className={styles.vdsLinksContainer}>
      <li className={styles.vdsItemLi}>
        <Link href="https://www.virtru.com/terms-of-service/" className={styles.vdsLink}>
          Terms of Service
        </Link>
      </li>
      <li className={styles.vdsItemLi}>
        <Link href="https://www.virtru.com/privacy-policy/" className={styles.vdsLink}>
          Privacy Policy
        </Link>
      </li>
      <li className={styles.vdsItemLi}>
        <Link href="https://www.virtru.com/about-us/" className={styles.vdsLink}>
          About Virtru
        </Link>
      </li>
      <li className={styles.vdsItemLi}>
        <Link href="https://support.virtru.com/hc/en-us" className={styles.vdsLink}>
          Support
        </Link>
      </li>
    </ul>
  </FooterAntd>
);

export default Footer;
