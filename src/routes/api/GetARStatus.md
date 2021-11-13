---
title: GetARStatus
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns reconnector state (for current character): True = enabled, False = disabled

**Pascal Syntax:**

```pascal
function GetARStatus : Boolean;
```

Pascal Example:
```pascal
if not GetARStatus then
  SetARStatus(True);
```

**Python Syntax:**
```python
def GetARStatus(): --> boolean
```
