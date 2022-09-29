/***   PETDETAILS PAGE ***/
/*  <PetDetailsPage />  */
import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';

const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(id);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    getPetsData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>{<Redirect to="/pet-details-not-found" />}</div>
      ) : (
        <main>
          <Hero
            image={data.photos[1]?.full || '/pets-hero.png'}
            displayText={`Meet ${data.name}`}
          />
          <div className="pet-detail">
            <Pet animal={data} id={data.id} isDetails={true} />
          </div>
        </main>
      )}
    </div>
  );
};
export default PetDetailsPage;
