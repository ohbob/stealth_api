---
title: GetDex
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns stat *Dex* (dexterity) for mobile with ID *ObjID*

**Pascal Syntax:**

```pascal
function GetDex(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetDex(Self) < 50 do
begin
  //using some skill for dex increasing, or cast spell, or something else
end;
```

**Python Syntax:**
```python
def GetDex(ObjID): --> int
```
