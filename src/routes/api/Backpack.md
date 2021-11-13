---
title: Backpack
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns backpack ID (of Current Character)

If disconnected from UO server - returns 0.


Pascal

```pascal
function Backpack():Cardinal
```


Python

```python
Backpack()
```


Example 1:
```pascal
if Count(runes) < 10 then
begin
   MoveItem(runestack ,10-Count(runes), Backpack, 0,0,0)
end;
```

Example 2:
```pascal
if Count(runes) < 10 then
begin
   FindType($ EED, Backpack)
end;
```