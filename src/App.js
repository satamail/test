import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from 'react';
import './App.css';
import CountryListTemplate from "./modules/trevorblades-countries/country-list-template";
import CountriesWrapper from "./modules/trevorblades-countries/countries-wrapper";



function App() {
  return (
      <Router>
        <div>
          <Route exact path="/" component={app} />
        </div>
      </Router>
  )
}

function app() {
  return (
      <CountriesWrapper>
          <CountryListTemplate CountryComponent={({country}) => <div id={country.code}>
            {JSON.stringify(country, null, 4)}
          </div>}/>
      </CountriesWrapper>
  );
}

export default App;
