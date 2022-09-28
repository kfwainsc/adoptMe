/***   SEARCHPAGE ***/
/* <SearchPage />  */
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';

const SearchPage = () => {
  const { search } = useLocation();

  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const petNameToFind = queryParams.get('name');
      const petsData = await getPets('', petNameToFind);
      setPets(petsData);
    }
    getPetsData();
  }, [queryParams]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${queryParams.get('name')}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} isDetails={false} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
