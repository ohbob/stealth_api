---
title: IRC
published: 2020-03-22T21:36:59.459Z
author: Vizitor
summary: IRC
layout: blog


---

#  Work with IRC

In Stealth 7.2.0 added IRC protocol support.

Abilities:
* Private message sending
* Channel joining (included channel with password), send messages to channel.
* Receiving messages from channel\from private messages.  
* "Raw" text sending - you can use any irc protocol commands. 

Nick must be set before start connect to server, otherwise some server can drop your connection!

IRC Event - IrcMsgHandler, one param - String.


Script example:

```pascal
  program test;

  procedure IrcMsgHandler(Msg : String);
  begin
    AddToJournal('IrcMsg: "' + Msg + '"');
  end; 

  begin 
  if not IRCConnected then
    begin        
      IRCSetNickName('Vizzz');
      IRCConnect('irc.quakenet.org',6667);
      while not IRCConnected do
        wait(300);
    end;   
    if IRCConnected then
      IRCSay('some1', 'New test from Vizzzz');
    if IRCConnected then
      IRCJoin('#uos');
    if IRCConnected then
      IRCSay('#uos', 'CH test from Vizzzz');    

    while True do 
      Wait(500);
  end.
```
