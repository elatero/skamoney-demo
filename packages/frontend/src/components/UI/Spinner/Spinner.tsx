import React from 'react'
import { Image } from 'components/UI/Image'

import Spiner from 'assets/images/spiner.gif'
import styles from './Spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={styles.spiner}>
      <Image src={Spiner} w="3.5rem" h="3.5rem" size="contain" />
    </div>
  )
}
