import { ProfileStore } from '../store'
import bridge from '@vkontakte/vk-bridge'
import axios from 'axios'
import settings from 'config/settings'

const ProfileActions = {
  async init() {
    try {
      ProfileStore.userInfoFetch()
      const user = await bridge.send('VKWebAppGetUserInfo');

      let _tempData: ProfileData = {
        vkId: user.id,
        role: 'user',
        skams: 885303085,
        status: 'lover',
        setEmoji: [],
        team: {
          id: 1,
          name: 'Мемасики',
        },
        positionRating: 3000,
        raise: 1.02355,
        timerRaise: new Date().getTime() + 12 * 1000 * 60 * 60,
        firstName: user.first_name,
        lastName: user.last_name,
        photoUrl: user.photo_100,
        skamCount: 412,
        skamLevel: 1000,
        reference: `https://vk.com/app${settings.APP_ID}#${user.id}`,
        referals: [],
      }
      
      let tempData = {}

      await axios.post(settings.API+"api/v1/user", {
        "id": user.id,
        "myReferal": 0,
        "firstName": user.first_name,
        "lastName": user.last_name,
        "photoUrl": user.photo_100
      }).then(async r => {
        const { money, moneyBox, lastVisit, teamId } = r.data.candidate;

        let team = {}

        if(teamId >= 0){
          await axios.post(settings.API+"api/v1/clan", {
            "id": teamId,
          }).then(r => {
            console.log("api/v1/clan clan", r.data.clan);

            team = {
              id: teamId,
              name: r.data.clan.name
            }
          })
        }

        tempData = {..._tempData, ...r.data.candidate, ...{ skams: money, raise: moneyBox, timerRaise: lastVisit, team }}
        console.log("api/v1/user candidate", r.data.candidate);
        // console.log("tDDDDDDDDD", tempData);
      })


      localStorage.setItem('profile', JSON.stringify(tempData))

      ProfileStore.userInfoResolve(tempData)

      return true
    } catch (err) {
      const error = <RequestError>err
      ProfileStore.userInfoReject(error)
    }

  },

  async getUserData() {
    try {
      // UserStore.getUserData({})
    } catch (err) {
      const error = <RequestError>err
      ProfileStore.pendingMutation()
      ProfileStore.userInfoReject(error)
    }
  },

  async removeProfile() {
    try {
      const userId = await bridge.send('VKWebAppGetUserInfo');

      await axios.delete(settings.API+"api/v1/user", {
        "id": userId.id,
      }).then(r => {
        console.log("api/v1/user bool", r.data);
        r.data.result && bridge.send("VKWebAppClose", {"status": "success", "payload": {"name": "test"} });
      })


      console.log(userId.id)
    } catch (err) {
      const error = <RequestError>err
      ProfileStore.pendingMutation()
      ProfileStore.userInfoReject(error)
    }
  },
}

export default ProfileActions
