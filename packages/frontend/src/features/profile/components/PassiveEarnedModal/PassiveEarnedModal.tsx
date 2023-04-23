import React, { FC } from 'react'
import { Modal } from 'components/Modal'

import styles from './PassiveEarnedModal.module.scss'

type Props = {
  onClose: () => void
  isOpen: boolean
}

export const PassiveEarnedModal: FC<Props> = (props) => {
  const { onClose, isOpen } = props

  return (
    <Modal onClose={onClose} isOpen={isOpen} title="Пасивный доход">
      <p className={styles.description}>
        Доход формируется от количества приведенных рефералов, где каждый
        реферал дает +0.001 к пасивному заработку.
      </p>
    </Modal>
  )
}
