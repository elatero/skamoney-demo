import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  RatingBySkamers,
  RatingByBalance,
  RatingByReference,
  RatingByGrops,
  MyBandRating,
  MyRating,
} from './types'

export interface RatingState {
  fetch: LoadingState
  data: {
    ratingBySkamers: RatingBySkamers | null
    ratingByBalance: RatingByBalance | null
    ratingByReference: RatingByReference | null
    ratingByGroups: RatingByGrops | null
  }
  error: null | RequestError

  myRating: null | MyRating
  myBandRating: null | MyBandRating
  pendingMutation: boolean
}

export const initialState: RatingState = {
  fetch: 'idle',
  data: {
    ratingBySkamers: null,
    ratingByBalance: null,
    ratingByReference: null,
    ratingByGroups: null,
  },
  error: null,
  myRating: null,
  myBandRating: null,
  pendingMutation: false,
}

const metaSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    pendingMutation(state) {
      state.pendingMutation = true
    },

    ratingFetch(state) {
      state.fetch = 'idle'
    },

    clearMyRating(state) {
      state.myRating = null
    },

    ratingByScamersResolve(state, { payload }: PayloadAction<RatingBySkamers>) {
      state.data.ratingBySkamers = payload
      state.myRating = payload.myRating
      state.fetch = 'resolved'
    },

    ratingByScamersReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },

    ratingByBalanceResolve(state, { payload }: PayloadAction<RatingByBalance>) {
      state.data.ratingByBalance = payload
      state.myRating = payload.myRating
      state.fetch = 'resolved'
    },

    ratingByBalanceReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },

    ratingByReferenceResolve(
      state,
      { payload }: PayloadAction<RatingByReference>,
    ) {
      state.data.ratingByReference = payload
      state.myRating = payload.myRating
      state.fetch = 'resolved'
    },

    ratingByRefereceReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },

    ratingByGroupResolve(state, { payload }: PayloadAction<RatingByGrops>) {
      state.data.ratingByGroups = payload
      state.myRating = payload.clan
      state.fetch = 'resolved'
    },

    ratingByGroupReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },
  },
})

export default metaSlice
