/***   NAVIGATION COMPONENT  ***/
/*  <Navigation />  */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPetTypes } from '../../api/petfinder';
import Search from '../search';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }
    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo-contain">
        <img
          className="nav-logo"
          src={'/petsLogoSMALL.png'}
          alt="Adopt Me Paw Print Logo"
        />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                <NavLink
                  to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};
export default Navigation;
