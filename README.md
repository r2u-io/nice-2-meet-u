# nice-2-meet-u
Connect teammates for a chat on Slack

### Introduction

This repository is a self hosted *conversation starter* bot for Slack on AWS. Every two weeks, it pairs random teammates for a 15-minute conversation.

While there are free, managed alternatives for companies below 25 employees, bigger teams can lavarage this repository to create a customized People and Culture experience in a remote environment.

### Manual setup

1. Create a [Slack app](https://api.slack.com/apps?new_app=1) for your Workspace, with permissions `channels:history`, `mpim:write`, `chat:write`, `users:read`, and *Install your app*
2. Customize your `config.json` and `src/messages.json` files if you want different configurations than the `nice-2-meet-u` defaults
3. Setup `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `SLACK_API_TOKEN` as [Secrets](./settings/secrets/actions) on this repo so that Github Actions can deploy this service
