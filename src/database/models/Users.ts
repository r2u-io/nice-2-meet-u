import config from '../../config'
import { WebClient } from '@slack/web-api'

export interface User {
  id: string
  name: string
}

/* eslint-disable camelcase */
interface SlackUserAPI {
  id: string
  deleted: boolean
  is_bot: boolean
  is_restricted: boolean
  real_name: string
  profile: {
    display_name?: string
  }
}
/* eslint-enable camelcase */
const SLACKBOT_USER_ID = 'USLACKBOT'

class Users {
  users: User[] = []

  async get (): Promise<User[]> {
    if (this.users.length) return Promise.resolve(this.users)

    const web = new WebClient(config.slack.token)
    const { members } = (await web.users.list()) as unknown as {members: SlackUserAPI[]}

    this.users = members
      .filter(member => !member.deleted)
      .filter(member => !member.is_bot)
      .filter(member => !member.is_restricted)
      .filter(member => member.id !== SLACKBOT_USER_ID)
      .map(user => ({ id: user.id, name: user.profile.display_name || user.real_name }))

    return Promise.resolve(this.users)
  }
}

export default new Users()
