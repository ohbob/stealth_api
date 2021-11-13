---
title: HorseLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x19 - returns saddle ID, if char is mounted.

NB: Saddle ID is NOT same as "Horse" ID.

Pascal

```pascal
function HorseLayer():Byte
```

Python

```python
HorseLayer()
```

Example 1:

```pascal
if ObjAtLayer(HorseLayer) = 0 then 
  UseObject(HorseID));
```
