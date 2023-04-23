import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    typeBaff: string
    time: number
    price: number
  }
}

const buyBaff = async (req: IRequest, res: Response) => {
  try {
    const { id, typeBaff, time, price } = req.body
    const user = await User.findOne({ vkId: id })
    if ((user && user.money >= price) || price == -1) {
      await User.updateOne(
        { vkId: id },
        { buffType: typeBaff, bufTime: Date.now() + time * 60 * 60 * 1000 },
      )
      res.json({ status: 1, message: 'Completed successfully' })
      return
    }

    res.json({ status: 1, message: 'Completed successfully' })
    return
  } catch (e) {
    console.log(e)
    res.json({ status: 5, message: 'user is not defined' })
    return
  }
}

export default buyBaff
