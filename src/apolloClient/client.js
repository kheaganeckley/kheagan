import Client, { InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-fetch'


console.log('====================================');
console.log(process.env.GATSBY_APOLLO_CLIENT);
console.log('====================================');


console.log('====================================');
console.log(process.env.GATSBY_HASURA_KEY);
console.log('====================================');



export default new Client({
  uri: process.env.GATSBY_APOLLO_CLIENT,
  fetch,
  headers: {
    'x-hasura-admin-secret': process.env.GATSBY_HASURA_KEY,
  },
  cache: new InMemoryCache(),
})
