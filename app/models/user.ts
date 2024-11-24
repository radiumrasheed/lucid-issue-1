import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class User extends BaseModel {
  static readonly selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(user: User) {
    user.userId = randomUUID()
  }

  @column({ isPrimary: true })
  declare userId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
