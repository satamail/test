import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from 'react';
import './App.css';
import CountryListTemplate from "./modules/trevorblades-countries/country-list-template";
import CountriesWrapper from "./modules/trevorblades-countries/countries-wrapper";
import CountryTemplate from "./modules/trevorblades-countries/country-template";



function App() {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Navigation}/>
          <Route exact path="/countries" component={CompanyList} />
          <Route exact path="/countries/:code" component={SingleCompany} />
        </div>
      </Router>
  )
}

function CompanyList() {
  return (
      <CountriesWrapper>
          <CountryListTemplate CountryComponent={({country}) => <div key={country.code}>
            {JSON.stringify(country, null, 4)}
          </div>}/>
      </CountriesWrapper>
  );
}

function Navigation() {
  return (
      <ul>
        <li>
          <Link to={'/countries'}>Countries</Link>
        </li>
        <li>
          {/* TODO: change if required */}
          <Link to={'/countries/:code'}>Country by code</Link>
        </li>
      </ul>
    );
}

function SingleCompany({ match }) {
  return (
      <CountriesWrapper>
        <CountryTemplate countryCode={match.params.code} CountryComponent={({country}) =>
            <div id={country.code}>
              {JSON.stringify(country, null, 4)}>
            </div>
        }>
        </CountryTemplate>
      </CountriesWrapper>
  );
}

export default App;
