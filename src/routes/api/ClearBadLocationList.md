---
title: ClearBadLocationList
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Clears the list of impassable points, which can be filled up by:
* by function [SetBadLocation](Api/SetBadLocation) calling
* by Stealth mover - if 3 times moving to point failed, this point marked as impassable.

**NB: If point exists in list more than 15 minutes, it will be automatically removed from list.**



Pascal

```pascal
procedure ClearBadLocationList
```



Python
```python

ClearBadLocationList()
```