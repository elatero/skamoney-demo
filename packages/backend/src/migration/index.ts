import mongoose from 'mongoose'
import axios from 'axios'

import settings from '../config/settings'
import User from '../models/User'

const { dbURL } = settings

function random(min: number, max: number) {
  const result = min + max * Math.random()
  return parseInt(result.toString())
}

const migration = async (n: number) => {
  try {
    await mongoose.connect(dbURL)

    for (let i = 0; i < n; i++) {
      const id = random(200000000, 300000000)
      const user = (
        await axios.post(
          `https://api.vk.com/method/users.get?user_ids=${id}&fields=photo_100&access_token=963802b26e5c5dae4a6807a5313e749bb70381711721d172427706204398b0c6af8b4a05de28ee842450b&v=5.131`,
        )
      ).data.response[0]

      const userReg = new User({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl,
        money: random(10, 10000),
      })

      await userReg.save()
    }
  } catch (error) {
    console.log(error)
  }
}

migration(10)
