

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



// handleToogle = e => {
// 		let sumsourse=0;
// 		for (var sourse of this.props.sourses) {   
// 			sumsourse+=Number(sourse.sumField);			
// 		}
// 		sumsourse+=this.props.ovn.sum;		
// 		if (this.props.ovn.sum >= sumsourse)
// 		{
// 			this.props.actions.toogleBut(true)
// 		}		
// 		else  
// 		{
// 			this.props.actions.toogleBut(false)
// 		}
		
// 	}