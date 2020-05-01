# Twilio Sample App Template

[![Actions Status](https://github.com/twilio-labs/sample-template-nodejs/workflows/Node%20CI/badge.svg)](https://github.com/twilio-labs/sample-appointment-reminders/actions)

## Get Started

Send the following text message on Twlio's number [+1 (415) 523-8886] or [click here](https://api.whatsapp.com/send?phone=14155238886&text=join%20decide-wish) to start the bot.

```join decide-wish```

## About

Whatster is a User-Friendly WhatsApp Chat Bot created using Twilio's Whatsapp API. This bot enables you to do image-recognition, send email to any receiver with or without an attachment, sends you jokes, and most importantly saves any message or media that you send (or forward) to it, in a database which is accessible in [WhatsTer](https://whatsterv1.web.app/) website.



### How it works

When you send a message to the bot, it checks for a command. 

Then follow instructions received via WhatsApp text - 

```Type <login> to log into Whatster to read messages and media sent in this chat.```

```Type <mail> to send an email to any email address of your choice with or without an attatchment.```

```Type <clarifai> to use AI to recognize the contents of a sent image.```

```Type <joke> to get a randomly generated joke.```


_By default any other message or media sent to the bot is saved in the user's specific account database._


If you login to the [WhatsTer](https://whatsterv1.web.app/) website, you can see yours saved messages and media from your chat with the bot.
You can even delete the messages and media that you don't want in that website.

_Works in quite a sync between your WhatsApp account and the WhatsTer account_


## Features

- Image Recognition
- Email
- Jokes
- Saving Messages and Media to your account
- Built using **React**

## How to use it

1. Create a copy using [GitHub's repository template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) functionality
2. Update the [`README.md`](README.md), [`package.json`](package.json) and [`app.json`](app.json) with the respective values.
3. Build your app as necessary while making sure the tests pass.
4. Publish your app to GitHub

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)
- A Clarifai Api Key - [Clarifai](https://www.clarifai.com/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your
own appointment reminder application. Before we begin, we need to collect
all the config values we need to run the application:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development


That's it!

### Cloud deployment

I have deployed my webhooks and the server api for the webapp to Heroku and client webapp to Firebase (for the  react app).

| Service                           |                                                                                                                                                                                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Heroku](https://www.heroku.com/) | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)                                                                                                                                       |


## Resources

- [GitHub's repository template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) functionality

## Contributing

My project is open source and welcomes contributions.

[Visit the project on GitHub](https://github.com/aditya-mitra/whatster)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
