function get() {
  return 'DEVELOPMENT';
  // return 'QA';
  // return 'PRODUCTION';
}

function getSelfDomain() {
  if (get() === 'DEVELOPMENT') {
    return 'http://localhost:3000';
  } if (get() === 'QA') {
    return 'http://localhost:3000';
  }
  return 'http://localhost:3000';
}

function getDomainWithoutGraphQL() {
  if (get() === 'DEVELOPMENT') {
    return 'http://localhost:4000';
  } if (get() === 'QA') {
    return 'https://localhost:4000';
  }
  return 'https://localhost:4000';
}

function getDomain() {
  if (get() === 'DEVELOPMENT') {
    return 'http://localhost:4000/graphql';
  } if (get() === 'QA') {
    return 'https://localhost:4000/graphql';
  }
  return 'https://localhost:4000/graphql';
}

module.exports = {
  get,
  getSelfDomain,
  getDomainWithoutGraphQL,
  getDomain,
};
