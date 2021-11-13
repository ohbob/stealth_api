---
title: BeardLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x10 - Beard (Facial Hair Beard).


Pascal

```pascal
function BeardLayer():Byte
```

Python

```python
BeardLayer()
```

Example:

```pascal
if ObjAtLayer(BeardLayer) > 0 then 
  AddToSystemJournal('Beard ID:' + IntToStr(ObjAtLayer(BeardLayer)));```


