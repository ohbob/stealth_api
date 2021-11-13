---
title: CloseSimpleGump
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Close Gump with index in Stealth Gumps List ***GumpIndex***
NB: Only Gump with missing propert "noclose" can be closed. Use method [IsGumpCanBeClosed](Api/IsGumpCanBeClosed) to check, if gump can be close this way.


Pascal

```pascal
procedure CloseSimpleGump(GumpIndex : Word);

```




Python
```python
def CloseSimpleGump(GumpIndex)
```




Example Python

```python
If IsGump then
  if IsGumpCanBeClosed(GetGumpsCount-1) then
    CloseSimpleGump(GetGumpsCount-1);
```