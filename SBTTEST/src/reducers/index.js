
import { combineReducers } from 'redux'
import sourses from './sourses'
import ovn from './ovn'
import button from './reducers'

const rootReducer = combineReducers({
  sourses,ovn,button

})

export default rootReducer



// const initialState = {
// 	numOvn : 0
// };

// export default function userstate(state=initialState) {
// 	return state;
// }