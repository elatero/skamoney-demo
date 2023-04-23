export type UserData = {
  vkId: number
  firstName: string
  lastName: string
  photoUrl: string
  frame?: string // рамка пользователя
  statusEmoji?: string // смайлик пользователя
  setEmoji: string[] // доступные смайлики
  skams: number // coins
  status?: string // статус пользователя
  team?: {
    id: number
    name: string
  }
  raise: number // собрано в копилке
  timerRaise: number | null // miliseconds
  skamCount: number
  skamLevel: number
  role: string
  reference: string
  referals: { _id: string; idVk: number }[]
}

export type UserModel = {
  vkId: number
  firstName: string
  lastName: string
  photoUrl: string
  frame?: string // рамка пользователя
  statusEmoji?: string // смайлик пользователя
  setEmoji: string[] // доступные смайлики
  skams: number // coins
  status?: string // статус пользователя
  team?: {
    id: number
    name: string
  }
  raise: number // собрано в копилке
  timerRaise: number | null // miliseconds
  skamCount: number
  role: string
  referals: { _id: string; idVk: number }[]
}
