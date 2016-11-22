import * as types from '../actions/constActions';



export const AddSourse = (kasSymb, sourseField, sumField) => 
{
	return {
		type: types.ADD_SOURSE,		
		kasSymb,
		sourseField,
		sumField 
	}
}

export const DeleteSourse = (id) => 
{
	return {
		type: types.DELETE_SOURSE,		
		id 
		
	}
}


export const setNumOvn = (ovnNum) =>
{
	return {
		type: types.SET_NUM_OVN,
		ovnNum
	}
}

export const setSum = (sum) =>
{
	return {
		type: types.SET_SUM,
		sum
	}
}

export const toogleBut = (activeBut) =>
{
	return {
		type: types.TOOGLE_BUT,
		activeBut
		
	}
}