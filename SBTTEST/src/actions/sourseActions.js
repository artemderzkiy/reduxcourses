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


export const setSumOvn = (ovnsum) =>
{
	return {
		type: types.SET_SUM_OVN,
		ovnsum
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