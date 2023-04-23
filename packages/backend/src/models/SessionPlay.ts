import { getModelForClass, prop } from '@typegoose/typegoose'

class user {
  @prop()
  id!: number
  @prop()
  betMoney!: number
  @prop()
  outcomeBet!: number
}

class SessionPlay {
  @prop({ unique: true })
  public id!: number

  @prop()
  public typeGame!: string

  @prop({ default: Date.now() })
  public endTime!: number

  @prop({
    type: () => [user],
  })
  public players!: user[]

  @prop({ default: 0 })
  public money!: number

  @prop({ default: -1 })
  public winnerOutcome!: number

  @prop({ default: 100 })
  public minBet!: number

  @prop({ default: 1000 })
  public maxBet!: number
}

export default getModelForClass(SessionPlay)
