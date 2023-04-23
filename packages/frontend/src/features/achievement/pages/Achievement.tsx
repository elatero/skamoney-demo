import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from 'components/Header'
import useSelector from 'hooks/useSelector'
import { shallowJson } from 'utils'
import { ProgressBar, AchievementItem } from '../components'
import { achievements } from './achivements'

import { ScrollBar } from 'components/UI'
import { ArrowLeft } from 'assets/icons'
import styles from './Achievement.module.scss'

const Achievement = () => {
  const navigate = useNavigate()
  const profile = useSelector(({ profile }) => profile.data, shallowJson)

  const onBack = () => {
    navigate('/profile')
  }

  return (
    <div className={styles.root}>
      <Header title="Достижения" onClick={onBack}>
        <img src={ArrowLeft} className={styles.back} />
      </Header>
      <ScrollBar>
        {profile && (
          <>
            <ProgressBar
              coins={profile.skams}
              progress={(profile.skamCount * 100) / profile.skamLevel}
              skamCount={profile.skamCount}
              skamLevel={profile.skamLevel}
            />
            <div className={styles.achievementList}>
              {achievements.map((item) => (
                <AchievementItem
                  status={item.status}
                  title={item.title}
                  description={item.descripion}
                  borderColor={item.borderColor}
                  backgroundColor={item.backgroundColor}
                  key={item.id}
                />
              ))}
            </div>
          </>
        )}
      </ScrollBar>
    </div>
  )
}

export default Achievement
