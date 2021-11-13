---
title: Drop 
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Drop item with ID ***ItemID*** and amount ***Amount*** to ground with coordinates X, Y and Z.

Returns True or False.

NB: Calling inside 2 methods: [DragItem](Api/DragItem) + [DropItem](Api/DropItem)

Pascal

```pascal
function Drop(ItemID:Cardinal; Amount:Integer; X, Y, Z:Integer):Boolean

```




Python
```python
def Drop(ItemID, Amount, X, Y, Z): -> bool
```



Example Pascal

```pascal
procedure DropOre;
begin
  If Weight > DropWeight then
  begin
    while Weight > DropWeight do
    begin
      Wait(1000);
      UseObject(backpack);
      FindType(oretype, backpack);
      if finditem = 0 then
        Break;
      Drop(finditem, 10, 0, 0, 0);
      Wait(1000);
    end;
  end;
end;
```

