/***  PET COMPONENT  ***/
/* <Pet animal={} id={} isDetails={} /> */
/*** Project: Adopt A Pet  ***/
/*** By: Kendra Wainscott 2022 ***/
/*** Sources: Skeleton from Codecacdemy 2022 ***/
import React from 'react';

const Pet = ({ animal, isDetails }) => {
  const choosePicture = (animal) => {
    const type = animal.type.toLowerCase();
    if (animal.photos[0]) return animal.photos[0].medium;
    else if (type === 'dog' || type === 'cat')
      return `/missing-animal-${type}.png`;
    else return '/missing-animal-all.png';
  };

  return (
    <article>
      {isDetails ? (
        <div className="details-container">
          <div className="pet-image-container details-image-container">
            <img
              className="pet-image"
              src={choosePicture(animal)}
              alt={animal.name}
            />
          </div>
          <div className="details-text-container">
            <h1>{animal.name}</h1>
            <h3>Breed: {animal.breeds.primary}</h3>
            <p>Color: {animal.colors.primary || '...difficult to say'}</p>
            <p>Gender: {animal.gender}</p>
            <h3>Description</h3>
            <p>{animal.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="pet-image-container">
            <img
              className="pet-image"
              src={choosePicture(animal)}
              alt={animal.name}
            />
          </div>
          <h3>{animal.name}</h3>
          <p>Breed: {animal.breeds.primary}</p>
          <p>Color: {animal.colors.primary || ' ...difficult to say'}</p>
          <p>Gender: {animal.gender}</p>
        </div>
      )}
    </article>
  );
};
export default Pet;
