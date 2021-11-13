---
title: GetStam
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character property *Stam* (stamina) 

**Pascal Syntax:**

```pascal
function GetStam(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetStam(Self) < 10 do
begin
  //drink stam potion, or wait
end;
```

**Python Syntax:**
```python
def GetStam(ObjID): --> int
```