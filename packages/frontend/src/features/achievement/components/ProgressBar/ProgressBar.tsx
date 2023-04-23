import React, { FC } from 'react'

import { Image } from 'components/UI'
import { SkamCoin } from 'assets/icons'

import styles from './ProgressBar.module.scss'

type Props = {
  coins: number
  progress: number
  skamCount: number
  skamLevel: number
}

export const ProgressBar: FC<Props> = (props) => {
  const { coins, progress, skamCount, skamLevel } = props

  const transformCoins = coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className={styles.container}>
      <div className={styles.statistic}>
        <span className={styles.statisticTitle}>Вы заскамили:</span>
        <span className={styles.statisticMoney}>{transformCoins}</span>
        <Image w="1rem" h="1rem" src={SkamCoin} size="contain" />
      </div>
      <div className={styles.progressBox}>
        <div className={styles.progressWrapper}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
        <span className={styles.score}>
          {skamCount}/{skamLevel}
        </span>
      </div>
    </div>
  )
}
