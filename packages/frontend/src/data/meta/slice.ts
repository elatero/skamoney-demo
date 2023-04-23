import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LeaderInfo = {
  firstName: string
  lastName: string
  photo: string
  price: number
}

export interface MetaState {
  fetch: LoadingState
  data: {
    vipSkamer: null | LeaderInfo
  }
  error: null | RequestError

  pendingMutation: boolean
}

export const initialState: MetaState = {
  fetch: 'idle',
  data: {
    vipSkamer: {
      firstName: 'Paityn',
      lastName: 'Bator',
      photo:
        'https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1',
      price: 1.423,
    },
  },
  error: null,
  pendingMutation: false,
}

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    pendingMutation(state) {
      state.pendingMutation = true
    },

    userInfoFetch(state) {
      state.fetch = 'idle'
    },

    userInfoResolve(state, { payload }: PayloadAction<LeaderInfo>) {
      state.data.vipSkamer = payload
      state.fetch = 'resolved'
    },

    userInfoReject(state, { payload }: PayloadAction<RequestError>) {
      state.error = payload
      state.fetch = 'rejected'
    },
  },
})

export default metaSlice
