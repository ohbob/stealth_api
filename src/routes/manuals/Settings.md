---
title: Settings window
published: 2030-01-21T21:36:59.459Z
author: Vizitor
summary: Install
layout: blog


---

# Settings window

Stealth settings window is opened by pressing a cog in the upper right corner of the main Stealth window:

![Settings1.jpg](/images/Settings1.jpg)

## Common settings

![settings_common.png](/images/settings_common.png)

**Items:**

- **Use Art.mul** - to display images of objects on the World tab
- **Enable Map** - Enable Map drawing (Map tab)
- **Messages from Mover in SysJournal** - display messages from scripting movement functions of the character
- **Minimize to tray** - Enables hiding app from Taskbar, app can be opened by tray icon click
- **Always On Top** - Keep Stealth always behind another windows
- **CharItem Height** group - you can select height of Char items in CharsList (left side of Stealth window) - Normal or small
- **Tray Icon** group - You can change Stealth default tray icon to another

- ** Check update** button - Manual update check (by default it checking once per day when Stealth launching)
- **Hide stealth** - to hide the icon in the system tray (shown again be pressing the key combination Ctrl + Alt + Shift + S)

## Journal settings



![settings_journal.png](/images/settings_journal.png)

**Items:**

- **Show Cliloc text in journal** - display text from a file cliloc. If disabled - messages will be shown in format "cliloc# XXXXXXXX, where XXXXXXXX - Cliloc ID
- **Colors in journal** - If enabled - incoming colored lines from server will be painted with color.
- **Save journal background color** - if enabled, then once default background color changed - this changes will be saved.
- **Show in Journal:** group - select additional items, which will be printed to journal


## Server settings

The virtual Stealth server settings. This server allows you to connect with UO graphic Client to the Stealth

![settings_server.png](/images/settings_server.png)

**Items:**

- **Port** - port for the server (You can start client yourself and connect to this port)
- **Log Client-Stealth packets** - Save all client-Stealth communication
- **Send Extended Messages To Client** - Send to client messagesgs like "Target\Menu\Gump reply sent from stealth"
- **Allow to connect only from LocalHost** - allow the connection to the server only with your PC. If disabled - Logiin&Password must be set for remote connection. If Enabled - login and password can be ANY.


- **Server modes:**

  - Observe mode   

    \+ client window does not receives all the targets, menus and gumps

  - Setup mode  

    \- Setup Mode options are available:

      + ***Moving ON*** - to allow movement from client
      + ***Gumps & Menus ON*** - enable menu sending to client
      + ***Targets ON*** - enable targets sending to client
      + ***Other packets ON*** - All other packets

  - Full mode - client window receives all targets, menus, gumps coming in stealth from the game server



- **Client Dll Settings** group - group of settings, affected only for client running from stealth and client.dll injected successfully.
  - **Use DLL** - switch on to enable assistant and its features.
  - **Fast Login** - enable fast login (through login shard and chars screens)
  - **Show Dll Window** - show assistant window.
  - **Draw custom caption** - enable draw of custom text and icons in client caption. If text in caption became broken all the time - swith it off.
  - **Fix caption in client** - Fix invalid shard&char names in client caption. Usually on.


## Logs Settings

![settings_logs.png](/images/settings_logs.png)

**Items:**

- **Save packets log** - write Stealth-server network packets to a file with file %profilename%_packets.log in logs folder.
- **Save debug log** - write to a file all debug information

- **Logs Path** - press the button to select logs folder (or enter it by keyboard)
- **Log compressed packets** - include in packet logs compressed (raw) packets. Should be enabled in debug purposes only.
- **Packetlog filter** group - packets filter list, for ignore selected packets. After modify - press ** Apply filter ** !



## Script Engine Settings

![settings_script_engine.png](/images/settings_script_engine.png)

**Items:**
- **PS Include&&Uses Path** - Folder, contains units&includes for PS (if differ from default folders)
- **Python Version** group - Python compiler selection from all versions, installed on computer. If - ***User Selected*** - Python will be selected when py script started from Stealth.

