import React, { FC, ReactNode } from 'react'
import { Image } from 'components/UI'

import { Close } from 'assets/icons'
import styles from './Modal.module.scss'

type Props = {
  onClose: () => void
  children: ReactNode
  title: string
  isOpen: boolean
}

export const Modal: FC<Props> = (props) => {
  const { onClose, children, title, isOpen } = props

  return (
    <div className={`${styles.root} ${isOpen && styles.open}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <Image w="1.5rem" h="1.5rem" src={Close} size="contain" />
          </button>
        </header>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  )
}
