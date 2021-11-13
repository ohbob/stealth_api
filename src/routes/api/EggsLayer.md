---
title: EggsLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x17 - Skirt(Kilt)

Pascal

```pascal
function EggsLayer():Byte
```

Python

```python
EggsLayer()
```

Example 1:

```pascal
if ObjAtLayer(EggsLayer) > 0 then 
  AddToSystemJournal('Skirt ID:' + IntToStr(ObjAtLayer(EggsLayer)));
```

Example 2:

```pascal
{If there is something on a layer, then remove}
if ObjAtLayer(EggsLayer) <> 0 then
  begin
    unequip(EggsLayer);
    wait(1000);
  end;
```