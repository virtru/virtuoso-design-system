import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Sorter from './Sorter';
import { SORT_ASC, SORT_DESC, SORT_OFF } from './sort-constants';
import { TABLE_STYLES, TableContext } from '../../Table';

import styles from './TH.css';

const TH = ({ className, children, sorting, onClick, min, width, tableStyle, ...rest }) => {
  const thClassNames = cn(styles.headerCell, className, {
    [styles.clickable]: sorting,
    [styles.min]: min,
    [styles.grey]: tableStyle === TABLE_STYLES.GREY,
  });

  return (
    <th className={thClassNames} onClick={onClick} style={{ width }} {...rest}>
      <div className={styles.innerContainer}>
        {children}
        {sorting && (
          <div className={styles.sorter}>
            <Sorter direction={sorting} />
          </div>
        )}
      </div>
    </th>
  );
};

const WrappedTh = props => (
  <TableContext.Consumer>
    {value => <TH {...props} tableStyle={value}/>}
  </TableContext.Consumer>
);

TH.propTypes = {
  className: PropTypes.string,
  tableStyle: PropTypes.string,
  onClick: PropTypes.func,
  sorting: PropTypes.oneOf([SORT_DESC, SORT_ASC, SORT_OFF]),
  children: PropTypes.node,
  min: PropTypes.bool,
  width: PropTypes.string,
};

TH.defaultProps = {
  className: '',
  tableStyle: '',
  onClick: () => {},
  sorting: undefined,
  children: null,
  min: false,
  width: null,
};

WrappedTh.SORT_DIRECTION = { SORT_DESC, SORT_ASC, SORT_OFF };

export default WrappedTh;
