import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ViewsState {
  fetch: LoadingState
  data: null
  error: null | RequestError

  activeView: ViewsTypes
  activePanel: MainPanelNameTypes
}

export const initialState: ViewsState = {
  fetch: 'idle',
  data: null,
  error: null,

  activeView: 'main',
  activePanel: 'profile',
}

const viewsSlice = createSlice({
  name: 'views',
  initialState,
  reducers: {
    onChangeViews(state, { payload }: PayloadAction<ViewsTypes>) {
      state.activeView = payload
    },

    onChangePanel(state, { payload }: PayloadAction<MainPanelNameTypes>) {
      state.activePanel = payload
    },
  },
})

export default viewsSlice
