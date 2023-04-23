/** @jsxImportSource @emotion/react */
import React, { FC } from 'react'

type Props = {
  w: string
  h: string
  src: string
  size?: 'cover' | 'contain'
  className?: string
}

export const Image: FC<Props> = (props) => {
  const { w, h, src, size, className } = props

  return (
    <div
      css={{
        width: w,
        height: h,
        backgroundImage: `url('${src}')`,
        backgroundSize: size,
        backgroundRepeat: 'no-repeat',
      }}
      className={className}
    />
  )
}
