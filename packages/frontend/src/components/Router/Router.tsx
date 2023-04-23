import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/Layout'

import { Profile } from 'features/profile'
import { Rating } from 'features/rating'
import { Games } from 'features/games'
import { GapsGame } from 'features/games/GapsGame'
import { GapsGame as GameGaps } from 'features/games/GapsGame/Game'
import { ColorsGame as GameColor } from 'features/games/ColorsGame/Game'
import ColorsGame from 'features/games/ColorsGame'
import { Street } from 'features/street'
import { Shop } from 'features/shop'
import { Achievement } from 'features/achievement'

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="rating" element={<Rating />} />
        <Route path="games" element={<Games />} />
        <Route path="games/gaps" element={<GapsGame />} />
        <Route path="games/gaps/:id" element={<GameGaps />} />
        <Route path="games/colors" element={<ColorsGame />} />
        <Route path="games/colors/:id" element={<GameColor />} />
        <Route path="street" element={<Street />} />
        <Route path="shop" element={<Shop />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="*" element={<Navigate to="profile" />} />
      </Routes>
    </Layout>
  )
}

export default Router
