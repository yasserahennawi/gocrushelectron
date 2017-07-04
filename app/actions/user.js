export const fetchSession = () => {
  return {
      type: 'FETCH_SESSION'
  }
};

export const fetchSessionSuccess = (data) => {
  return {
      type: 'FETCH_SESSION_SUCCESS',
      payload: data
  }
};
