---
title: HairLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x17 - Hair

NB: You cant remove or equip this layer by client.

Pascal

```pascal
function HairLayer():Byte
```

Python

```python
HairLayer()
```

Example 1:

```pascal
if ObjAtLayer(HairLayer) > 0 then 
  AddToSystemJournal('Skirt ID:' + IntToStr(ObjAtLayer(HairLayer)));
```
