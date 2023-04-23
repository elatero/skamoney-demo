import User from '../models/User'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    colorName: string
    smileId: number
    frameId: number
    typeMoney: string
  }
}

const buyDecoration = async (req: IRequest, res: Response) => {
  try {
    const { id, colorName, smileId, frameId, typeMoney } = req.body
    const user = await User.findOne({ vkId: id })
    if (colorName !== undefined) {
      if (typeMoney == 'coins') {
        if (user && user.money >= 100) {
          await User.updateOne(
            { vkId: id },
            { $addToSet: { colorName: colorName } },
          )
          res.json({ status: 1, message: 'Completed successfully' })
        } else {
          res.json({ status: 3, message: 'not enough money' })
        }
        return
      } else {
        await User.updateOne(
          { vkId: id },
          { $addToSet: { colorName: colorName } },
        )
        res.json({ status: 1, message: 'Completed successfully' })
        return
      }
    }
    if (smileId !== undefined) {
      if (typeMoney == 'coins') {
        if (user && user.money >= 100) {
          await User.updateOne(
            { vkId: id },
            { $addToSet: { smileId: smileId } },
          )
          res.json({ status: 1, message: 'Completed successfully' })
        } else {
          res.json({ status: 3, message: 'not enough money' })
        }
        return
      } else {
        await User.updateOne({ vkId: id }, { $addToSet: { frameId: frameId } })
        res.json({ status: 1, message: 'Completed successfully' })
        return
      }
    }
    if (frameId !== undefined) {
      if (typeMoney == 'coins') {
        if (user && user.money >= 100) {
          await User.updateOne(
            { vkId: id },
            { $addToSet: { frameId: frameId } },
          )
          res.json({ status: 1, message: 'Completed successfully' })
        } else {
          res.json({ status: 3, message: 'not enough money' })
        }
        return
      } else {
        await User.updateOne({ vkId: id }, { $addToSet: { frameId: frameId } })
        res.json({ status: 1, message: 'Completed successfully' })
        return
      }
    }

    return
  } catch (e) {
    console.log(e)
    res.json({ status: 5, message: 'user is not defined' })
    return
  }
}

export default buyDecoration
