import React from 'react';
import cx from 'classnames';

const Strong = ({ children }) => {
  return <b className={cx('strong')}>{children}</b>;
};

export default Strong;
