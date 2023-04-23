import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { SkamCoin, Info } from 'assets/icons'
import { OneFrame } from 'assets/frames'
import { Image } from 'components/UI'

import styles from './About.module.scss'
import { UserStatus } from 'constants'

type Props = {
  profile: ProfileData
  onShow: () => void
}

const nameStatus = {
  mammoth: 'Мамонт',
  lover: 'Любитель',
  bigMan: 'Громила',
  observer: 'Наблюдатель',
  professional: 'Профессионал',
  preculator: 'Расхититель',
}

const nameStatusId = ['Мамонт', 'Любитель', 'Громила', 'Наблюдатель', 'Профессионал', 'Расхититель' ]

export const About: FC<Props> = (props) => {
  const { profile, onShow } = props

  const navigate = useNavigate()

  const transformCoins = profile.skams
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handleAchievement = () => {
    navigate('/achievement')
  }

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <div className={styles.avatarBox}>
            <img className={styles.avatar} src={profile.photoUrl} />
            <img className={styles.avatarFrame} src={OneFrame} />
          </div>
          <div className={styles.infoContainer}>
            {profile.status && (
              <button
                className={styles.userStatus}
                onClick={handleAchievement}
                style={UserStatus[profile.status]}
              >
                {nameStatusId[profile.statusId]}
              </button>
            )}
            <div className={styles.userInfo}>
              <span className={styles.name}>
                {`${profile.firstName} ${profile.lastName}`}
              </span>
              <div className={styles.coinsBox}>
                <p className={styles.coins}>{transformCoins}</p>
                <Image w="1rem" h="1rem" src={SkamCoin} size="contain" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.moreInfo}>
          <div className={styles.infoStatistic}>
            <span className={styles.infoTitle}>Пас.доход: </span>
            <span className={styles.infoProperty}>
              {profile.referals.length} Skam/c
            </span>
            <button onClick={onShow} className={styles.infoBtn}>
              <Image w="0.75rem" h="0.75rem" src={Info} size="contain" />
            </button>
          </div>
          {profile.team.id && (
            <div className={styles.infoStatistic}>
              <span className={styles.infoTitle}>Играет за: </span>
              <a>
                <span className={styles.infoTeam}>{profile.team.name}</span>
              </a>
            </div>
          )}
          {/* <div className={styles.infoStatistic}>
            <span className={styles.infoTitle}>Место в рейтинге: </span>
            <span className={styles.infoProperty}>
              {profile.positionRating}+
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
