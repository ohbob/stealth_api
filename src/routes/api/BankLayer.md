---
title: BankLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number 0x1C - Bank Container of mobile.


Pascal

```pascal
function BankLayer():Byte
```

Python

```python
BankLayer()
```

Example:

```pascal
if ObjAtLayer(BankLayer) > 0 then 
  AddToSystemJournal('Bank Box ID:' + IntToStr(ObjAtLayer(BankLayer)));
```


