---
title: GetAltName
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character "alternative name". Depends from server it can contains title, guild, profession or anything else, or be empty.

NB: Sometimes you should call [ClickOnObject](Api/ClickOnObject) for filling "Name" and "AltName" fields.

**Pascal Syntax:**

```pascal
function GetAltName(ObjID : Cardinal) : String;
```
Pascal Example:
```pascal
fAltName := GetAltName(Self);
if fAltName = '' then
begin
  ClickOnObject(Self);
  wait(500);
  fAltName := GetAltName(Self);
end;
```

**Python Syntax:**
```python
def GetAltName(ObjectID): --> string
```