import { Router } from 'express'

import admin from './Admin'
import student from './Student'
import warden from './Warden'

const router = new Router()

router.use('/admin', admin)
router.use('/student',student)
router.use('/warden',warden)


export default router