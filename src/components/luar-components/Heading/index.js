import React from 'react';
import cx from 'classnames';

const Heading = ({ children, as, className }) => {
  if (as === 'h2') return <h2 className={cx('headingH2', className)}>{children}</h2>;
  if (as === 'h3') return <h3 className={cx('headingH3', className)}>{children}</h3>;
  else return '';
};

export default Heading;
