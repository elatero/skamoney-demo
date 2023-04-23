import { Router } from 'express'

import adsMoney from '../controllers/adsMoney'
import collectMoney from '../controllers/collectMoney'
import addMoney from '../controllers/addMoney'
import scaming from '../controllers/scaming'

import getGodScammer from '../controllers/getGodScammer'
import setGodScammer from '../controllers/setGodScammer'

import buyDecoration from '../controllers/buyDecoration'
import buyBaff from '../controllers/buyBuff'

import infoTop from '../controllers/infoTop'
import infoUser from '../controllers/infoUser'

import clan from '../controllers/clan'
import joinClan from '../controllers/joinClan'

import setStreet from '../controllers/setStreet'
import getStreet from '../controllers/getStreet'

import user from '../controllers/user'
import deleteUser from '../controllers/deleteUser'

import addGame from '../controllers/games/addGame'
import delGame from '../controllers/games/delGame'
import getGame from '../controllers/games/getGame'
import joinGame from '../controllers/games/joinGame'

const router = Router()

router.post('/user', user)
router.delete('/user', deleteUser)

router.post('/info-user', infoUser)
router.post('/info-top', infoTop)

router.put('/buy-baff', buyBaff)
router.put('/buy-decoration', buyDecoration)

router.post('/clan', clan)
router.put('/join-clan', joinClan)

router.get('/god-scammer', getGodScammer)
router.put('/god-scammer', setGodScammer)

router.post('/street', getStreet)
router.put('/street', setStreet)

router.put('/scamming', scaming)
router.put('/collect-money', collectMoney)
router.put('/add-money', addMoney)
router.put('/ads-money', adsMoney)

router.post('/games/add-game', addGame)
router.delete('/games/del-game', delGame)
router.post('/games/get-game', getGame)
router.put('/games/join-game', joinGame)

export default router
