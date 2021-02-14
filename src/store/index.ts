import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import jobsReducer from './reducers/jobs'
import { AppState } from '../types'

const middlewares: any = [thunk]

const rootReducer = combineReducers({
  jobs: jobsReducer
})

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
