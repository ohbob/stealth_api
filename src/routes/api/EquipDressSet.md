---
title: EquipDressSet
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Dress set of clothes that was saved by [SetDress](Api/SetDress) method.

Synonym for [DressSavedSet](Api/DressSavedSet)

On dressing successful returns True.

If Char disconnected, or dressing failed - return False.



Pascal

```pascal
function EquipDressSet : Boolean;

```




Python
```python
def EquipDressSet(): -> list
```



Example Pascal

```pascal
Program New;
begin
DressSpeed := 650;
SetDress;
Wait(1000);
AddToSystemJournal('Undress');
Undress;
Wait(1000)                   ;
AddToSystemJournal('Try Dress');
EquipDressSet();
end.```

