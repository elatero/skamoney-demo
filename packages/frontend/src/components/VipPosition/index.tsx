import React, { FC } from 'react'

import styles from './VipPosition.module.scss'

type Props = {
  photoUrl: string
  firstName: string
  lastName: string
  className?: string
}

export const VipPosition: FC<Props> = (props) => {
  const { photoUrl, firstName, lastName, className, vkId } = props

  return (
  <a href={vkId && `https://vk.com/id${vkId}`} target="_blank">
    <div className={`${styles.container} ${className}`}>
      <img src={photoUrl} className={styles.avatar} />
      <div className={styles.boxInfo}>
        <p className={styles.title}>Божественный скаммер</p>
        <p className={styles.name}>{`${firstName} ${lastName}`}</p>
      </div>
    </div>
  </a>
  )
}
