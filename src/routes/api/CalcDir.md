---
title: CalcDir
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns the direction for the step from point(Xfrom, Yfrom) to the point(Xto, Yto). 

If Xfrom = Xto and Yfrom = Yto function will return 100.


Pascal

```pascal
function CalcDir(Xfrom, Yfrom, Xto, Yto:Integer):Byte

```

Python

```python
CalcDir(Xfrom, Yfrom, Xto, Yto)
```

Example:

```pascal
Step(CalcDir(GetX(Self), GetY(Self), GetX(Self) +1, GetY(Self)), True);
```
 