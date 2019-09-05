import { ApolloProvider } from '@apollo/react-hooks';
import CountryService from './contries-service';
import React from 'react';


function CountriesWrapper({ children }) {
    return <ApolloProvider client={CountryService.getClient()}>
        { children }
    </ApolloProvider>
}

export default CountriesWrapper
