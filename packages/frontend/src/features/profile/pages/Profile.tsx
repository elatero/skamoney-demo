import React, { useState, useEffect } from 'react'
import { Header } from 'components/Header'
import ProfileActions from 'data/profile';
import MetaActions from 'data/meta';
import useSelector from 'hooks/useSelector'
import { shallowJson } from 'utils'
import {
  About,
  SaveMoney,
  GetPosition,
  RemoveProfile,
  PassiveEarnedModal,
  InvolveSkamModal,
} from '../components'
import { Image, Spinner, ScrollBar } from 'components/UI'
import { People, Bell, Basket, Reload } from 'assets/icons'

import styles from './Profile.module.scss'

const Profile = () => {
  const [isUpdate, setUpdate] = useState(false)
  const [isRemoveModal, setRemoveModal] = useState(false)
  const [isPassiveEarned, setPassiveEarned] = useState(false)
  const [isInvolveSkam, setInvolveSkam] = useState(false)

  const { profile } = useSelector(
    ({ profile }) => ({
      profile: profile.data,
    }),
    shallowJson,
  )

  console.log(profile);


  const handleInviteSkamer = () => {
    setInvolveSkam(true)
  }

  const handleRemoveProfile = () => {
    if (!isRemoveModal) {
      setRemoveModal(true)
    }
  }

  const handleUpdate = async () => {
    setUpdate(true)

    const result = await ProfileActions.init()

    if (result) {
      setTimeout(() => setUpdate(false), 1000)
    }
  }

  const handleCloseRemove = () => {
    setRemoveModal(false)
  }

  const handleClosePassiveEarned = () => {
    setPassiveEarned(false)
  }

  const handleCloseInvolve = () => {
    setInvolveSkam(false)
  }

  useEffect(() => {
    ProfileActions.init();
    MetaActions.init();
    console.log("INIT");
  }, [])

  return (
    <div className={styles.root}>
      <Header title="Ваш профиль" onClick={handleUpdate}>
        <img src={Reload} className={isUpdate ? styles.refresh : undefined} />
      </Header>
      <ScrollBar>
        {!profile ? (
          <Spinner />
        ) : (
          <>
            {profile && (
              <About onShow={() => setPassiveEarned(true)} profile={profile} />
            )}
            {profile && (
              <SaveMoney
                disabled={isInvolveSkam || isRemoveModal}
                profile={profile}
              />
            )}
            <button
              className={styles.invetedSkammerBtn}
              onClick={handleInviteSkamer}
              disabled={isRemoveModal || isPassiveEarned}
            >
              <Image
                className={styles.invetedSkammerImg}
                w="1.5rem"
                h="1.5rem"
                src={People}
                size="contain"
              />
              Привлечь Скаммеров
            </button>
            <GetPosition />
            {/*<button className={styles.noticeBtn}>
              <div className={styles.noticeWrapper}>
                <Image w="1.5rem" h="1.5rem" src={Bell} size="contain" />
                <span className={styles.noticeText}>
                  Подписаться&nbsp;на&nbsp;уведомления
                  (&nbsp;+0.001&nbsp;к&nbsp;пассивному&nbsp;доходу&nbsp;)
                </span>
              </div>
            </button>*/}
            <button
              className={styles.removeBtn}
              onClick={handleRemoveProfile}
              disabled={isInvolveSkam || isPassiveEarned}
            >
              <Image w="1.5rem" h="1.5rem" src={Basket} size="contain" />
              <span className={styles.removeText}>Удалить профиль</span>
            </button>
          </>
        )}
      </ScrollBar>
      <RemoveProfile isOpen={isRemoveModal} onClose={handleCloseRemove} />
      <PassiveEarnedModal
        isOpen={isPassiveEarned}
        onClose={handleClosePassiveEarned}
      />
      <InvolveSkamModal isOpen={isInvolveSkam} onClose={handleCloseInvolve} />
    </div>
  )
}

export default Profile
