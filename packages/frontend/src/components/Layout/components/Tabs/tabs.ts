import { Cart, Cup, Dice, Location, Profile } from 'assets/icons'

type Tabs = {
  id: string
  name: MainPanelNameTypes
  icon: string
}

export const tabs: Tabs[] = [
  {
    id: '1',
    name: 'rating',
    icon: Cup,
  },
  {
    id: '2',
    name: 'games',
    icon: Dice,
  },
  {
    id: '3',
    name: 'profile',
    icon: Profile,
  },
  {
    id: '4',
    name: 'street',
    icon: Location,
  },
  {
    id: '5',
    name: 'shop',
    icon: Cart,
  },
]
