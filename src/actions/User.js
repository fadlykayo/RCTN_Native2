export function login(stateUsername) {
  return {
    type: 'LOGIN',
    payload: {
      username: stateUsername,
    },
  };
};
