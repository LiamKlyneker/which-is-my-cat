import React from 'react';
import cx from 'classnames';

const Label = ({ children, noMargin, theme, className }) => {
  return (
    <p
      className={cx(
        'label',
        { 'no-margin': noMargin, [`label-${theme}`]: theme },
        className
      )}
    >
      {children}
    </p>
  );
};

export default Label;
