---
title: GetMaxHP
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character property *MaxHP* (HP Maximum)


**Pascal Syntax:**

```pascal
function GetMaxHP(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
if GetHP(Self) < GetMaxHP(Self) then
begin
  WaitTargetSelf;
  UseObject(bandage_type);
end;
```

**Python Syntax:**
```python
def GetMaxHP(ObjID): --> int
```
