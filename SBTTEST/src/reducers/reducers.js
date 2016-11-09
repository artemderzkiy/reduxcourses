import { TOOGLE_BUT } from '../actions/constActions'

const initialState = {
	activeBut: true
}

export default function button (state = initialState, action) {
	switch (action.type) {
		case 'TOOGLE_BUT': 
		
		return (			
			{ ...state, activeBut: !action.activeBut }			
			)
	
		default:
		return state

	}
}
