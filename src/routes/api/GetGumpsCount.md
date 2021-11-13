---
title: GetGumpsCount
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns amount of active gumps for current character.

Returns 0 if character disconnected, or no gumps. 

NB: Usually used in scripts like "GetGumpsCount - 1" as param for script methods, which have param *GumpIndex*, means last gump in gumps list.

**Pascal Syntax:**

```pascal
function GetGumpsCount() : Cardinal;
```
Pascal Example:
```pascal
If IsGump then
  if IsGumpCanBeClosed(GetGumpsCount-1) then
    CloseSimpleGump(GetGumpsCount-1);
```


**Python Syntax:**
```python
def GetGumpsCount(): --> int
```