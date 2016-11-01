function placeSum(state = [], action) {
  switch(action.type){
    case 'SET_SUM_OVN':
      // return the new state with the new comment
      return [...state,{
        sumOvn: action.sum
      }];
    
    default:
      return state;
  }
  return state;
}