import { TOOGLE_BUT } from '../actions/constActions'

const initialState = {
	activeBut: false
	
}

function checkButton(action, state) {  
  let sumsourse=0;
		for (var sourse of this.props.sourses) {   
			sumsourse+=Number(sourse.sumField);			
		}
		sumsourse+=this.props.ovn.ovnNum;
		if (this.props.ovn.sum > sumsourse)
		{
			this.props.actions.toogleBut(true)
		}		
		else  
		{
			this.props.actions.toogleBut(false)
		}
}


export default function button (state = initialState, action) {
	switch (action.type) {
		case 'TOOGLE_BUT': 		 
		return (			
			{ ...state, activeBut: action.activeBut}			
			)
	
	
		default:
		return state

	}
}
