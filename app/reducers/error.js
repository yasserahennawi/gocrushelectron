export default function (state = [], action) {
  switch (action.type) {
    case 'REQUEST_FAIL':
      const actionType = action.type;
      return  {
        ...state ,
        actionType: action.payload 
      }
  }
  return state;
}
