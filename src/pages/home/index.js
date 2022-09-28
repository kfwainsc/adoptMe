/***  HOMEPAGE PAGE  ***/
/*  <Homepage />  */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams(); // Fix me!

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

  return (
    <div className="page">
      <Hero />
      <h3 id="availible-type-container">
        <span className="availible-type">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
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
