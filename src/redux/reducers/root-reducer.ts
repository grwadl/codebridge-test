import { combineReducers } from '@reduxjs/toolkit'
import { blogReducer } from './blog-reducer/blog-reducer'
import { queryReducer } from './query-reducer/query-reducer'

export const rootReducer = combineReducers({
  blog: blogReducer,
  query: queryReducer
})
