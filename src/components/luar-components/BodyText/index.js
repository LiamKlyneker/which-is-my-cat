import React from 'react';
import cx from 'classnames';

const BodyText = ({ children, size, className }) => {
  return (
    <p className={cx('bodyText', { [`bodyText-${size}`]: size }, className)}>
      {children}
    </p>
  );
};

export default BodyText;
