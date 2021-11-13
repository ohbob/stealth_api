---
title: GetStr
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character stat *Str* (strength)

**Pascal Syntax:**

```pascal
function GetStr(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetStr(Self) < 50 do
begin
  //using some skill for str increasing, or cast spell, or something else
end;
```

**Python Syntax:**
```python
def GetStr(ObjID): --> int
```
