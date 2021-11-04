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
        <li className={styles.link}>
          <Link href="https://www.virtru.com/terms-of-service/">
            Terms of Service
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="https://www.virtru.com/privacy-policy/">Privacy Policy</Link>
        </li>
        <li className={styles.link}>
          <Link href="https://www.virtru.com/about-us/">About Virtru</Link>
        </li>
        <li className={styles.link}>
          <Link href="https://support.virtru.com/hc/en-us">Support</Link>
        </li>
      </ul>
    </FooterAntd>
  </>
);

export default Footer;
