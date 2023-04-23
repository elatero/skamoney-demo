import { Request, Response } from 'express'

import User from '../models/User'

interface IRequest extends Request {
  body: {
    id: number
    myReferal: number
    firstName: string
    lastName: string
    photoUrl: string
  }
}

const user = async (req: IRequest, res: Response) => {
  try {
    const { id, myReferal, firstName, lastName, photoUrl } = req.body

    const candidate = await User.findOne({ vkId: id })

    if (candidate) {
      await User.updateOne({ vkId: id }, { money: candidate.money.toFixed(3) })
      const user = await User.findOne({ vkId: id })
      res.json({ candidate: user })
      return
    }
    const user = await User.create({
      vkId: id,
      myReferal: myReferal,
      firstName: firstName,
      lastName: lastName,
      photoUrl: photoUrl,
      player: true,
    })
    await user.save()

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

    res.json({ user })
  } catch (e) {
    console.log(e)
    res.status(404).json({ message: 'user is not defined' })
  }
}

export default user
