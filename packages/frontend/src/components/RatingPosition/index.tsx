import React, { FC } from 'react'

import { Image } from 'components/UI'
import { OneFrame, TwoFrame, TreeFrame } from 'assets/frames'
import { SkamCoin, SkamCoinWhite, Referals } from 'assets/icons'

import styles from './RatingPosition.module.scss'

type Props = {
  photoUrl: string
  position: number
  emoji?: string
  firstName: string
  lastName: string
  frame?: number
  coins: number
  isBalance?: boolean
  isReferals?: boolean
}

const Frames = [OneFrame, TwoFrame, TreeFrame]

export const RatingPosition: FC<Props> = (props) => {
  const {
    photoUrl,
    emoji,
    firstName,
    lastName,
    coins,
    frame,
    isBalance,
    isReferals,
    position,
    urlHref
  } = props

  const points = coins?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
  <a href={urlHref} target="_blank">
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img className={styles.avatarImg} src={photoUrl} />
          <span className={styles.position}>{position}</span>
          {frame && (
            <Image
              w="3rem"
              h="3rem"
              src={Frames[frame - 1]}
              size="contain"
              className={styles.frame}
            />
          )}
        </div>
        <div>
          <p className={styles.name}>
            <span className={styles.emoji}>{emoji}</span>
            <span className={styles.firstName}>{firstName}</span>
            <span className={styles.lastName}>{lastName}</span>
          </p>
          {!isReferals && (
            <div className={styles.points}>
              {points}
              <Image
                w="1rem"
                h="1rem"
                src={SkamCoin}
                size="contain"
                className={styles.money}
              />
            </div>
          )}
          {isReferals && (
            <div className={styles.points}>
              {points}
              <Image
                w="1rem"
                h="1rem"
                src={Referals}
                size="contain"
                className={styles.money}
              />
            </div>
          )}
        </div>
      </div>
      {isBalance && (
        <button className={styles.coinBtn}>
          <Image w="1.5rem" h="1.5rem" src={SkamCoinWhite} size="contain" />
        </button>
      )}
    </div>
  </a>
  )
}
