---
title: DressSavedSet
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Dress set of clothes that was saved by [SetDress](Api/SetDress) method.

Synonym for [EquipDressSet](Api/EquipDressSet)

On dressing successful returns True.

If Char disconnected, or dressing failed - return False.



Pascal

```pascal
function DressSavedSet : Boolean;

```




Python
```python
def DressSavedSet(): -> list
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
DressSavedSet();
end.```

