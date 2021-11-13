---
title: Equipt
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Wear item with type ***ObjType*** to the specified layer ***Layer***.

if wearing sucessfull - return True.

If char disconnected, or the movement of the object from hand to the backpack failed - will return False.


Pascal

```pascal
function Equipt(Layer : Byte;ObjType : Word) : Boolean;

```




Python
```python
def Equipt(Layer, ObjType): -> bool
``` 





Example Pascal

```pascal
if (gettype(ObjAtLayer(RhandLayer)) <> gettype(tweapon)) then 
  begin 
    UnEquip(RHandLayer); 
    wait(500); 
    Equipt(RhandLayer, tweapon); 
  end;
```


