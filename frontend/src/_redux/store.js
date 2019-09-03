import { createStore, combineReducers, applyMiddleware } from 'redux'

import menus from '../_reducers/menus'
import categories from '../_reducers/categories'
import tables from '../_reducers/tables'
import orders from '../_reducers/orders'

import { logger } from './middleware';

// this global states
const reducers = combineReducers({
  menus,
  categories,
  tables,
  orders
})

const store = createStore(
  reducers,
  applyMiddleware(logger)
)

export default store