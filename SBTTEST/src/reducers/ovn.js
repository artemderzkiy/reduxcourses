import { GET_SUM_OVN, SET_SUM_OVN } from '../actions/constActions'

const initialState = {
	ovnsum: '',
	sum : ''
}

export default function ovn (state = initialState, action) {
	switch (action.type) {
		case 'SET_SUM_OVN':
		return  ({...state, ovnsum:  action.ovnsum})

		case 'SET_SUM':
		return  ({...state,	sum: action.sum})

		default:
		return state
	}
}

