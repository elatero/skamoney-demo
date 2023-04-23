import { RatingStore } from '../store'
import bridge from '@vkontakte/vk-bridge'
import { ratingBySkamers, ratingByBalance, ratingByReference, ratingByGroups } from './mocks'
import axios from 'axios'
import settings from 'config/settings'


const RatingActions = {
  async getRatingByScamers() {
    try {

      RatingStore.ratingFetch()
      const user = await bridge.send('VKWebAppGetUserInfo')

      let tempData = {}

      await axios.post(settings.API+"api/v1/info-top", {
          "id": user.id,
          "typeSort": "skamCount"
      }).then(async r => {

        tempData = r.data;

        tempData.list.map((element, index) => {
            element.photo = element.photoUrl;
            element.position = index + 1;
            element.skams = element.skamCount;
        });

        tempData.myRating.skams = tempData.myRating.skamCount || 0;
    
        console.log("api/v1/info-top users skamCount", r.data);

      })

      RatingStore.clearMyRating()
      RatingStore.ratingByScamersResolve(tempData)
    } catch (err) {
      const error = <RequestError>err
      RatingStore.ratingByScamersReject(error)
    }
  },

  async getRatingByBalance() {
    try {
      RatingStore.ratingFetch()
      const user = await bridge.send('VKWebAppGetUserInfo')

      let tempData = {}

      await axios.post(settings.API+"api/v1/info-top", {
          "id": user.id,
          "typeSort": "money"
      }).then(async r => {

        tempData = r.data;

        tempData.list.map((element, index) => {
            element.photo = element.photoUrl;
            element.position = index + 1;
            element.skams = element.money;
        });

        tempData.myRating.skams = tempData.myRating.money;

        console.log("api/v1/info-top users money", tempData);

      })

      RatingStore.clearMyRating()
      RatingStore.ratingByBalanceResolve(tempData)
    } catch (err) {
      console.log(err)
      const error = <RequestError>err
      RatingStore.ratingByBalanceReject(error)
    }
  },

  async getRatingByReference() {
    try {
      RatingStore.ratingFetch()
      const user = await bridge.send('VKWebAppGetUserInfo')

      let tempData = {}

      await axios.post(settings.API+"api/v1/info-top", {
          "id": user.id,
          "typeSort": "referals"
      }).then(async r => {

        tempData = r.data;

        tempData.list.map((element, index) => {
            element.photo = element.photoUrl;
            element.countReference = element.referals.length;
            element.position = index + 1;
        });

        tempData.myRating.countReference = tempData.myRating.referals.length;

        console.log("api/v1/info-top users referals", tempData);

      })

      RatingStore.clearMyRating()
      RatingStore.ratingByReferenceResolve(tempData)
    } catch (err) {
      const error = <RequestError>err
      RatingStore.ratingByRefereceReject(error)
    }
  },

  async getRatingByGroups() {
    try {
      RatingStore.ratingFetch()
      const user = await bridge.send('VKWebAppGetUserInfo')

      let tempData = {}

      await axios.post(settings.API+"api/v1/info-top", {
          "id": user.id,
          "typeSort": "clans"
      }).then(async r => {

        tempData = r.data;

        tempData.clans.map((element, index) => {
            // element.photo = element.photoUrl;
            // element.countReference = element.referals.length;
            element.position = index + 1;
        });

        // tempData.myRating = tempData.clan;
        tempData.clan.firstName = tempData.clan.name;
        tempData.clan.skams = tempData.clan.money;


        // tempData.myRating.countReference = tempData.myRating.referals.length;

        console.log("api/v1/info-top users groups", tempData);

      })

      RatingStore.clearMyRating()
      RatingStore.ratingByGroupResolve(tempData)
    } catch (err) {
      const error = <RequestError>err
      RatingStore.ratingByGroupReject(error)
    }
  },
}

export default RatingActions
