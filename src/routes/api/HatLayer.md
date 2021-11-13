---
title: HatLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x06 - Hat(Helmets,etc)

Pascal

```pascal
function HatLayer():Byte
```

Python

```python
HatLayer()
```

Example 1:

```pascal
if ObjAtLayer(HatLayer) > 0 then 
  AddToSystemJournal('Skirt ID:' + IntToStr(ObjAtLayer(HatLayer)));
```

Example 2:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(HatLayer) <> 0 then
  begin
    unequip(HatLayer);
    wait(1000);
  end;
```