import React, { FC, ReactNode, CSSProperties } from 'react'

import styles from './ScrollBar.module.scss'

type Props = {
  children: ReactNode
  style?: CSSProperties
}

export const ScrollBar: FC<Props> = (props) => {
  const { children, style } = props

  return (
    <div style={style} className={styles.root}>
      {children}
    </div>
  )
}
