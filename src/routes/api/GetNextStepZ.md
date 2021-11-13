---
title: GetNextStepZ
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Result is calculated Z for the next step (in next tile).

if char disconnected, or no uo files loaded - returns 0.


**Pascal Syntax:**

```pascal
function GetNextStepZ(CurrX,CurrY, DestX, DestY : Word; WorldNum : byte; Z : ShortInt) : ShortInt;
```

**Python Syntax:**
```python
def GetNextStepZ(CurrX, CurrY, DestX, DestY, WorldNum, CurrZ): --> byte
```

