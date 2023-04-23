import { MetaStore } from '../store'
import axios from 'axios'
import settings from 'config/settings'


const MetaActions = {
  async init() {
    try {
      MetaStore.userInfoFetch()
      // const user = await bridge.send('VKWebAppGetUserInfo')
      // ProfileStore.userInfoResolve(user)

      let tempData = {}

      await axios.get(settings.API+"api/v1/god-scammer").then(r => {

        tempData = {...r.data.godScammer, photo: r.data.godScammer.photoUrl}
        // tempData = {
        //   // firstName: 'Paityn',
        //   // lastName: 'Bator2',
        //   // photo:
        //   //   'https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1',
        //   // price: 1.423,
        // }

        console.log("/api/v1/god-scammer godScammer", r.data.godScammer);
        // console.log("tDDDDDDDDD", tempData);

      })

      MetaStore.userInfoResolve(tempData)

    } catch (err) {
      const error = <RequestError>err
      MetaStore.userInfoReject(error)
    }
  },

  async getUserData() {
    try {
      // UserStore.getUserData({})
    } catch (err) {
      const error = <RequestError>err
      MetaStore.pendingMutation()
      MetaStore.userInfoReject(error)
    }
  },
}

export default MetaActions
