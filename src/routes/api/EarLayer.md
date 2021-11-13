---
title: EarLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x12 - Ear(Earrings)

Pascal

```pascal
function EarLayer():Byte
```

Python

```python
EarLayer()
```

Example 1:

```pascal
if ObjAtLayer(EarLayer) > 0 then 
  AddToSystemJournal('Earrings ID:' + IntToStr(ObjAtLayer(EarLayer)));
```

Example 2:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(EarLayer) <> 0 then
  begin
    unequip(EarLayer);
    wait(1000);
  end;
```