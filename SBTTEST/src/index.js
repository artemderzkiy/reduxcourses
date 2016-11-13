import React from 'react'
import { render } from 'react-dom'
import {Provider}  from 'react-redux'
import MainApp  from './containers/MainApp'
import configureStore from './store/configureStore'
import {AddSourse} from './actions/sourseActions'

const store = configureStore();
// commented FOR TESTING ACTIONS 
// console.log(store.getState())


//  let unsubscribe = store.subscribe(() =>
//    console.log(store.getState())
//  )


//store.dispatch(setSum(50))
//store.dispatch(setSumOvn(500));
//store.dispatch(toogleBut(true));
//store.dispatch(AddSourse("rubles", 444, "go"));

//unsubscribe()

render(
	<Provider store={store}>
	<MainApp/>	
	</Provider>,
	document.getElementById('root')
	)