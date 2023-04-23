import { ColorShop, MainPanelNames, UserStatus } from 'constants'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
      API: string
    }
  }

  type LoadingState = 'idle' | 'pending' | 'rejected' | 'resolved'

  type RequestError = {
    service: string
    code: number
    message: string
  }

  type StoreFetchState<T> = {
    fetch: LoadingState
    data: T
    error: RequestError | null
  }

  export type UserStatusType = keyof typeof UserStatus

  export type ProfileData = {
    vkId: number
    role: string
    firstName: string
    lastName: string
    photoUrl: string
    frame?: FrameTypes
    statusEmoji?: EmojiTypes
    setEmoji: string[]
    skams: number
    status: keyof typeof UserStatus
    team?: {
      id: number
      name: string
    }
    positionRating: number
    raise: number
    timerRaise?: number
    skamCount: number
    skamLevel: number
    reference: string
    referals: { _id: string; idVk: number }[]
  }

  type ModalRootTypes =
    | 'security_shop'
    | 'ads_shop'
    | 'emoji_shop'
    | 'money_shop'
    | 'color_shop'
    | 'ramka_shop'
    | 'passiveEarnInfo'
    | 'involveSkamer'
    | 'removeProfile'

  export type MainPanelNameTypes = keyof typeof MainPanelNames

  type ViewsTypes = 'main' | 'achievement' | 'gaps' | 'colors'

  type SecurityActiveTypes = 1 | 2 | 3 | 4

  type AdsBlockActiveTypes = 1 | 2 | 3 | 4 | 5

  export type EmojiMoney =
    | 'eyes_up'
    | 'birthday'
    | 'sad'
    | 'tasty'
    | 'omg'
    | 'super_smile'
    | 'huh'
    | 'oh_no'
    | 'angry'
    | 'smile_demon'

  export type EmojiVote =
    | 'zombie_man'
    | 'zombie_woman'
    | 'princess'
    | 'prince'
    | 'heart'
    | 'black_heart'
    | 'fire'
    | 'pumpkin'
    | 'crown'
    | 'russia'

  export type EmojiTypes = EmojiMoney & EmojiTypes

  export type FrameTypes = 'drago' | 'russia' | 'viking'

  export type MoneyTypes = 1 | 2 | 3 | 4 | 5

  export type ColorTypes =
    | typeof ColorShop[keyof typeof ColorShop]
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10

  export type EchievementType =
    | 'LOVER'
    | 'BIGMAN'
    | 'OBSERVER'
    | 'PROFFESIONAL'
    | 'PRECULATOR'
}

export default global
