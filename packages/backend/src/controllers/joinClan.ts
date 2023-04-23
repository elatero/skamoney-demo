import User from '../models/User'
import Clan from '../models/Clan'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    userId: number
    clanId: number
  }
}

const joinClan = async (req: IRequest, res: Response) => {
  try {
    const { userId, clanId } = req.body
    // const user = await User.findOne({ vkId: userId })
    // if (user && user.teamId > 0) {
    //   const clan = await Clan.findOne({ id: user.teamId })
    //   const subs = [Number]
    //   if (clan == null) {
    //     return
    //   }
    //   for (let i = 0; i < subs.length; i++) {
    //     if (clan.members[i] !== userId) {
    //       subs.push(clan.members[i])
    //     }
    //   }

    //   await Clan.updateOne({ id: user.teamId }, { members: subs })
    // }

    await User.updateOne({ vkId: userId }, { teamId: clanId })
    await Clan.updateOne({ id: clanId }, { $push: { members: userId } })

    res.json({ status: 1, message: 'Completed successfully' })
    return
  } catch (e) {
    console.log(e)
    res.json({ status: 4, message: 'error in database' })
    return
  }
}

export default joinClan
