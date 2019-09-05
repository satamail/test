import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { gql } from 'apollo-boost';

export default class CountryService {
    static _client = null;

    static getClient() {
        if (!this._client) {
            const cache = new InMemoryCache();
            const link = new HttpLink({
                uri: 'https://countries.trevorblades.com/',
            });


            this._client = new ApolloClient({
                cache,
                link
            });
        }

        return this._client;
    }

    /**
     * Get query to get countries info list
     *
     * @return query to get countries list
     */
    static getCountriesGQL() {
        return gql`
        {
            countries {
                code
                name
                languages {
                    name
                    native
                }
                continent {
                    name
                }
            }
        }
        `
    }

    /**
     * Get query to get country by code
     *
     * @param countryCode
     *
     * @return query to get country info
     */
    static getCountryGQL(countryCode) {
        return gql`
        {
          country(code: "${countryCode}") {
            name
            continent {
              code
            }
          }
        }
        `
    }
}
