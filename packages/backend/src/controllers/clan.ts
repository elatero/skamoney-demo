import Clan from '../models/Clan'
import { Request, Response } from 'express'

interface IRequest extends Request {
  body: {
    id: number
    bossId: number
    name: string
    photoUrl: string
  }
}

const clan = async (req: IRequest, res: Response) => {
  try {
    const { id, bossId, name, photoUrl } = req.body

    let clan = await Clan.findOne({ id: id })

    if (clan) {
      return res.json({ clan })
    }

    clan = await Clan.create({
      id,
      bossId,
      name,
      photoUrl,
    })
    await clan.save()

    await Clan.updateOne({ id: id }, { $push: { members: bossId } })
    clan = await Clan.findOne({ id: id })
    res.json({ clan })
    return
  } catch (e) {
    console.log(e)
    res.status(404).json({ status: 5, message: 'user is not defined' })
  }
}

export default clan
