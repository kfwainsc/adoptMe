/***  PET DETAILS NOT FOUND PAGE
      < PetDetailsNotFound /> 
*/
/*** Project: Adopt A Pet  ***/
/*** By: Kendra Wainscott 2022 ***/
/*** Sources: Skeleton from Codecacdemy 2022 ***/
import React from 'react';
import { useHistory } from 'react-router-dom';

const PetDetailsNotFound = () => {
  const history = useHistory();

  return (
    <main className="page not-found">
      <h3>404: Who let the dogs out?</h3>
      <div>
        <p>Sorry!</p>
        <p>Details for this pet have not been uploaded by the shelter yet. </p>
        <p>Check back later!</p>
      </div>

      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={() => history.goBack()}>
          Go Back
        </button>
      </div>
    </main>
  );
};
export default PetDetailsNotFound;
