import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

function BasicLayout({ children, footer, header }) {
  return (
    <>
      <Header {...header} />
      <div>{children}</div>
      <Footer {...footer} />
    </>
  );
}

BasicLayout.propTypes = {
  footer: PropTypes.object,
  header: PropTypes.object,
};

export default BasicLayout;
