import User from '../models/User'
import { Request, Response } from 'express'

const collectMoney = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    let user = await User.findOne({ vkId: id })
    await User.updateOne(
      { vkId: id },
      {
        $inc: { money: user?.moneyBox, seasonMoney: user?.moneyBox },
        moneyBox: 0,
      },
    )

    user = await User.findOne({ vkId: id })
    res.json({ user })
  } catch (e) {
    res.status(404).json({ status: 4, message: 'error in database' })
  }
}

export default collectMoney
