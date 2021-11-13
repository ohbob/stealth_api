---
title: Disarm
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Disarms both (right and left) hands

Iterates through the layers of both hands and calling [UnEquip](Api/UnEquip) for these layers.


If char disconnected, or the movement of the object from hand to the backpack failed - will return False.


Pascal

```pascal
function Disarm : Boolean;

```




Python
```python
def Disarm() -> dictionary
``` 





Example Pascal

```pascal
if ObjAtLayer(RhandLayer)<>0 then
begin
  Disarm;
  wait(1000);
end;
```


