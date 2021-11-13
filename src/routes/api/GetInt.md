---
title: GetInt
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns stat *Int* (intelligence) for mobile with ID *ObjID*

**Pascal Syntax:**

```pascal
function GetInt(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetInt(Self) < 50 do
begin
  //using some skill for int increasing, or cast spell, or something else
end;
```

**Python Syntax:**
```python
def GetInt(ObjID): --> int
```