---
title: BpackLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x15 - Character's Bag (Backpack).

The result of the ObjAtLayer(BpackLayer) should be similar to [Backpack](Api/Backpack)


Pascal

```pascal
function BpackLayer():Byte
```

Python

```python
BpackLayer()
```

Example:

```pascal
if ObjAtLayer(BpackLayer) > 0 then 
  AddToSystemJournal('Backpack ID:' + IntToStr(ObjAtLayer(BpackLayer)));
```


