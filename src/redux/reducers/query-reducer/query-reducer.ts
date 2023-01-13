import { searchParams } from '@/lib/services/params'
import { changeQueryAction } from '@/redux/actions/query-actions'
import { createReducer } from '@reduxjs/toolkit'
import { QueryInitialState } from './types'

const initialState: QueryInitialState = {
  query: searchParams.getOne('title_contains') || searchParams.getOne('summary_contains')
}

export const queryReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeQueryAction, (state, action) => {
    const { payload } = action

    state.query = payload
  })
})
