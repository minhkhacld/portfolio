import jwtDecode from 'jwt-decode';
// import axios from 'axios';
// routes
import { PATH_APP, PATH_AUTH } from '../routes/paths';

//
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  // console.log(accessToken);
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;
  // console.log(decoded);

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp, auth) => {
  let expiredTimer;
  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 5000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;
  clearTimeout(expiredTimer);
  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại');
    localStorage.removeItem('accessToken');
    auth.signOutRedirect();
    // window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (accessToken, auth) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // console.log(axios.defaults.headers.common.Authorization);
    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~5 days by minimals server
    handleTokenExpired(exp, auth);
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
