---
title: Count
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Searching for items with type ***ObjType*** in backpack and returning FindFullQuantity.

NB: This method doesn't search in subcontainers

Pascal

```pascal
function Count(ObjType : Word) : Integer;
```




Python
```python
def Count(ObjType) -> Integer
```





Example Pascal

```pascal
Program New;
var foodamount: integer;
begin
 if (count(food) < maxfood) then
  begin
   foodamount:=count (food);
   FindType(food,ground);
   if FindQuantity = 0 then continue;
   if (FindQuantity > (maxfood-food)) then
      grab (finditem, maxfood-food);
   else 
      grab (finditem, 0);
   wait (200);
  end;
end.```


