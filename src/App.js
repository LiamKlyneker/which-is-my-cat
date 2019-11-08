import React, { useState } from 'react';

import { Heading, Label } from 'luar-components';
import BiblicalImageGenerator from './sections/BiblicalImageGenerator';
import ResultsList from './sections/ResultsList';

import './scss/default.scss';

function App() {
  const [imagesRated, setImagesRated] = useState([]);
  const [showResults, setShowResults] = useState(false);
  return (
    <main>
      {!showResults && (
        <>
          <Heading as="h2" className="text-center">
            Which of these is a cat? 🙀
          </Heading>
          <Label theme="bold" className="text-center">
            SOME CATS COULD LOOK LIKE DOGS 🤔
          </Label>
          <BiblicalImageGenerator
            imagesRated={imagesRated}
            setImagesRated={setImagesRated}
            setShowResults={setShowResults}
          />
        </>
      )}
      {showResults && (
        <>
          <Heading as="h2" className="text-center">
            According to you, this specimens are cats, do you agree Darwin?
          </Heading>
          <ResultsList imagesRated={imagesRated} />
        </>
      )}
    </main>
  );
}

export default App;
