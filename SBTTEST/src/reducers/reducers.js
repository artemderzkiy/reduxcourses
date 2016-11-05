import { TOOGLE_BUT } from '../actions/constActions'

const initialState = {
  activeBut: false
}

export default function button (state = initialState, action) {
  switch (action.type) {
    case 'TOOGLE_BUT':
       
    return Object.assign({}, state, {activeBut: !action.activeBut})

    default:
    return state
  }
}


