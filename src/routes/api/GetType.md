---
title: GetType
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns property *Type* for object *ObjID*


**Pascal Syntax:**

```pascal
function GetType(ObjID : Cardinal) : Word;
```
Pascal Example:
```pascal
     while((GetType(Self) <> $02EB) and (GetType(Self) <> $02EC)) do begin
       Cast('Wraith Form');
       wait(2000);
     end;
```

**Python Syntax:**
```python
def GetType(ObjID): --> ushort
```
