import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { Picture } from 'luar-components';

import { catsImages, objectsImages } from './images-imported';

import styles from './styles.module.scss';

const TOTAL_COUNT_IMAGES = 20;
const MAX_ITERATION_TO_NO_TIRE_THE_USER = 35;

const BiblicalImageGenerator = ({ imagesRated, setImagesRated, setShowResults }) => {
  /* States */
  const [loading, setLoading] = useState(true);
  const [renderedImages, setRenderedImages] = useState([]);
  const [iteration, setIteration] = useState(0);
  const [imagesToPick, setImagesToPick] = useState({});

  /* Effects */
  useEffect(() => {
    renderRandomImages();
  }, []);

  useEffect(() => {
    if (imagesToPick.left) setLoading(false);
  }, [imagesToPick]);

  useEffect(() => {
    verifyIfAllImagesWasRender();
  }, [renderedImages]);

  /* Methods */
  const renderRandomImages = () => {
    const catOrObject = Math.floor(Math.random() * 20);
    let leftImage = {};
    let rightImage = {};
    if (catOrObject > 10) {
      leftImage = catsImages[Math.floor(Math.random() * 9)];
      rightImage = objectsImages[Math.floor(Math.random() * 9)];
    } else {
      leftImage = objectsImages[Math.floor(Math.random() * 9)];
      rightImage = catsImages[Math.floor(Math.random() * 9)];
    }
    setImagesToPick({
      left: leftImage,
      right: rightImage,
    });
    setIteration(iteration + 1);
  };

  const verifyIfAllImagesWasRender = () => {
    if (
      renderedImages.length === TOTAL_COUNT_IMAGES ||
      iteration === MAX_ITERATION_TO_NO_TIRE_THE_USER // "Or" added if the random doesn't render all images, to much iterations, had to improve the random u.u
    ) {
      setShowResults(true);
    } else {
      renderRandomImages();
    }
  };

  const handleOptionPicked = image => {
    setLoading(true);
    const imagesRatedToUpdate = [...imagesRated];
    const indexImageFound = imagesRatedToUpdate.findIndex(({ id }) => id === image.id);
    if (indexImageFound !== -1) {
      const imageToUpdate = { ...imagesRatedToUpdate[indexImageFound] };
      imageToUpdate.rating = imageToUpdate.rating + 1;
      imagesRatedToUpdate[indexImageFound] = imageToUpdate;
    } else {
      image.rating = 1;
      imagesRatedToUpdate.push(image);
    }
    setImagesRated(imagesRatedToUpdate);

    // setRenderedImages
    let renderedImagesToUpdate = [
      ...renderedImages,
      imagesToPick.left.id,
      imagesToPick.right.id,
    ];
    renderedImagesToUpdate = renderedImagesToUpdate.filter(
      (image, index) => renderedImagesToUpdate.indexOf(image) === index
    );
    setRenderedImages(renderedImagesToUpdate);
  };

  return (
    <div className={cx(styles.container)}>
      {!loading && (
        <>
          <Picture
            source={imagesToPick.left.image}
            onClick={() => handleOptionPicked(imagesToPick.left)}
          />
          <Picture
            source={imagesToPick.right.image}
            onClick={() => handleOptionPicked(imagesToPick.right)}
          />
        </>
      )}
    </div>
  );
};

export default BiblicalImageGenerator;
