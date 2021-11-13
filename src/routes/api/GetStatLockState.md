---
title: GetStatLockState
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Return Stat lock state. 

Possible values: 0 - stat will increase, 1 - stat will decrease, 2 - stat locked.

**Pascal Syntax:**

```pascal
function GetStatLockState(SkillName : String) : ShortInt;
```	

**Python Syntax:**
```python
def GetStatLockState(SkillName): --> byte
```
