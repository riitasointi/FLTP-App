export const state = () => ({
  user: null,
});

export const getters = {
  getUser(state) {
    return state.user;
  },
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    console.log('AUTH_STATE_CHANGED_MUTATION');
    console.log(authUser);
    console.log(claims);
    if (!authUser) {
      // claims = null
      // perform logout operations
    } else {
      const { uid, email, emailVerified, displayName } = authUser;
      state.user = { uid, email, emailVerified, displayName, claims };
    }
  },
};

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  },
};
