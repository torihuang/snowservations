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
mutation newUser($firstName: String, $lastName: String, $email: String!, $password: String!) {
  newUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    _id
    email
    name {
      first
      last
    }
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
  },
};
