export const fetchMyCrushes = () => {
  return {
      type: 'FETCH_MY_CRUSHES_REQUEST'
  }
};

export const fetchMyCrushesSuccess = (myCrushes) => {
    return {
        type: 'FETCH_MY_CRUSHES_SUCCESS',
        payload: {
          myCrushes : myCrushes
        }
    }
};
