import User from '../models/User'

const infoUser = async (req, res) => {
  try {
    const { id } = req.body
    let user = await User.findOne({ vkId: id })

    let n = 0

    if (user.skamCount < 1000) {
      n = 0
    } else if (user.skamCount < 5000) {
      n = 1
    } else if (user.skamCount < 10_000) {
      n = 2
    } else if (user.skamCount < 50_000) {
      n = 3
    } else if (user.skamCount < 100_000) {
      n = 4
    } else if (user.skamCount > 100_000) {
      n = 5
    }

    await User.updateOne(
      { vkId: id },
      {
        $inc: {
          moneyBox:
            ((user.referals.length * (Date.now() - user.lastVisit)) / 1000) *
            0.001,
        },
        statusId: n,
        lastVisit: Date.now(),
      },
    )
    if (user == null) {
      res.json({ status: 5, message: 'user is not defined' })
      return
    }
    user = await User.findOne({ vkId: id })
    res.json({ user })
  } catch (e) {
    console.log(e)
  }
}

export default infoUser
