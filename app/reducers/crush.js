export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_MY_CRUSHES_REQUEST':
      return  action.type
    case 'FETCH_MY_CRUSHES_SUCCESS':
      return  action.payload
  }
  return state;
}
