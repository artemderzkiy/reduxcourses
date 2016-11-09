
import { combineReducers } from 'redux'
import sourses from './sourses'
import ovn from './ovn'
import button from './reducers'

const rootReducer = combineReducers({
  sourses,ovn,button

})

export default rootReducer
