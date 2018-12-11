import Environment from './Environment';
import SnowservationsApollo from './SnowservationsApollo';

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
};

const logoutAndRedirect = () => {
  logout();
  window.location = `${Environment.getSelfDomain()}/signin`;
};

const logout = () => {
  SnowservationsApollo.clearClientStore();
  localStorage.clear();
};

export default {
  isLoggedIn,
  logout,
  logoutAndRedirect,
};
