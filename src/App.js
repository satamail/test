import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react';
import './App.css';
import CountryListTemplate from "./modules/trevorblades-countries/country-list-template";
import CountriesWrapper from "./modules/trevorblades-countries/countries-wrapper";
import CountryTemplate from "./modules/trevorblades-countries/country-template";
import PageTemplate from "./app/template/page-template";
import PageNavigation from "./app/navigation/page-navigation";
import CountryGrid from "./app/counties-list/country-grid";
import Paper from "@material-ui/core/Paper";
import CountryView from "./app/counties-list/country-view";


function App() {
  return (
      <PageTemplate>
          <Router>
              <div>
                  <Route exact path="/" component={() =>
                      <PageNavigation links={{
                          '/': 'Navigation',
                          '/countries': 'All countries',
                          '/countries/AT': 'Austria info',
                          '/countries/CL': 'Chile info',

                      }}/>
                  }/>
                  <Route exact path="/countries" component={CompanyList} />
                  <Route exact path="/countries/:code" component={SingleCompany} />
              </div>
          </Router>
      </PageTemplate>
  )
}

function CompanyList() {
  return (
      <Paper>
          <CountriesWrapper>
              <CountryListTemplate
                  RootComponent={CountryGrid}
                  CountryComponent={
                      ({country}) => <CountryView key={country.code} country={country}/>
                  }
              />
          </CountriesWrapper>
      </Paper>
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
