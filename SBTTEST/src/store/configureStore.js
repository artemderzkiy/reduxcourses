import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
	const logger = createLogger();	
	const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}