import { getModelForClass, prop } from '@typegoose/typegoose'

class User {
  @prop({ unique: true })
  public vkId!: number

  @prop()
  public firstName!: string

  @prop()
  public lastName!: string

  @prop({ default: 'white' })
  public colorName!: string

  @prop({ type: [String], default: ['white'] })
  public colors!: string[]

  @prop({ default: 0 })
  public usedSmileId!: number

  @prop({ type: [Number], default: [] })
  public smileIds!: number[]

  @prop({ default: 0 })
  public usedFrameId!: number

  @prop({ type: [Number], default: [] })
  public frameIds!: number[]

  @prop({ default: 'https://vk.com/images/camera_100.png' })
  public photoUrl!: string

  @prop({ default: false })
  public player!: boolean

  @prop({ default: 0 })
  public statusId!: number

  @prop({ default: -1 })
  public teamId!: number

  @prop({ default: 'user' })
  public role!: string

  @prop({ default: 0 })
  public money!: number

  @prop({ default: 0 })
  public moneyBox!: number

  @prop({ default: 0 })
  public skamCount!: number

  @prop({ default: 0 })
  public seasonMoney!: number

  @prop({ default: -1 })
  public myReferal!: number

  @prop({ type: [Number], default: [] })
  public referals!: number[]

  @prop({ default: '' })
  public buffType!: string

  @prop({ default: -1 })
  public buffTime!: number

  @prop({ default: Date.now() })
  public lastVisit!: number

  @prop({ type: [Number], default: [] })
  public friends!: number[]
}

export default getModelForClass(User)
