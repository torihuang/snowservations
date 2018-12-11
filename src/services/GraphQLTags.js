import gql from 'graphql-tag';

// QUERIES
const allPressReleasesQuery = gql`
query allPressReleases {
  allPressReleases {
    _id
    publishedOn
		isSelfPublished
    title
    mediaUrl
    pressUrl
    providers
  }
}`;

// MUTATIONS
const newUser = gql`
mutation newUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  newUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    _id
    token
    error {
      key
      value
    }
  }
}`;

// MUTATIONS
const signInUser = gql`
mutation signInUser($email: String!, $password: String!) {
  signInUser(email: $email, password: $password) {
    _id
    token
    error {
      key
      value
    }
  }
}`;

export default {
  queries: {
    allPressReleasesQuery,
  },
  mutations: {
    newUser,
    signInUser,
  },
};
