import React, { FC } from 'react'
import { Image } from 'components/UI'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './TabItem.module.scss'

type Props = {
  name: string
  icon: string
}

export const TabItem: FC<Props> = (props) => {
  const { icon, name } = props
  const { pathname } = useLocation()

  const path = pathname.split('/')[1]
  const navigate = useNavigate()

  const onChange = () => {
    navigate(`/${name}`)
  }

  return (
    <button
      className={`${styles.root} ${name === path && styles.active}`}
      onClick={onChange}
    >
      <Image w="1.5rem" h="1.5rem" src={icon} size="contain" />
    </button>
  )
}
