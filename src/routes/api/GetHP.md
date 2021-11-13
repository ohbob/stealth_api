---
title: GetHP
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns property *HP* (life) for mobile with ID *ObjID*

**Pascal Syntax:**

```pascal
function GetHP(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetHP(Self) < 50 do
begin
  WaitTargetSelf;
  UseObject(bandage_type);
end;
```

**Python Syntax:**
```python
def GetHP(ObjID): --> int
```
