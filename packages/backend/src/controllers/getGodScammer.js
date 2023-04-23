import GodScammer from '../models/GodScammer'

const getGodScammer = async (req, res) => {
  try {
    let godScammer = await GodScammer.findOne({})

    if (Date.now() - godScammer?.startBlocked >= 600_000) {
      await GodScammer.updateOne({ vkId: godScammer?.vkId }, { blocked: false })
    }

    godScammer = await GodScammer.findOne()
    res.json({ godScammer })
  } catch (e) {
    console.log(e)
    res.status(404).json({ status: 4, message: 'error in database' })
  }
}

export default getGodScammer
