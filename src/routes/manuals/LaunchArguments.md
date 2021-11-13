---
title: Launch Arguments
published: 2020-03-22T21:36:59.459Z
author: Vizitor
summary: Events info
layout: blog
---

# Launch Arguments

Stealth can start with couple of cmd (command line) arguments.File format: Any amount of lines with format %Profile_name%; connect;\ScriptName.sc; start

All arguments can be with prefix / or without it. All arguments separated by space.


### List of arguments: ###

* chars=XXX : Load set of chars from file with filename XXX from Stealth folder. File format is 

* config=XXX : Load set of chars from config file with filename XXX from Stealth folder. Config can be saved from Stealth (top of Chars list)

* icon=XXX : Set Stealth tray icon to icon from file XXX (format must be ico)

* checktray : Developers option, clear tray from icons-ghosts (left when stealth terminated incorrectly, f.e. application killed by task manager)

* starthidden : Stealth will start hidden to Windows tray. Updates autocheck on Stealth start also disabled.

All other arguments like "fw" or "oldabyss" deprecated and moved to "Shard Type" list in Shard settings window.



<br>

Sample:

`
Stealth.exe /starthidden /config=miners
`

