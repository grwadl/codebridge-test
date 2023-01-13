import { createAction } from '@reduxjs/toolkit'
import { ChangeQueryAction, QueryActions } from './types'

export const changeQueryAction = createAction<ChangeQueryAction>(QueryActions.CHANGE_QUERY, (query) => {
  return { payload: query }
})
