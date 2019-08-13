import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Sorter from './Sorter';
import { SORT_DESC, SORT_ASC, SORT_OFF } from './sort-constants';

import styles from './TH.css';

const TH = ({ className, children, sorting, onClick, min, width, ...rest }) => {
  const thClassNames = cn(styles.headerCell, className, {
    [styles.clickable]: sorting,
    [styles.min]: min,
  });

  return (
    <th className={thClassNames} onClick={onClick} style={{ width }} {...rest}>
      {children}
      {sorting && (
        <div className={styles.sorter}>
          <Sorter direction={sorting} />
        </div>
      )}
    </th>
  );
};

TH.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  sorting: PropTypes.oneOf([SORT_DESC, SORT_ASC, SORT_OFF]),
  children: PropTypes.node,
  min: PropTypes.bool,
  width: PropTypes.string,
};

TH.defaultProps = {
  className: '',
  onClick: () => {},
  sorting: '',
  children: null,
  min: false,
  width: null,
};

TH.SORT_DIRECTION = { SORT_DESC, SORT_ASC, SORT_OFF };

export default TH;
