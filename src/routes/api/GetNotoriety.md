---
title: GetNotoriety
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns property *Notoriety* for mobile *ObjID*


  Unknown = 0x00,
  Innocent = 0x01,
  Ally = 0x02,
  Gray = 0x03,
  Criminal = 0x04,
  Enemy = 0x05,
  Murderer = 0x06,
  Invulnerable = 0x07

**Pascal Syntax:**

```pascal
function GetNotoriety(ObjID : Cardinal) : Byte;
```
Pascal Example:
```pascal
  FindDistance := 15;
  If FindType($0190,ground) <> 0 then
  begin
    If (GetNotoriety(finditem) = 1) or (GetNotoriety(finditem) = 2) then UOSay('Hello man) ' );
    If (GetNotoriety(finditem) = 6) or (GetNotoriety(finditem) = 5) or (GetNotoriety(finditem) = 3) then UOSay('Dont kill me, please!' );
    Ignore(finditem);
  end;
```

**Python Syntax:**
```python
def GetNotoriety(ObjID): --> ubyte
```