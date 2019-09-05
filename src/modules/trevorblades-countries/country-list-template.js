import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import CountryService from './contries-service.js';


function CountryListTemplate({
   CountryComponent,
   RootComponent = ({ children }) => <div>{ children} </div>,
   PreloaderComponent = () => <div>Loading...</div>,
   ErrorComponent = ({ error }) => <div>Error: {error.message}</div>
}) {
  const { loading, error, data } = useQuery(CountryService.getCountriesGQL());

  if (loading) {
    return <PreloaderComponent/>;
  }

  if (error) {
    return <ErrorComponent error={error}/>;
  }

  return (
      <RootComponent>
        {data.countries.map((country) => <CountryComponent country={country}/>)}
      </RootComponent>
  );
}

export default CountryListTemplate;
