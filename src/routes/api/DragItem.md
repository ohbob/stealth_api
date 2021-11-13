---
title: DragItem
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Method takes item "on finger". 
Returns True on success, False if:
 - already exists item "on finger"
 - item with this ID not found

if item in Stack, and ***Amount*** > items in Stack, method will drag ***Amount*** of items, else will drag all items in stack.

NB: this method drag item "on finger", not to some container or ground. Use [DropItem](Api/DropItem) to drop item from "finger". 



Pascal

```pascal
function DragItem(ItemID : Cardinal; Amount : Integer) : Boolean;

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

