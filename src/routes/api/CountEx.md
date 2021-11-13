---
title: CountEx
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Searching for items with type ***ObjType*** and color *** Color*** in container ***Container*** and returning FindFullQuantity.

NB: This method doesn't search in subcontainers

Pascal

```pascal
function CountEx(ObjType : Word; Color : Word; Container : Cardinal) : Integer;
```




Python
```python
def CountEx(ObjType, Color, Container) -> Integer
```





Example Pascal

```pascal
procedure CheckOpened(Container: Cardinal);
begin
  if ((not Dead) and (CountEx(-1, -1, Container) <= 0)) then 
    UseObject(Container);
end;

end.```


