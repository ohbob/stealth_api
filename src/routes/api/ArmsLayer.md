---
title: ArmsLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x13 - Arms(elbows)

Pascal

```pascal
function ArmsLayer():Byte
```

Python

```python
ArmsLayer()
```

Example 1:

```pascal
if ObjAtLayer(ArmsLayer) > 0 then 
  AddToSystemJournal('Arms ID:' + IntToStr(ObjAtLayer(ArmsLayer)));
```
Example 2:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(ArmsLayer) <> 0 then
  begin
    unequip(ArmsLayer);
    wait(1000);
  end;
```