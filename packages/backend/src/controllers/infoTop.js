import User from '../models/User'
import Clan from '../models/Clan'

const infoTop = async (req, res) => {
  try {
    const { typeSort, id } = req.body

    if (typeSort == 'money') {
      let users = await User.find(
        {},
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          money: 1,
          _id: 0,
        },
      )
        .sort({ money: -1 })
        .limit(999)
      let userPosition = users.length + 1
      for (let i = 0; i < users.length; i++) {
        if (users[i].vkId == id) {
          userPosition = i + 1
        }
      }
      let myRating
      myRating = await User.findOne(
        { vkId: id },
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          money: 1,
          _id: 0,
        },
      )
      myRating.position = userPosition
      res.json({
        myRating: {
          vkId: myRating.vkId,
          firstName: myRating.firstName,
          lastName: myRating.lastName,
          photoUrl: myRating.photoUrl,
          money: myRating.money,
          position: userPosition,
        },
        list: users,
      })
      return
    }
    if (typeSort == 'referals') {
      let list = await User.find(
        {},
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          referals: 1,
          _id: 0,
        },
      )
        .sort({ referals: -1 })
        .limit(999)
      let userPosition = list.length + 1
      for (let i = 0; i < list.length; i++) {
        if (list[i].vkId == id) {
          userPosition = i + 1
        }
      }
      let myRating
      myRating = await User.findOne(
        { vkId: id },
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          referals: 1,
          _id: 0,
        },
      )
      myRating.position = userPosition
      res.json({
        myRating: {
          vkId: myRating.vkId,
          firstName: myRating.firstName,
          lastName: myRating.lastName,
          photoUrl: myRating.photoUrl,
          referals: myRating.referals,
          position: userPosition,
        },
        list,
      })
      return
    }

    if (typeSort == 'skamCount') {
      let list = await User.find(
        {},
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          skamCount: 1,
          _id: 0,
        },
      )
        .sort({ skamCount: -1 })
        .limit(999)
      let userPosition = list.length + 1
      for (let i = 0; i < list.length; i++) {
        if (list[i].vkId == id) {
          userPosition = i + 1
        }
      }
      let myRating
      myRating = await User.findOne(
        { vkId: id },
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          skamCount: 1,
          _id: 0,
        },
      )
      myRating.position = userPosition
      res.json({
        myRating: {
          vkId: myRating.vkId,
          firstName: myRating.firstName,
          lastName: myRating.lastName,
          photoUrl: myRating.photoUrl,
          skamCount: myRating.skamCount,
          position: userPosition,
        },
        list,
      })
      return
    }

    if (typeSort == 'clans') {
      let clans = await Clan.find(
        {},
        {
          id: 1,
          name: 1,
          photoUrl: 1,
          money: 1,
        },
      )
        .sort({ money: -1 })
        .limit(999)
      let user = await User.findOne({ vkId: id })
      let clan
      if (user.teamId !== -1) {
        clan = await Clan.findOne({ id: user.teamId })
        let clanPosition = clans.length + 1
        for (let i = 0; i < clans.length; i++) {
          if (clans[i].id == user.teamId) {
            clanPosition = i + 1
          }
        }
        res.json({
          clan: {
            id: clan.id,
            name: clan.name,
            photoUrl: clan.photoUrl,
            position: clanPosition,
            money: clan.money,
          },
          clans,
        })
        return
      } else {
        res.json({
          clan: undefined,
          clans,
        })
        return
      }
    }
  } catch (e) {
    res.status(404).json({ status: 4, message: 'error in database' })
    console.log(e)
  }
}

export default infoTop
