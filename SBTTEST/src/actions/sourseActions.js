import * as types from '../actions/constActions';

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