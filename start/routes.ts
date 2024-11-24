/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'
import { DateTime } from 'luxon'

router.get('/', async () => {
  const user = await User.create({})

  console.log('user', user)

  // trying to update any attribute fails
  user.createdAt = DateTime.now()
  await user.save()
})
