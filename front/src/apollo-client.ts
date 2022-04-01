import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import cookie from 'cookie';
import { createUploadLink } from 'apollo-upload-client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000/graphql',
// });

const uploadLink = createUploadLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const cookies = cookie.parse(document.cookie);

  const token = cookies?.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// const _authLink = authLink.concat(httpLink);

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export default client;
