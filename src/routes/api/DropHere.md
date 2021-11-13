---
title: DropHere 
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Drop item with ID ***ItemID*** to ground under char's feet.

Returns True or False.

NB: Calling inside 2 methods: [DragItem](Api/DragItem) + [DropItem](Api/DropItem)

Pascal

```pascal
function DropHere(ItemID : Cardinal) : Boolean;

```




Python
```python
def DropHere(ItemID): -> bool
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
      Drophere(finditem);
      Wait(1000);
    end;
  end;
end;
```

