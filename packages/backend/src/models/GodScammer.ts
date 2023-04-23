import { getModelForClass, prop } from '@typegoose/typegoose'

class GodScammer {
  @prop({ unique: true })
  public vkId!: number

  @prop()
  public firstName!: string

  @prop()
  public lastName!: string

  @prop({ default: 'https://vk.com/images/camera_100.png' })
  public photoUrl!: string

  @prop({ default: true })
  public blocked!: boolean

  @prop({ default: Date.now() })
  public startBlocked!: number

  @prop({ default: 100 })
  public price!: number
}

export default getModelForClass(GodScammer)
