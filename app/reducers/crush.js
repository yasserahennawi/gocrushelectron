export default function (state = {}, action) {
  switch (action.type) {
    // case 'FETCH_MY_CRUSHES_REQUEST':
    //   return  action.type
    case 'FETCH_MY_CRUSHES_SUCCESS':
      return  {
        ...state,
        "myCrushes" : action.payload
      }
    case 'FETCH_CRUSHES_ON_ME_SUCCESS':
      return  {
        ...state,
        "crushesOnMe" : action.payload
      }
    case 'ADD_CRUSH_SUCCESS':
      return  {
        ...state,
        "newCrush" : action.payload
      }
  }
  return state;
}
