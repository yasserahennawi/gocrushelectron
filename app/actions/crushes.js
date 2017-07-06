export const fetchMyCrushes = () => {
  return {
      type: 'FETCH_MY_CRUSHES_REQUEST'
  }
};

export const fetchMyCrushesSuccess = (myCrushes) => {
    return {
        type: 'FETCH_MY_CRUSHES_SUCCESS',
        payload: myCrushes
    }
};

export const fetchCrushesOnMe = () => {
  return {
      type: 'FETCH_CRUSHES_ON_ME_REQUEST'
  }
};

export const fetchCrushesOnMeSuccess = (numberOfCrushes) => {
    return {
        type: 'FETCH_CRUSHES_ON_ME_SUCCESS',
        payload:  numberOfCrushes
    }
};

export const addCrush = (crush) => {
  return {
      type: 'ADD_CRUSH_REQUEST',
      payload: crush
  }
};

export const addCrushSuccess = (crush) => {
    return {
        type: 'ADD_CRUSH_SUCCESS',
        payload: crush
    }
};
