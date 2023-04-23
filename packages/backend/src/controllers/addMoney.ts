import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    money: number
  }
}

const addMoney = async (req: IRequest, res: Response) => {
  try {
    const { id, money } = req.body
    await User.updateOne({ vkId: id }, { $inc: { money: money.toFixed(3) } })
    const user = await User.findOne({ vkId: id })
    res.json({ user })
    return
  } catch (e) {
    console.log(e)
    res.json({ status: 5, message: 'user is not defined' })
    return
  }
}

export default addMoney
