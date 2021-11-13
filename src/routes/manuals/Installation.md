---
title: Installation and configuration
published: 2030-02-21T21:36:59.459Z
author: Vizitor
summary: Install
layout: blog
---

# Installation and Configuration

Installation is simple: just [download](https://stealth.od.ua/) latest Stealth version and unzip it somewhere.

# Configuration

Configuration is a few step process, you need to create profiles for character, shard and client.

You need to open profile editor and configure:

- character profile - login & password, shard profile and shard number and character number for autologin
- shard profile - game server address/ip, port, client version, client profile
- client profile - path to uo\client.exe to launch graphical client with the **Start Client** button

## Open profile editor

![Open_profile_setup.png](/images/Open_profile_setup.png)

## Character setup

![Profile setup.png](/images/profiles.png)

- **Name** - the name for the character profile in the Stealth
- **Login** - game account login
- **Password** - game account password
- **Reconnect time** - delay to automatically reconnect to the shard after the disconnection, in seconds (10 - means 10 seconds)
- **Shard** - a drop-down list of game servers (shards) and **Shards Setup button**.

When you connect to the game server it is usually a list of game servers, and then you select one of them, then you select from playable characters list:

How select shard and character index - Setting the game server and character

- **Ask for me** - to ask
- **Remember my choise** - remember my choice
- **Always select** - select automatically shard and character defined bellow
- **Shard** - serial number of the server, where the first server in the list is 1
- **Char** - serial number of a game character, where the first character in the list is 1

☛ To add a new profile, press the green button in the lower left corner of the Profile Setup.

☛ To delete, click the red minus sign in the lower left corner of the Profile Setup.

☛ To save your changes, click Save.

## Shard setup

![Shard setup.png](/images/Shard_setup.png)

- **Name** - the name for a shard in the Stealth

- **Address** (in the old version - IP) - shard address or ip

- **Port** - shard port

- **Use Proxy** - proxy

- **Proxy IP** - address of the proxy

- **Proxy Port** - the port the proxy server

- **No Auth / With Auth** - does not require authorization / authentication is required

- **Proxy Auth Login and Proxy Auth Password** - the login and password for the proxy server

- **Client version** - specify the version of the client needed to play on the shard (eg 2.0.3 client will be: 2.0.3.0)

- **Encrypted client** - use encryption. Necessary for those servers where data encryption is enabled. Most free servers do not use encrypted client.

- **UO files path **

  \- the directory with the game files (files like map0.mul, tiledata.mul, etc.)

  1. With proper choice of the directory will be displayed: **Status: Path Correct**
2. If not properly selected directory will be displayed: **Status: Path Incorrect**

- **Selected Client** - the client's choice for the shard and **Clients setup button**

- **Enable Razor support** - Some servers accept only clients with attached Razor assistant. This checkbox will enable Razor emulaation in Stealth.

- **Server type** - In common should be "Default" , but some specific shards have items in this list for normal work.

  

☛ To add a shard, click Add

☛ To remove a shard hit the Delete button

☛ To save the settings, click Save

## Client setup

![Client_setup.png](/images/Client_setup.png)

- **Clients** - a list of clients for shards
- **Name** - name of the client in the Stealth
- **Path** - the path to the client
- **Version** - game client version
- **Encrypted client** - If your client uses encryption, you need to put this check, if the encryption is removed, respectively, then it is not necessary, otherwise the client can "fall" or simply do not connect.
- **Change resolution** - resizing the game window (where the character is displayed and the world)(like Razor) allowed values: width(320-1280), height(240-1024)
- **Remove stamina check** - allows passing through other players or NPC
- **Path to MultiClient** - allows you to run multiple copies of the client
- **Use steal.cfg instead login.cfg** - save Stealth local server address to steal.cfg file instead of login.cfg

  

☛ To add a client - click the green cross in the upper right corner

☛ To delete a client, click the red minus sign in the right corner

☛ The arrows in the upper right corner of the move to client list of customers up and down respectively

## You are done

Now you can select profile and click **Connect** button to login to the game.