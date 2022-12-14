/***  HOMEPAGE PAGE  ***/
/*  <Homepage />  */
/*** Project: Adopt A Pet  ***/
/*** By: Kendra Wainscott 2022 ***/
/*** Sources: Skeleton from Codecacdemy 2022 ***/
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';
import { sortPetData } from '../../components/utility';

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();
  let sortedPets;

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }
    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }
  if (data) {
    // func does not mutate original data
    sortedPets = sortPetData(data);
  }

  return (
    <div className="page">
      <Hero />
      <h3 id="availible-type-container">
        <span className="availible-type">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {sortedPets.length ? (
        <div className="grid">
          {sortedPets.map((animal) => (
            <Link
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <Pet animal={animal} id={animal.id} isDetails={false} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};
export default HomePage;
