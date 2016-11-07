import { ADD_SOURSE, DELETE_SOURSE } from '../actions/constActions'

const initialState = [{
  id : 0,
  sourseField : '',
  kasSymb : '',  
    sumField : ''
}]

export default function sourses (state = initialState, action) {
  switch (action.type) {
    case 'ADD_SOURSE':
    return [
    {
       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      sourseField: action.sourseField,
      kasSymb : action.kasSymb,  
    sumField : action.sumField
    },
    ...state
    ]
    
    case 'DELETE_SOURSE':
    return state.filter(sourse =>
        sourse.id !== action.id
      )

    default:
    return state
  }
}

