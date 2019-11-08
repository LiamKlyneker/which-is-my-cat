import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { Button } from 'luar-components';
import ResultTile from './result-tile';
import styles from './styles.module.scss';

const ResultsList = ({ imagesRated }) => {
  /* States */
  const [images, setImages] = useState([]);

  /* Effects */
  useEffect(() => {
    // Order images
    const imagesRatedToOrder = [...imagesRated].sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    });
    setImages(imagesRatedToOrder);
  }, []);

  return (
    <>
      <div className={cx(styles.list)}>
        {images.map(image => (
          <ResultTile key={image.id} imageData={image} />
        ))}
      </div>
      <footer className={cx(styles.footer)}>
        <Button theme="primary" onClick={() => window.location.reload()}>
          RATE AGAIN
        </Button>
      </footer>
    </>
  );
};

export default ResultsList;
