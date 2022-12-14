/*** APP.JS ***/
/*** Project: Adopt A Pet  ***/
/*** By: Kendra Wainscott 2022 ***/
/*** Sources: Skeleton from Codecacdemy 2022 ***/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/:type/:id">
          <PetDetailsPage />
        </Route>
        <Route path="/pet-details-not-found">
          <PetDetailsNotFound />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/:type?">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
