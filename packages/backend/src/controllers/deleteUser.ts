import User from '../models/User'
import { Request, Response } from 'express'

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    await User.deleteOne({ vkId: id })

    res.json({
      result: true,
    })
  } catch (e) {
    res.json({ status: 5, message: 'user is not defined' })
    console.log(e)
  }
}

export default deleteUser
