---
title: GetMaxStam
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character property *MaxStam* (Stamina Maximum)


**Pascal Syntax:**

```pascal
function GetMaxStam(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
if GetStam(Self) < GetMaxStam(Self) div 2 then //half of stam
begin
  //drink stam potion, or wait
end;
```

**Python Syntax:**
```python
def GetMaxStam(ObjID): --> int
```
