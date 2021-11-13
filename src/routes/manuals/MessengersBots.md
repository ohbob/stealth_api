---
title: Messengers Bots Registration
published: 2020-03-22T21:36:59.459Z
author: Vizitor
summary: Messengers Bots Registration
layout: blog


---

#  Messengers Bots Registration

Stealth connects not to the messengers, but to their bots, and using its for sending/receiving messages. Below shown process of bot registration in different messengers.

After registration, you will receive Token from the bot, which will be used in the stealth to be connected to the bot.


P.S. Token shown only as examples;


### Telegram ###

Just talk to user BotFather ( https://telegram.me/botfather )

/newbot

Answer should be like "Alright, a new bot. How are we going to call it? Please choose a name for your bot."

Write a name of your bot, f.e. VizBot

In few seconds you will receive answer "Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot."

Write an unique id with "bot" at the end.

If selected id already exists, you will receive an answer "Sorry, this username is already taken. Please try something different." until id is unique.

F.E.  Viz402020_Bot

In answer you will receive few strings like "Done! Congratulations on your new bot. You will find it at t.me/Viz402020_Bot. ....." You are interested in line "Use this token to access the HTTP API: 528570440:AAFLNlgz191XQ-dzFco0EqSUaAkpgMbcqyo". That is token, which you must set before connect Telegram in Stealth.


### Viber ###
Registration process going on in browser, not in Viber!

if you haven't registered at partners.viber.com yet - start from 
Если вы еще не регистрировались на partners.viber.com - то начать надо с https://partners.viber.com/register/send , in registration use pnone number with Viber(activation code will be sent to Viber), Next, write received code, write password, finish.


Authorize at https://partners.viber.com. 

On left menu select "Create Bot Account".

Must be filled only fields with stars (*)


Example
* Account Name  - VizBot
* URI - vizbot
* Category - Groups
* Subcategory - Knowledge 
(two last - any, bot will be published never)
* Description- any string
* Language - any
* Location - any
* Email Address - any, no verification letter sending.
* Account Image - bot avatar.

Checkbox "The account contains adult content" - must stay unchecked, "I accept the Terms and Conditions" - check.

Next press "Create"

If you have errors in filling - they will be shown.

After correct filling new page shown with text like

Account created!
This is your private token. Use this token to connect to the Viber Chat API. 
477b54fa22e7d33f-742f555081917396-452754352e4becd4

That is token, which you must set before connect Viber in Stealth.

### Discord ###
Registration process going on in browser, not in Discord !

Authorize at https://discordapp.com/developers/applications. 

Next press button at right side of screen "New Application", in new dialog write app name (its not a bot name!), and press Create.

In left list (menu) press on "Bot". If warning raised about bot publication, just press "Yes, do it".

In new dialog write Bots name (UserName),and thats all, bot created. To copy its token - press on button "Copy" below "Token" line.

To start talking with bot, you should create a server first. In Discord (not in browser) press on plus in round on left menu, than "Create a server".

When new server is created, you shuld join bot to this server. Proceed to info of application, which you are created before, and press button "Copy' under the CLIENT ID.

Next, in browser insert this url:

https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=68608

CLIENTID mst be replaced with your CLIENT ID!

After this, new window will open, select your new server for joining and press OK. Now you can "talk" with your bot on public channel of this server, or in private channel.