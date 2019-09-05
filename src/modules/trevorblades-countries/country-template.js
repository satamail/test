import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import CountryService from './contries-service.js';


function CountryTemplate({
   countryCode,
   CountryComponent,
   PreloaderComponent = () => <div>Loading...</div>,
   ErrorComponent = ({ error }) => <div>Error: {error.message}</div>
}) {
  const { loading, error, data } = useQuery(CountryService.getCountryGQL(countryCode));

  if (loading) {
    return <PreloaderComponent/>;
  }

  if (error) {
    return <ErrorComponent error={error}/>;
  }

  return (
      <CountryComponent country={data.country}/>
  );
}

export default CountryTemplate;
