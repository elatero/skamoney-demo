import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
  }
}

const adsMoney = async (req: IRequest, res: Response) => {
  try {
    const { id } = req.body
    let user = await User.findOne({ vkId: id })
    if (user && Date.now() > user.buffTime && user.buffType == 'adblock') {
      await User.updateOne({ vkId: id }, { buffType: '', buffTime: -1 })
      user.buffType = ''
      user.buffTime = -1
    }
    if (user !== null) {
      await User.updateOne(
        { vkId: id },
        {
          money: (user.money + 0.03).toFixed(3),
          seasonMoney: (user.seasonMoney + 0.03).toFixed(3),
        },
      )
    }

    user = await User.findOne({ vkId: id })
    res.json({ user })
  } catch (e) {
    res.status(404).json({ status: 4, message: 'error in database' })
  }
}

export default adsMoney
