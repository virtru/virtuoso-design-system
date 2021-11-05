import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './footer.css';

const { Link } = Typography;
const { Footer: FooterAntd } = Layout;

const year = new Date().getFullYear();

const Footer = () => (
  <>
    <FooterAntd className={styles.container}>
      <div className={styles.copyright}>{`© Copyright ${year} Virtru Corporation`}</div>

      <ul className={styles.linksContainer}>
        <li className={styles.itemLi}>
          <Link href="https://www.virtru.com/terms-of-service/" className={styles.link}>
            Terms of Service
          </Link>
        </li>
        <li className={styles.itemLi}>
          <Link href="https://www.virtru.com/privacy-policy/" className={styles.link}>
            Privacy Policy
          </Link>
        </li>
        <li className={styles.itemLi}>
          <Link href="https://www.virtru.com/about-us/" className={styles.link}>
            About Virtru
          </Link>
        </li>
        <li className={styles.itemLi}>
          <Link href="https://support.virtru.com/hc/en-us" className={styles.link}>
            Support
          </Link>
        </li>
      </ul>
    </FooterAntd>
  </>
);

export default Footer;
