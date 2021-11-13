---
title: BraceLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0xE - Character's Bag (Backpack).




Pascal

```pascal
function BraceLayer():Byte
```

Python

```python
BraceLayer()
```

Example:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(BraceLayer) <> 0 then
  begin
    unequip(BraceLayer);
    wait(1000);
  end;
```


