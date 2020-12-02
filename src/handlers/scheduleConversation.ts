import config from '../config'
import { WebClient } from '@slack/web-api'
import { APIGatewayEvent } from 'aws-lambda'
import { OK } from '../services/http'
import database, { User } from '../database'
import messages from '../messages.json'
import { createPairs } from '../services/pairs'

interface Conversation {
  ok: boolean
  channel: {
    id: string
  }
}

async function scheduleConversation (web: WebClient, pair: User[]) {
  const conversation = await web.conversations.open({
    users: pair.map(user => user.id).join(',')
  }) as unknown as Conversation

  return web.chat.postMessage({
    channel: conversation.channel.id,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: messages.hello
        }
      }
    ],
    text: '',
    as_user: true
  })
}

async function run (event: APIGatewayEvent) {
  const { queryStringParameters } = event

  console.log(queryStringParameters)

  const web = new WebClient(config.slack.token)

  const users = await database.Users.get()
  const pairs = createPairs(users)

  await Promise.all(
    pairs
      .map(async pair => await scheduleConversation(web, pair))
  )

  return OK()
}

module.exports = {
  run
}
