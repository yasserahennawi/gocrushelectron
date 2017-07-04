export default function (state = {}, action) {
  switch (action.type) {
    // case 'SESSION':
    //   return  state
    case 'FETCH_SESSION_SUCCESS':
      return  action.payload
  }
  return state;
}
