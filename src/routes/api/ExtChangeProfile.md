---
title: ExtChangeProfile
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}


Change current profile to profile with name *ProfileName*.

Keep in mind then following:

* The current character must be disconnected
* Only one script should be running
* Specified profile must exist. Important - profile name is case sensitive.
* If set empty strings in ShardName and CharName you will get window select shard or get connect on selected shard index and char from profile setting (Always select)




If the profile is successful, the function returns 0, otherwise returns an error code:

* -1 Internal error
* -2 Char connected or is in the process of connecting
* -3 More than one script is running
* -4 The specified profile does not exist

Pascal

```pascal
function ExtChangeProfile(ProfileName : String;ShardName : String = '';CharName : String = '') : Integer;
```



Python

```python
ExtChangeProfile(PName, ShardName, CharName): -> integer
```



Example

```pascal
function def_Connect(fProfileName, fShardName, fCharName : String) : Integer;
var
  i : Integer;
begin
  Result := -1;
  if Connected and (ShardName <> fShardName) then
    begin
	  Disconnect;
	  Wait(5000);
	end;
  i := ExtChangeProfile(ProfileName, fShardName, fCharName);
  case i of
    -1 : AddToSystemJournal('Internal error connecting to ' + fShardName + ' ' + fCharName);
	-2 : AddToSystemJournal('Char connected error ' + fShardName + ' ' + fCharName);
	-4 : AddToSystemJournal('No such profile found ' + ProfileName + ' ' + fShardName + ' ' + fCharName);
  end;
  
  if i < 0 then
    Exit;
  
  Connect;
end;
```
