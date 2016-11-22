import { ADD_SOURSE, DELETE_SOURSE } from '../actions/constActions'

const initialState = [{
  id : 0,
  sourseField : '',
  kasSymb : '',  
  sumField : ''
}]

function checkAdd(action, state) {  
  return [
  ...state, {
    id: `id_${Date.now().toString(36)}`,
    sourseField: action.sourseField,
    kasSymb : action.kasSymb,  
    sumField : action.sumField
  }      
  ]
}


export default function sourses (state = initialState, action) {
  switch (action.type) {
   
    case 'ADD_SOURSE': 
    return checkAdd(action, state);
    
    
    case 'DELETE_SOURSE':
    return state.filter(sourse =>
      sourse.id !== action.id
      )

    default:
    return state
  }
}

