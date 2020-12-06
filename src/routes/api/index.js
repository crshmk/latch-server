import express from 'express'

import regex from './regex'
import test from './test'


let router = express.Router()

router.use(/^\/regex\/?$/i, regex)

router.use('/test', test)

module.exports = router
