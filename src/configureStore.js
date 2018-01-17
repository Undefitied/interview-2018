import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware
        )
    )
}

export default (configureStore)()

sagaMiddleware.run(mySaga)
