---
title: Dist
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns distance between two point (X1,Y1 to X2,Y2) in tiles.

If char not connected or UO files not loaded - returns 0.



Pascal

```pascal
function Dist(X1 : Word;Y1 : Word;X2 : Word;Y2 : Word) : Word;

```




Python
```python
def Dist(x1, y1, x2, y2) -> word
```



Example Pascal

```pascal
if (Dist(GetX(Self), GetY(Self), GetX(creatureID), GetY(creatureID)) > 3 then
  AddToSystemJournal(GetName(creatureID) + 'too far');
```

