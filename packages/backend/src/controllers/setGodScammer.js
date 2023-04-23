import User from '../models/User'
import GodScammer from '../models/GodScammer'

const setGodScammer = async (req, res) => {
  try {
    const { id } = req.body
    let user = await User.findOne({ vkId: id })
    let godScammer = await GodScammer.findOne({})

    if (!godScammer) {
      GodScammer.create({
        vkId: user.vkId,
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl,
        startBlocked: Date.now(),
        price: 100,
      })
      return
    }

    if (id == godScammer.vkId) {
      res.json({ status: 2, message: 'Has already taken this position' })
      return
    }

    // if (godScammer.blocked == false) {
    //   res.json({ status: 6, message: 'position is blocked' })
    //   return
    // }

    if (user.money >= godScammer.price) {
      await User.updateOne(
        { vkId: user.vkId },
        { money: (user.money - godScammer.price).toFixed(3) },
      )
      // await GodScammer.deleteOne({ vkId: godScammer.vkId })
      await GodScammer.updateOne(
        { vkId: godScammer.vkId },
        {
          vkId: user.vkId,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.photoUrl,
          price: parseInt(godScammer.price * 1.1),
          startBlocked: Date.now(),
          blocked: true,
        },
      )
    } else {
      res.json({ status: 3, message: 'not enough money' })
      return
    }
    godScammer = await GodScammer.findOne()
    res.json({ status: 1, message: 'Completed successfully' })
    return
  } catch (e) {
    console.log(e)
    res.status(404).json({ status: 4, message: 'error in database' })
  }
}

export default setGodScammer
