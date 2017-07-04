export default function (state = null, action) {
  switch (action.type) {
    case 'REQUEST_FAIL':
      return  action.payload
  }
  return state;
}
