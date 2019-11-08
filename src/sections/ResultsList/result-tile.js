import React from 'react';
import cx from 'classnames';
import { BodyText, Strong } from 'luar-components';

import styles from './styles.module.scss';

const ResultTile = ({ imageData }) => {
  return (
    <div className={cx(styles.resultTile)}>
      <img alt="result" src={imageData.image} />
      <div>
        <BodyText size="medium" className="text-center">
          R A T I N G __ <Strong>{imageData.rating}</Strong>
        </BodyText>
      </div>
    </div>
  );
};

export default ResultTile;
