---
title: FindDistance
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Specifies the range for search methods [FindType](Api/FindType) or [FindTypeEx](Api/FindTypeEx) by horizontal.

For example, 3 - will search on all tiles inside 3 tiles radius.

Default - 2.


Pascal

```pascal
var FindDistance:Integer
```



Python
```python
def SetFindDistance(Value)
def GetFindDistance() : -> iunt

```


Example Pascal
```pascal
FindDistance:= 0;'' to look only in current char location
FindType(bandage_type, ground);
  AddAddToSystemJournal('Bandages found:' + IntToStr(FindQuantity));end.
```