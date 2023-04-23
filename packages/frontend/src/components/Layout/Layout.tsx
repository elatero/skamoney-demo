import React, { FC, ReactNode } from 'react'
import { Tabs } from './components'

import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>{children}</div>
      <Tabs />
    </div>
  )
}

export default Layout
