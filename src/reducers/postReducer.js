


export default (state = [], action = null) => {
 switch (action.type) {
  case 'FETCH_POSTS':
    return action.payload;
  
  default:
    return state;
 }
};