---
title: GetDistance
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns the distance from character's location to object with ID *ObjID*. 
If Object is not exists, returns -1, else returns distance in tiles.

**Pascal Syntax:**

```pascal
function GetDistance(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
if (GetDistance(chestID) > 1) then
begin
  AddToSystemJournal('Proceeding to chest');
  MoveXYZ(GetX(chestID), GetY(chestID), GetZ(Self()), 1, 5, true);
  Wait(1000);
end;

```


**Python Syntax:**
```python
def GetDistance(ObjID): --> int
```