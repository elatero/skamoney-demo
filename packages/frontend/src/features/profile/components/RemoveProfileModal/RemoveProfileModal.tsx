import React, { FC } from 'react'
import ProfileActions from 'data/profile'

import { Basket } from 'assets/icons'
import { Image } from 'components/UI'
import { Modal } from 'components/Modal'

import styles from './RemoveProfileModal.module.scss'

type Props = {
  onClose: () => void
  isOpen: boolean
}

export const RemoveProfile: FC<Props> = (props) => {
  const { onClose, isOpen } = props

  const handleRemoveProfile = () => {
    ProfileActions.removeProfile()
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} title="Удаление профиля">
      <p className={styles.description}>
        Если вы удалите профиль, то не сможете отменить это действие. Вы
        потеряете все достижения и купленный контент, а также материалы,
        которыми управляли. Действительно ли Вы этого хотите?
      </p>
      <button className={styles.removeBtn} onClick={handleRemoveProfile}>
        <Image w="1.5rem" h="1.5rem" src={Basket} size="contain" />
        <span className={styles.removeText}>Да, удалить профиль!</span>
      </button>
      <button className={styles.cancelBtn} onClick={onClose}>
        Отменить
      </button>
    </Modal>
  )
}
