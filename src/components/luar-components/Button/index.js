import React from 'react';
import cx from 'classnames';

const Button = ({ children, theme, onClick, disabled }) => {
  return (
    <button
      className={cx('button', { [`button--${theme}`]: theme })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
