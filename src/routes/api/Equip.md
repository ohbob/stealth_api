---
title: Equip
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Wear item with ID ***Obj*** to the specified layer ***Layer***.

if wearing sucessfull - return True.

If char disconnected, or the movement of the object from hand to the backpack failed - will return False.


Pascal

```pascal
function Equip(Layer : Byte;Obj : Cardinal) : Boolean;

```




Python
```python
def Equip(Layer, Obj): -> bool
``` 





Example Pascal

```pascal
if (getquantity(findtype(tweapon,ground)) > 0) 
    and (gettype(ObjAtLayer(RhandLayer)) <> gettype(finditem)) then 
  begin 
    addtosystemjournal('Weapon Change, left' + inttostr(findcount)); 
    UnEquip(RHandLayer); 
    wait(500); 
    Equip(RhandLayer, finditem); 
  end;
```


