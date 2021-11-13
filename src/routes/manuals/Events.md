---
title: Events
published: 2020-03-22T21:36:59.459Z
author: Vizitor
summary: Events info
layout: blog
---

# Events

### What events are.  ###
To understand what events are consider a simple example: anti-macro gumps that appear in some shards. Typically, if for example you are crafting, while your macro is running the anti-macro gump can appear. In a normal macro you should check for the presence of the gump at every step, with events you can decentralize the check so that the gump can be handled independently while the main macro is running.

Another example where events may be useful is to check the state of connection in a separate place than the main script.

To create events you use the following syntax:
`SetEventProc(evSpeech,'function_name'); `

To empty events you need to specify an empty handler
`SetEventProc(evSpeech,' '); `

### Extra info and tips ###

1. Events called, when `Wait` method called, so its not a real parallel execution. BTW, thats the reason of using Wait instead of Sleep in Python
2. when events raised, its added to events queue, and executed in script one by one. Thats why you should NEVER put in event handler heavy things like moving, waiting for something, etc. Only light&fast code!
3. Event available for all internal and external scripts, working same everywhere.

### List of available events: ###

* evItemInfo : [ID : Cardinal] - Incoming Item (not mobile!)

* evItemDeleted : [ID : Cardinal] - Item deleted

* evSpeech : [Text : String, SenderName : String, SenderID: Cardinal] - common incoming message

* evMoveRejection : [Xorig, Yorig, Dir, XDest, YDest : Word] - server rejected the movement, not allowed to step

* evDrawContainer : [ID, ModelGump : Cardinal] - drawing container (0x24 bag)

* evAddItemToContainer : [ObjID, ContainerID : Cardinal]

* evAddMultipleItemsInCont : [ContainerID : Cardinal] - Couple of items added to container, packet 0x3c

* evRejectMoveItem : [Reason : Byte] - drag \ drop rejection

* evDrawObject : [ID : Cardinal] - drawing any mobile (chars&npc)

* evMenu : [DialogID : Cardinal, MenuID : Word] - a Menu popped out

* evMapMessage : [ID : Cardinal, centerx : Word, centery : Word] - Treasure discovered

* evAllow_RefuseAttack : [ID : Cardinal, Attack_OK : Boolean] (ID = 0 if Attack_OK = False)

* evClilocSpeech : [SenderID : String, SenderName : String, ClilocID : Cardinal, Text : String]

* evBuff_DebuffSystem : [ID : Cardinal, Attribute_ID : Word, IsEnabled : Boolean] - A (de)buff  is (de)activated

* evClientSendResync : [] - Stealth (or the client through it) sent resync

* evIncomingGump : [Serial : Cardinal,GumpID : Cardinal,X: Integer,Y: Integer] - incoming gump

* evTimer1 : [] - no settings, called every 100ms

* evTimer2 : [] - no settings, called every 100ms

* evWindowsMessage : [Param : Dword] : Received window message (Windows only!)

* evSound : [Sound_ID : Cardinal, X , Y, Z : Word] - sound and its coordinates

* evDeath : [Dead : Boolean] - If True Dead, else alive

* evQuestArrow : [fQuestArrowX, fQuestArrowY : Word, fQuestArrowActive : Boolean]

* evPartyInvite : [Inviter_ID : Cardinal] - some one is inviting us in party 

* evMapPin: [ID :Dword; Action, PinID : : Byte; X, Y : Word ] - Marked point on map. 

* evGumpTextEntry: [fGumpTextEntryID : Dword; Title - String; InputStyle : Byte; MaxValue : Dword; Title2 : String] - Strin Entry, look like gump, but really not.

* evGraphicalEffect: [_srcID: Cardinal; _srcX, _srcY: Word; _srcZ : SmallInt; _dstID : Cardinal; _dstX, _dstY: Word; _dstZ : Smallint; _type : Byte; _itemID: Word; _fixedDir: Byte] -Graphical Effect.

* evIRCIncomingText: [Message : String] - IRC incoming message

* evMessengerEvent: [Sender : TMessenger; SenderNickName : String; SenderId, ChatId : String; EventMsg : String; EventCode : Byte] - more info in Messengers manual.

* evSetGlobalVar: [VarName: String; VarValue: String] - The event is triggered when global variable is set from SetGlobal('stealth',VarName,VarValue) or from external script.

* evUpdateObjStats: [ID,CurLife,MaxLife,CurMana,ObjectInfo._MaxMana,CurStam,MaxStam : Integer] - fired when any of stats changed. Usually thats stats of our char.

* evGlobalChat: [MsgNum: Word, Name, Text : String] - incoming global chat action.

  **Deprecated events:**

* evUnicodeSpeech: deprecated, used no longer (use evSpeech).

* evClilocSpeechAffix: deprecated, used no longerя (use evClilocSpeech).

* evDrawGamePlayer: deprecated, used no longer (use  evDrawObject).

* evUpdateChar: deprecated, used no longer (use evDrawObject).

* evCharAnimation : [ID : Cardinal, Action : Word]

* evICQDisconnect : [] - deprecated, Windows only!)

* evICQConnect : [] - deprecated, Windows only!)

* evICQIncomingText : [uin, Text] - deprecated, Windows only!)

* evICQError : [Text : String] - - deprecated, Windows only!)

### Samples ### 


```pascal
//Pascal Sample
Program Test; 

procedure Speech(text,SenderName : String; SenderID : Cardinal); 
begin 
  AddToSystemJournal('Event! Unicode Speech: SenderID = $'+ IntToHex(SenderID,8) + ' ; SenderName =  ' + SenderName + '; SenderText : ' + text); 
end; 

procedure Char_Animation(ID : Cardinal; Action : Word); 
begin 
  AddToSystemJournal('Event! Char Animation: ID = $'+ IntToHex(ID,8) + ' ; Action =  ' + IntToStr(Action)); 
end; 

procedure multiple_Items(ContainerID : Cardinal); 
begin 
  AddToSystemJournal('Event! Add multiple Items In Cont: ContID = $'+ IntToHex(ContainerID,8)); 
end; 

begin 
  SetEventProc(evSpeech,'Speech'); 
  SetEventProc(evCharAnimation,'Char_Animation'); 
  SetEventProc(evAddMultipleItemsInCont,'multiple_Items'); 

  while True do 
	wait(50); 
end.
```


```python
#Python sample
def drawCallback(objectID):
    print(objectID)
    
SetEventProc('evDrawObject', Callback=drawCallback)

while True:
    Wait(50)
```
