import { GET_SUM_OVN } from '../actions/constActions'

const initialState = {
  ovnsum: ''
}

export default function ovn (state = initialState, action) {
  switch (action.type) {
    case 'GET_SUM_OVN':
        
    return Object.assign({}, state, {ovnsum: action.ovnsum })

    default:
    return state
  }
}

