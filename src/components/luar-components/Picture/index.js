import React from 'react';
import cx from 'classnames';

const Picture = ({ source, onClick }) => {
  return (
    <figure className={cx('picture')} onClick={onClick}>
      <img alt="random" src={source} />
    </figure>
  );
};

export default Picture;
