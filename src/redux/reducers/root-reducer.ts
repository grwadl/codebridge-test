import { combineReducers } from '@reduxjs/toolkit'
import { blogReducer } from './blog-reducer/blog-reducer'

export const rootReducer = combineReducers({
  blog: blogReducer
})
