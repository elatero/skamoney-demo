import { ViewsStore } from '../store'

const ViewsActions = {
  onChangeView(view: ViewsTypes) {
    ViewsStore.onChangeViews(view)
  },

  onChangePanel(panel: MainPanelNameTypes) {
    ViewsStore.onChangePanel(panel)
  },
}

export default ViewsActions
