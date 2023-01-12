import { blogService } from '@/lib/services/api'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/'

const extraArgument = {
  blogService
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
})

export { store, extraArgument }
