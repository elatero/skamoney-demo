import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  fetch: LoadingState
  data: null | ProfileData
  error: null | RequestError

  pendingMutation: boolean
}

export const initialState: ProfileState = {
  fetch: 'idle',
  data: null,
  error: null,
  pendingMutation: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pendingMutation(state) {
      state.pendingMutation = true
    },

    userInfoFetch(state) {
      state.fetch = 'idle'
    },

    userInfoResolve(state, { payload }: PayloadAction<ProfileData>) {
      state.data = payload
      state.fetch = 'resolved'
    },

    userInfoReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },
  },
})

export default userSlice
