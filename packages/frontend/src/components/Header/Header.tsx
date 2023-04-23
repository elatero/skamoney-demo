import React, { FC, ReactNode } from 'react'

import styles from './Header.module.scss'

type Props = {
  children: ReactNode
  title: string
  className?: string
  onClick: () => void
}

export const Header: FC<Props> = (props) => {
  const { children, title, className, onClick } = props

  return (
    <header className={`${styles.root} ${className}`}>
      <button className={styles.btn} onClick={onClick}>
        {children}
      </button>
      <div className={styles.title}>{title}</div>
    </header>
  )
}
