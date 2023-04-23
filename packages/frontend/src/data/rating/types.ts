export interface MyRating {
  position: number
  firstName: string
  lastName: string
  frame?: string
  emoji?: string
  photoUrl: string
  skams?: number
  countReference?: number
}

interface RatingItem {
  id: string
  position: number
  firstName: string
  lastName: string
  frame?: string
  emoji?: string
  photo: string
  skams?: number
  countReference?: number
}

export interface MyBandRating
  extends Omit<
    MyRating,
    'firstName' | 'lastName' | 'countReference' | 'emoji'
  > {
  name: string
}

interface BandItem
  extends Omit<
    RatingItem,
    'firstName' | 'lastName' | 'countReference' | 'emoji'
  > {
  name: string
}

export type RatingBySkamers = {
  myRating: MyRating
  list: Omit<RatingItem, 'countReference'>[]
}

export type RatingByBalance = {
  myRating: MyRating
  list: Omit<RatingItem, 'countReference'>[]
}

export type RatingByReference = {
  myRating: MyRating
  list: Omit<RatingItem, 'skams'>[]
}

export type RatingByGrops = {
  myBandRating: null | MyBandRating
  clans: BandItem[]
}
