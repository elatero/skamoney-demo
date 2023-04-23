import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    victimId: number
  }
}

const scaming = async (req: IRequest, res: Response) => {
  try {
    const { id, victimId } = req.body
    let user = await User.findOne({ vkId: id })
    let victim = await User.findOne({ vkId: victimId })
    // console.log(victim)
    if (victim == null || user == null) {
      return res.json({ user: null, victim: null })
    }
    if (Date.now() > victim.buffTime && victim.buffType !== '') {
      await User.updateOne({ vkId: victimId }, { buffType: '', buffTime: -1 })
      victim.buffTime = -1
      victim.buffType = ''
    }
    if (victim.buffType !== 'secure') {
      if (user.myReferal !== -1 && user.skamCount == 9) {
        await User.updateOne(
          { vkId: user.myReferal },
          { $inc: { money: 1 }, $addToSet: { referals: id } },
        )
      }
      await User.updateOne(
        { vkId: victimId },
        { $inc: { money: -0.05, seasonMoney: -0.05 } },
      )
      await User.updateOne(
        { vkId: id },
        {
          $inc: {
            money: (0.03 + user.statusId * 0.005).toFixed(3),
            seasonMoney: (0.03 + user.statusId * 0.005).toFixed(3),
            skamCount: 1,
          },
          buffTime: -1,
          buffType: '',
        },
      )
      user = await User.findOne({ vkId: id })
      victim = await User.findOne({ vkId: victimId })
      res.json({ user, victim })
    } else {
      res.json({ status: 7, message: 'User use guard' })
    }
  } catch (e) {
    console.log(e)
    res.status(404).json({ message: 'error in database' })
  }
}

export default scaming
