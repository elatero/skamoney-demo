import React, { FC } from 'react'
import useSelector from 'hooks/useSelector'
import { Modal } from 'components/Modal'

import bridge from '@vkontakte/vk-bridge';

import { Copy, Share, Star } from 'assets/icons'
import styles from './InvolveSkam.module.scss'
import { Image } from 'components/UI'

type Props = {
  onClose: () => void
  isOpen: boolean
}

export const InvolveSkamModal: FC<Props> = (props) => {
  const { onClose, isOpen } = props

  const { reference } = useSelector(({ profile }) => ({
    reference: profile.data?.reference,
  }))

  const handleCopyReference = () => {
    navigator.clipboard
      .writeText(reference || '')
      .then(() => {
        alert('You success copy link!')
      })
      .catch((err) => console.log(err))
  }

  const _shareRef = () => {
    bridge.send("VKWebAppShare", {"link": reference})
  }

  const historiesUrl = [
    'https://psv4.userapi.com/c235131/u291554190/docs/d19/8affec22e83e/Frame_48.png?extra=8Mj37PaPhiYdlCehQJESPiFUc8hLQhhDZ036I9wGS8Ry7F3c2TBARSS3c_lWAJQUvCy4d7Fjnj4m0N_oYVlOHtpWrn49ucI_9aUwCXhL7WTzmuht7cfub54K0X7KpFtVlE6AIARBLbaQEmI6jlDqic8',
    'https://psv4.userapi.com/c235131/u291554190/docs/d43/576ec76558ba/Frame_47.png?extra=GSjyleHjKKXEhWHpRRBy56if1pAEjmHcBTVzi8AORqPV0i68-EKqDG4BzjS9qYepACk_e9kwnCI_5XptqmankpxSX-VxmWYDV89NN6iQ3XmgULLo-QTHiNCGvKDMP35j7Kdc-2kaIPH109FbxB7rTMM',
  ]

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const _shareRefFromHistory = () => {
    const historyData = { 
              "background_type": "image",
              "url": historiesUrl[getRandomInt(0, 2)],
              "locked": true,
              "attachment" : {"url": reference, "type": "url", "text": "view"},
            }

    bridge.send("VKWebAppShowStoryBox", historyData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Привлечь скаммеров">
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <label htmlFor="reference" className={styles.inputLabel}>
            Ваша ссылка
          </label>
          <div className={styles.inputBox}>
            <input
              readOnly
              id="reference"
              value={reference}
              className={styles.input}
            />
            <button className={styles.copyBtn} onClick={handleCopyReference}>
              <Image w="1.5rem" h="1.5rem" src={Copy} size="contain" />
            </button>
          </div>
        </div>
        <p className={styles.description}>
          Делитесь ссылкой с друзьями; если они перейдут по ней то они
          становяться Вашими рефералами, принося вам 0.001 к пасивному
          заработку.
        </p>
        <button className={styles.shareBtn} onClick={_shareRef}>
          <Image
            w="1.5rem"
            h="1.5rem"
            src={Share}
            size="contain"
            className={styles.shareIcon}
          />
          Поделиться ссылкой
        </button>
        <button className={styles.starBtn} onClick={_shareRefFromHistory}>
          <Image
            w="1.5rem"
            h="1.5rem"
            src={Star}
            size="contain"
            className={styles.starIcon}
          />
          Поделиться в истории
        </button>
      </div>
    </Modal>
  )
}
