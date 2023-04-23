import { getModelForClass, prop } from '@typegoose/typegoose'

// class member {
//   @prop()
//   id!: number
// }

class Clan {
  @prop({ unique: true, required: true })
  public id!: number

  @prop()
  public name!: string

  @prop({ required: true })
  public bossId!: number

  @prop({ default: 0 })
  public money!: number

  @prop({ default: 'https://vk.com/images/camera_100.png' })
  public photoUrl!: string

  @prop({ type: [Number], default: [] })
  public members!: number[]
}

export default getModelForClass(Clan)
