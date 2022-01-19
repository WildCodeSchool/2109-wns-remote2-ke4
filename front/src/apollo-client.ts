import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import cookie from "cookie";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;

// const httpLink = createHttpLink({
//   uri: "http://localhost:4000/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const cookies = cookie.parse(document.cookie)

//   const token = cookies?.token
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }

// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });
