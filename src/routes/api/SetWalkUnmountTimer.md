---
title: SetWalkUnmountTimer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Set delay between steps when walking(not running!) without mount with Move* and Step* functions

Minimal value 380, maximum 2000.

Warning: This delay will be applied to ALL character, loaded in current Stealth instance!

**Pascal Syntax:**

```pascal
procedure SetWalkUnmountTimer(Value: Word);
```

**Python Syntax:**
```python
def SetWalkUnmountTimer(Value):
```