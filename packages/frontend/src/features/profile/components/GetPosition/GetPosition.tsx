import React from 'react'
import bridge from '@vkontakte/vk-bridge'
import useSelector from 'hooks/useSelector'
import { shallowJson } from 'utils'
import { VipPosition } from 'components/VipPosition'
import axios from 'axios'
import settings from 'config/settings'
import MetaActions from 'data/meta';


import styles from './GetPosition.module.scss'

export const GetPosition = () => {
  const leadSkamer = useSelector(({ meta }) => meta.data.vipSkamer, shallowJson)

  const _toGodSkammer = async () => {
    const user = await bridge.send('VKWebAppGetUserInfo');

    let tempData = {}

    await axios.put(settings.API+"api/v1/god-scammer", {"id": user.id}).then(r => {

      tempData = { "firstName": user.first_name, "lastName": user.last_name,  "photo": user.photo_100}

      // tempData = {
      //   // firstName: 'Paityn',
      //   // lastName: 'Bator2',
      //   // photo:
      //   //   'https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1',
      //   // price: 1.423,
      // }

      MetaActions.init()
      console.log("PUT /api/v1/god-scammer godScammer", r.data);
      // console.log("tDDDDDDDDD", tempData);

    })


  }

  if (!leadSkamer.firstName) return <div />

  return (
    <div className={styles.root}>
      <VipPosition
          vkId={leadSkamer.vkId}
        photoUrl={leadSkamer.photo}
        firstName={leadSkamer.firstName}
        lastName={leadSkamer.lastName}
        className={styles.container}
      />
      <button className={styles.takePlaceBtn} onClick={_toGodSkammer}>
        {`Занять место Цена ${leadSkamer?.price} Skams`}
      </button>
    </div>
  )
}
