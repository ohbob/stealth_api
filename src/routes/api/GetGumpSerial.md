---
title: GetGumpSerial
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns Serial ID for gump with list index *GumpIndex*

Returns 0 if gump index incorrect (out of gumps list) or char disconnected.

NB: SerialID CAN BE unique, but thats not a rule!

**Pascal Syntax:**

```pascal
function GetGumpSerial(GumpIndex : Integer) : Cardinal;
```
Pascal Example:
```pascal
If GetGumpsCount > 0 then
  if GetGumpSerial(GetGumpsCount-1) = $15A7DDF then
    CloseSimpleGump(GetGumpsCount-1);
```
Pascal Example 2:
```pascal

```

**Python Syntax:**
```python
def GetGumpSerial(GumpIndex): --> uint
```