---
title: FindAtCoord
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Search all object in world coordinates ***X*** and ***Y***, and returns last ID.

If no objects found, or char disconnected - returns 0.


Pascal

```pascal
function FindAtCoord(X : Word;Y : Word) : Cardinal;
```



Python
```python
def FindAtCoord(X, Y): -> uint
```


Example Pascal
```pascal
ObjId:= FindAtCoord(GetX(Self), GetY(Self));  
end.
```