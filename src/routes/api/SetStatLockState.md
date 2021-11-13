---
title: SetStatLockState
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Set Stat lock state. 

Possible *statState* values: 0 - stat will increase, 1 - stat will decrease, 2 - stat locked.
Possible *statNum* values: STR - 0, DEX - 1, INT - 2.

**Pascal Syntax:**

```pascal
procedure SetStatLockState(statNum : Byte; statState : Byte);

const 
statUP=0, statDOWN=1, statLOCK=2.
statSTR=0, statDEX=1, statINT=2.
```	

**Python Syntax:**
```python
def SetStatState(statNum, statState):
```