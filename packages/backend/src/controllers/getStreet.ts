import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
  }
}
const getStreet = async (req: IRequest, res: Response) => {
  try {
    const { id } = req.body
    const user = await User.findOne({ vkId: id })
    let friend
    const friends = []
    if (user == null) {
      res.json({ user: null })
      return
    }
    for (let i = 0; i < user.friends.length; i++) {
      friend = await User.findOne(
        { vkId: user.friends[i] },
        {
          vkId: 1,
          firstName: 1,
          lastName: 1,
          photoUrl: 1,
          colorName: 1,
          money: 1,
          usedSmileId: 1,
          usedFrameId: 1,
        },
      )
      friend !== undefined ? friends.push(friend) : friends.push(undefined)
    }
    res.json({ friends: friends })
    return
  } catch (e) {
    res.status(404).json({ status: 4, message: 'error in database' })
    console.log(e)
  }
}

export default getStreet
