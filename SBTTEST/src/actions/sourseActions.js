import * as types from '../actions/constActions';

export function setSumOvn(sumval)
{
	return {
		type: types.SET_SUM_OVN,
		sumval
	}
}

export function getSumOvn(sumval)
{
	return {
		type: types.GET_SUM_OVN,
		sumval
	}
}

export function setSourse(sourse) {
	return {
		type: types.ADD_SOURSE,
		sourse
	};
}

export function deleteSourse(sourse) {
	return {
		type: types.DELETE_SOURSE,
		sourse
	};
}