---
title: Messengers(Telegram,Viber,Discord)
published: 2020-03-22T21:36:59.459Z
author: Vizitor
summary: Messengers(Telegram,Viber,Discord)
layout: blog


---

#  Messengers

Work with bots in Stealth realized with messengers bots technology.

At then moment has been done realization of Telegram, Viber and Discord.

'' 'Skype' '' can't be done due to to technical reson

In the internal scripts (PS and PAX) there is a TMessenger class

```pascal
  TMessenger = class
  public
    procedure SendMessage(Msg, UserID : String); virtual;
    property MessengerName: string read GetMessengerName;
    property Connected : Boolean read fConnected write SetConnected default False;
    property Token : String read GetToken write SetToken;
  end;
```

and 3 variables:

```pascal
  ViberMessenger : TMessenger;
  TelegramMessenger : TMessenger;
  DiscordMessenger : TMessenger;
```
Content of this classes you can inspect when debugging scripts in Editor window.


Token must be set before connection (Bot Registration instruction - [[Doc:RU/Manual/Reference/Messengers/BotRegistration]] )


Warning! For correct work of Viber Ngrok needed, if Ngrok not installеd - Stealth will offer you to download it and put to Stealth folder.



### WARNING! In external scripts first parameter in evMessengerEvent is not a TMessenger object, but messenger code - 1 is telegram, 2 - viber, 3 - Discord ###

Big example for messenger all-side using

```pascal
Program New;
  
procedure MessengerEventHandler(Sender : TMessenger; SenderNickName : String; SenderId, ChatId : String; EventMsg : String; EventCode : Byte);
begin
  case EventCode of
    0 : AddToSystemJournal(Sender.MessengerName + ' Connected');
    1 : AddToSystemJournal(Sender.MessengerName + ' Disconnected');
    2 : begin
          AddToSystemJournal(Sender.MessengerName + ' Message incoming from "' + SenderNickName + '" (SenderId: ' + SenderId + '), ChatID:  ' + SenderId + ' :' + EventMsg);
        end;
    3 : AddToSystemJournal(Sender.MessengerName + ' Error raised : ' + EventMsg);
  end;
end;

Begin
  SetEventProc(evMessengerEvent,'MessengerEventHandler');
                                                        
 if not ViberMessenger.Connected then
  begin
    ViberMessenger.Token := 'your_token_here';
    ViberMessenger.Connected := True;
  end;

  ViberMessenger.SendMessage('hello from Stealth ViberBot!','receiver_id_here');
            
     
  if not TelegramMessenger.Connected then
  begin
    TelegramMessenger.Token := 'your_token_here';
    TelegramMessenger.Connected := True;
  end;

  TelegramMessenger.SendMessage('hello from Stealth TelegramBot!','receiver_id_here');
            

  if not DiscordMessenger.Connected then
  begin
    DiscordMessenger.Token := 'your_token_here';
    DiscordMessenger.Connected := True;
  end;

  DiscordMessenger.SendMessage('hello from Stealth DiscordBot!','channel_id_here');

  While True do
  begin
    wait(200);
  end;
       
end.
```



Example 2, external script on Delphi
```pascal
program Project2;

{$R *.res}

uses
  System.SysUtils,
  windows,
  stealth_script in '..\..\stealth_script.pas';

procedure MessengerEventHandler(MesID : Cardinal; SenderNickName : String;
SenderId, ChatId : String; EventMsg : String; EventCode : Byte);stdcall;
begin
  with Script do
  case MesID of
    0,1 :
    case EventCode of
      0 : AddToSystemJournal('Telegram' + ' Connected');
      1 : AddToSystemJournal('Telegram' + ' Disconnected');
      2 : begin
            AddToSystemJournal('Telegram' + ' Message incoming from "' + SenderNickName + '" (SenderId: ' + SenderId + ') : ' + EventMsg);
            TelegramMessenger.SendMessage('response from Stealth : ' + EventMsg,SenderId)
          end;
      3 : AddToSystemJournal('Telegram' + ' Error raised : ' + EventMsg);
    end;

    2:
    case EventCode of
      0 : AddToSystemJournal('Viber' + ' Connected');
      1 : AddToSystemJournal('Viber' + ' Disconnected');
      2 : begin
            AddToSystemJournal('Viber' + ' Message incoming from "' + SenderNickName + '" (SenderId: ' + SenderId + ') : ' + EventMsg);
            ViberMessenger.SendMessage('response from Stealth : ' + EventMsg,SenderId)
          end;
      3 : AddToSystemJournal('Viber' + ' Error raised : ' + EventMsg);
    end;
    3:
    case EventCode of
      0 : AddToSystemJournal('Discord' + ' Connected');
      1 : AddToSystemJournal('Discord' + ' Disconnected');
      2 : begin
            AddToSystemJournal('Discord' + ' Message incoming from "' + SenderNickName
                               + '" (SenderId: ' + SenderId + ') on ChannelId '
                               + ChatId + ' : ' + EventMsg);
//            DiscordMessenger.SendMessage('response from Stealth : ' + EventMsg,ChatId)
          end;
      3 : AddToSystemJournal('Discord' + ' Error raised : ' + EventMsg);
    end;
  end;
end;

Begin
  Script.SetEventProc(evMessengerEvent, @MessengerEventHandler);
  Script.ViberMessenger.Connected := False;

 if not Script.ViberMessenger.Connected then
  begin
    Script.ViberMessenger.Token := 'your_token_here';
    Script.ViberMessenger.Connected := True;
  end;

  Script.ViberMessenger.SendMessage('hello from Stealth ViberBot!','receiver_id_here');


  if not Script.TelegramMessenger.Connected then
  begin
    Script.TelegramMessenger.Token := 'your_token_here';
    Script.TelegramMessenger.Connected := True;
  end;

  Script.TelegramMessenger.SendMessage('hello from Stealth TelegramBot!','receiver_id_here');

  Script.SetEventProc(evMessengerEvent, @MessengerEventHandler);
  Script.DiscordMessenger.Connected := False;

  if not Script.DiscordMessenger.Connected then
  begin
    Script.DiscordMessenger.Token := 'your_token_here';
    Script.DiscordMessenger.Connected := True;
  end;
  Script.DiscordMessenger.SendMessage('hello from Stealth DiscordBot!','channel_id_here');

  While True do
    Script.wait(200);

end.

```

ID of user-sender can be easy taken - just send any message from this user to our bot, connected by Stealth with script from examples. In Sysjournal will come message like
17:27:37:759 [Test - Test]: Telegram Message incoming from "Vizit0r" (SenderId: 435486649) : testtest  
where 435486649 is sender ID. (id - fake, given for example).

For Discord you should use not userID, but channel ID. Can be taken from receiving message as well.

Example 3, external script on Python:
```python

MSG = 'Event test'
ID = 0  # 1-Telegram, 2-Viber, 3-Discord, 0-default
TOKEN = 'your_token_here'
USER_ID = 'id'


def callback(*args):
    AddToSystemJournal('Callback args: ', args)


def main():
    AddToSystemJournal('Messenger test started')
    SetEventProc('evMessengerEvent', callback)
    
    MessengerSetToken(ID, TOKEN)
    AddToSystemJournal('Token set', MessengerGetToken(ID))
    
    AddToSystemJournal('Connecting...')
    MessengerSetConnected(ID, True)
    while not MessengerGetConnected(ID):
        Wait(100)
    else:
        AddToSystemJournal('Connected state: ', MessengerGetConnected(ID))

    AddToSystemJournal('Name is: ', MessengerGetName(ID))

    AddToSystemJournal('Sending message to {0}'.format(USER_ID))
    MessengerSendMessage(ID, MSG, USER_ID)
    
    AddToSystemJournal('Disconnecting...')
    MessengerSetConnected(ID, False)
    
    AddToSystemJournal('Done.')


if __name__ == '__main__':
    main()
```


Example 4, external script on C#

```c#
Stealth _s = Stealth.Default;

_s.Viber.Connected += (o, e) => { _s.Journal.AddToSystemJournal("Viber connected"); };
_s.Viber.Disconnected += (o, e) => { _s.Journal.AddToSystemJournal("Viber disconnected"); };

_s.Viber.IncomingMessage += (o, e) =>
{
    _s.Journal.AddToSystemJournal($"Viber incoming from '{e.SenderNickname}' (SenderId: { e.SenderId}): {e.Message}");
    _s.Viber.SendMessage($"Viber response from Stealth: {e.Message}", e.SenderId);
};

_s.Viber.Error += (o, e) => { _s.Journal.AddToSystemJournal($"Viber error: {e.Message}"); };

_s.Telegram.Connected += (o, e) => { _s.Journal.AddToSystemJournal("Telegram connected"); };
_s.Telegram.Disconnected += (o, e) => { _s.Journal.AddToSystemJournal("Telegram disconnected"); };
_s.Telegram.IncomingMessage += (o, e) =>
{
    _s.Journal.AddToSystemJournal($"Telegram incoming from '{e.SenderNickname}' (SenderId: { e.SenderId}): {e.Message}");
    _s.Telegram.SendMessage($"Telegram response from Stealth: {e.Message}", e.SenderId);
};
_s.Telegram.Error += (o, e) => { _s.Journal.AddToSystemJournal($"Telegram error: {e.Message}"); };

_s.Viber.Connect(VIBER_TOKEN);
_s.Telegram.Connect(TELEGRAM_TOKEN);
```

