
const initialState = {
	ovnNum: '',
	sum : ''
}



export default function ovn (state = initialState, action) {
	switch (action.type) {
		case 'SET_NUM_OVN':

		return  ({...state, ovnNum:  Number(action.ovnNum)})

		case 'SET_SUM':
		return  ({...state,	sum: Number(action.sum)})

		default:
		return state
	}
}

