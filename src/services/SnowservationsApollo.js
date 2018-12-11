import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';

import GraphQLTags from './GraphQLTags';
import Auth from './Auth';
import Environment from './Environment';

const httpLink = new HttpLink({ uri: Environment.getDomain() });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
  return forward(operation);
});

const authAfterware = onError(({ graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors.length && graphQLErrors[0].message.match(/InvalidToken/)) {
    Auth.clearAndRedirect();
  } else if (graphQLErrors && graphQLErrors.length && graphQLErrors[0].message.match(/Unauthorized/)) {
    window.location = `${Environment.getSelfDomain()}/error/unauthorized`;
  }
});

const link = from([
  authMiddleware,
  authAfterware,
  httpLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const storeToken = function (token) {
  localStorage.setItem('token', token);
};

const clearClientStore = () => {
  client.resetStore();
};

const newUser = (newUserData) => {
  return client.mutate({
    mutation: GraphQLTags.mutations.newUser,
    variables: newUserData,
  }).then((response) => {
    client.resetStore();
    const user = response.data.newUser;
    console.log('user.token', user.token);
    if (user && user.token) {
      storeToken(user.token);
    }
    return user;
  }).catch((error) => {
    console.log('Error signing up user', error);
    return { error, result: null };
  });
};

export default {
  client,
  clearClientStore,
  newUser,
};
