const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetching = state => state.auth.isFetching;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetching,
};

export default authSelectors;
