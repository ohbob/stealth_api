---
title: GetY
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns *Y* position for object *ObjID*


**Pascal Syntax:**

```pascal
function GetY(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
procedure Recall(Rune: Cardinal);
var 
  x, y: Integer;
  MyTimer: TDateTime;
begin
  AddToSystemJournal('Recall: ' + IntToStr(Rune));    
  x := GetX(self);
  y := GetY(self);
  repeat
    CheckMana;
    MyTimer := Now;
    WaitTargetObject(Rune);
    Cast('Recall');
    repeat
      Wait(500);
    until (x <> GetX(self)) or (y <> GetY(self)) or (InJournalBetweenTimes('fizzles', MyTimer, Now) <> -1);
  until (x <> GetX(self)) or (y <> GetY(self));
  CheckLag(3000);
end;
```

**Python Syntax:**
```python
def GetY(ObjID): --> int
```