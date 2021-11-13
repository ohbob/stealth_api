---
title: GetAutoSellDelay
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns value of delay, which used after buy through [AutoBuy](Api/AutoBuy) or [AutoBuyEx](Api/AutoBuyEx)
Default value is 3 ms

**Pascal Syntax:**

```pascal
function GetAutoSellDelay : Word;
```

Pascal Example:
```pascal
if GetAutoSellDelay > 1000 then
  SetAutoSellDelay(50);

```

**Python Syntax:**
```python
def GetAutoSellDelay(): --> ushort
```
