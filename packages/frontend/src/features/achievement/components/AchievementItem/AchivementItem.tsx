import React, { FC } from 'react'

import styles from './AchievementItem.module.scss'

type Props = {
  status: string
  title: string
  description: string
  borderColor: string
  backgroundColor: string
}

export const AchievementItem: FC<Props> = (props) => {
  const { status, title, description, borderColor, backgroundColor } = props

  return (
    <div className={styles.container}>
      <span className={styles.status} style={{ borderColor, backgroundColor }}>
        {status}
      </span>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
