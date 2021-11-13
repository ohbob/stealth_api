---
title: GetBuffBarInfo
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns list of character's active (de)buffs

**Pascal Syntax:**

```pascal
TBuffBarInfo = record
  Count : Byte;
  Buffs : array of TBuffIcon;
end;
 
TBuffIcon = record
  Attribute_ID : Word;
  TimeStart : TDateTime;
  Seconds : Word;
  ClilocID1 : Cardinal;
  ClilocID2 : Cardinal;
end;

function GetBuffBarInfo() : TBuffBarInfo;
```
where:
Attribute_ID : (de)buff ID, Seconds - time of (de)buff. ClilocID1, ClilocID2 - used in Icon hint, can contain some additional info. 


Pascal Example:
```pascal
program Test;
var
    buffObj : TBuffBarInfo;
    buffIconObj : TBuffIcon;
    i : integer;
 
begin
    buffObj := GetBuffBarInfo();
 
    if (buffObj.Count = 0) then
    begin
        AddToSystemJournal('No active buffs');
        Exit;
    end;
 
    AddToSystemJournal('Tota;l ' + IntToStr(buffObj.Count) + ' active buffs');
 
    for i := 0 to buffObj.Count - 1 do
    begin
        buffIconObj := buffObj.Buffs[i];
 
        AddToSystemJournal('Buff #' + IntToStr(i + 1));
        AddToSystemJournal('Attribute_ID: ' + IntToHex(buffIconObj.Attribute_ID, 8));
        AddToSystemJournal('TimeStart: ' + DateTimeToStr(buffIconObj.TimeStart));
        AddToSystemJournal('Seconds: ' + IntToStr(buffIconObj.Seconds));
        AddToSystemJournal('ClilocID1: ' + IntToHex(buffIconObj.ClilocID1, 8));
        AddToSystemJournal('ClilocID2: ' + IntToHex(buffIconObj.ClilocID2, 8));
        AddToSystemJournal('');
    end;
end.
```
Pascal Example 2:
```pascal

```

**Python Syntax:**
```python
def GetBuffBarInfo(): --> dict
dict keys = ('Attribute_ID', 'TimeStart', 'Seconds', 'ClilocID1', 'ClilocID2')
```

Pyton Example:
```pascal

```