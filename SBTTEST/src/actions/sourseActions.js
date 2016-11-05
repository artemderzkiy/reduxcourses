import * as types from '../actions/constActions';



export const AddSourse = (kassSymb, sourseField, sumField) => 
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


export function getSumOvn(sumval)
{
	return {
		type: types.GET_SUM_OVN,
		ovnsum
	}
}

export function toogleBut(sumval)
{
	return {
		type: types.TOOGLE_BUT,
		activeBut
	}
}