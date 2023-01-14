import { combineReducers } from '@reduxjs/toolkit'
import { blogPageReducer } from './blog-page-reducer'
import { blogReducer } from './blog-reducer/blog-reducer'

export const rootReducer = combineReducers({
  blog: blogReducer,
  blogPage: blogPageReducer
})
