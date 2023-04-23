import {
  bindActionCreators,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

import profile from './profile/slice'
import views from './views/slice'
import meta from './meta/slice'
import rating from './rating/slice'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profile: profile.reducer,
  views: views.reducer,
  meta: meta.reducer,
  rating: rating.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  enhancers: [],
})

//** Stores */
export const ProfileStore = bindActionCreators(profile.actions, store.dispatch)
export const ViewsStore = bindActionCreators(views.actions, store.dispatch)
export const MetaStore = bindActionCreators(meta.actions, store.dispatch)
export const RatingStore = bindActionCreators(rating.actions, store.dispatch)

export default store
