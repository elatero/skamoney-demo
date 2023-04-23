import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    friends: number[]
  }
}

const setStreet = async (req: IRequest, res: Response) => {
  try {
    const { id, friends } = req.body
    // let friendsId = [Number]
    // for (let i = 0; i < friends.length; i++) {
    //   friendsId.push(friends)
    //   console.log(friends)
    // }
    // console.log(friends.length)
    await User.updateOne({ vkId: id }, { friends: friends })
    const user = await User.findOne({ vkId: id })
    res.json({ user })
  } catch (e) {
    res.status(404).json({ message: 'user is not defined' })
    console.log(e)
  }
}

export default setStreet
