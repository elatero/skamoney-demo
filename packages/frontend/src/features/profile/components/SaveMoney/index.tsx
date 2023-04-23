import { ProfileStore } from 'data/store'
import React, { FC, useEffect, useState } from 'react'
import { SkamCoin, SkamCoinWhite } from 'assets/icons'
import { Image } from 'components/UI'
import axios from 'axios'
import settings from 'config/settings'
import bridge from '@vkontakte/vk-bridge'


import styles from './SaveMoney.module.scss'

type Props = {
  profile: ProfileData
  disabled: boolean
}

export const SaveMoney: FC<Props> = (props) => {
  const { profile, disabled } = props

  const calculateTimeLeft = () => {
    if (!profile.timerRaise) {
      return null
    }

    const dateStart = new Date().getTime()
    const dateEnd = profile.timerRaise

    const restTime = dateEnd - dateStart

    if (restTime <= 0) {
      return null
    }

    const hours = Math.floor((restTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((restTime / (1000 * 60)) % 60)

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    if (!timeLeft) {
      clearInterval(timer)
    }

    return () => clearTimeout(timer)
  })

  const handleGetMoney = () => {
    setTimeLeft(calculateTimeLeft());
    _CollectMoney();
  }

  const _AdsMoney = () => {
    bridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"})
    .then(async data => {
      
      console.log(data.result);
      const user = await bridge.send('VKWebAppGetUserInfo');

      // bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
      // .then(async data => {
        console.log(data.result);

        await axios.put(settings.API+"api/v1/ads-money", {
          "id": user.id 
        }).then(async r => {
          ProfileStore.userInfoResolve({...profile, skams: r.data.user.money})

        })

      // })
      // .catch(error => console.log(error));

    })
    .catch(error => console.log(error));


  }

  const _CollectMoney = () => {
    bridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"})
    .then(async data => {
      
      console.log(data.result);
      const user = await bridge.send('VKWebAppGetUserInfo');

      // bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
      // .then(async data => {
        console.log(data.result);

        await axios.put(settings.API+"api/v1/collect-money", {
          "id": user.id 
        }).then(async r => {
          ProfileStore.userInfoResolve({...profile, skams: r.data.user.money, timerRaise: r.data.user.lastVisit})

        })

      // })
      // .catch(error => console.log(error));

    })
    .catch(error => console.log(error));


  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.moneybox}>
          <span className={styles.name}>Копилка:</span>
          <span className={styles.count}>{profile.raise}</span>
          <Image w="1rem" h="1rem" src={SkamCoin} size="contain" />
        </div>
        <button
          className={styles.raiseBtn}
          onClick={handleGetMoney}
          disabled={!!timeLeft || disabled}
        >
          Собрать{' '}
          {timeLeft && (
            <span
              className={styles.timer}
            >{`${timeLeft.hours} : ${timeLeft.minutes}`}</span>
          )}
        </button>
      </div>
      <button className={styles.earnedBtn} onClick={_AdsMoney}>
        <Image
          w="1.5rem"
          h="1.5rem"
          src={SkamCoinWhite}
          size="contain"
          className={styles.coinWhite}
        />
        Заработать
      </button>
    </div>
  )
}
