export default function (state = [], action) {
  // switch (action.type) {
  //   case 'REQUEST_FAIL':
      state.push({"adfsgg": action.payload})
      // return  [
      //   ...state ,
      //
      // ]
  // }
  return state;
}
