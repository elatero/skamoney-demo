import React from 'react'

import { TabItem } from '../TabItem'
import { tabs } from './tabs'

import styles from './Tabs.module.scss'

export const Tabs = () => {
  return (
    <nav className={styles.root}>
      {tabs.map((tab) => (
        <TabItem name={tab.name} icon={tab.icon} key={tab.id} />
      ))}
    </nav>
  )
}
