import jwtDecode from "jwt-decode";

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decocde = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decocde.exp > currentTime;
};

export default isValidToken;
