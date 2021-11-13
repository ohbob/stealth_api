---
title: GetActiveAbility
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns string with name of character's current active ability 
NB: If no active ability, return value is '0'

**Pascal Syntax:**

```pascal
function GetActiveAbility : String
```
Pascal Example:
```pascal
if GetActiveAbility = '0' then
  UsePrimaryAbility;
```

**Python Syntax:**
```python
def GetActiveAbility(): --> String
```
