import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as UserAvatar } from '../../assets/user_avatar.svg';

const CustomIconAvatar = ({ className }) => (
  <UserAvatar className={cn('custom-avatar', { [className]: className })} />
);

CustomIconAvatar.propTypes = {
  className: PropTypes.string,
};

CustomIconAvatar.defaultProps = {
  className: '',
};

export default CustomIconAvatar;
