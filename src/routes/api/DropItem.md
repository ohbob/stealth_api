---
title: DropItem
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Method drop item from "finger" to selected container (or ground)

Returns True on success, False if no item "on finger"

case ***MoveIntoID***:
 - Ground, then drop item on the ground with the specified coordinates.
 - container, then drop item to container.
 - Item - will try to stack item with old.



Pascal

```pascal
function DropItem(MoveIntoID:Cardinal; X, Y, Z:Integer):Boolean

```




Python
```python
def DragItem(ItemID, Amount) -> bool
```



Example Pascal

```pascal
procedure LootGold;
begin
  if FindType($0EED, Corpse) <> 0 then
  begin
    DragItem(finditem, 0);
    Wait(300);
    DropItem(backpack,0,0,0);
    Wait(600);
  end;
end;
```