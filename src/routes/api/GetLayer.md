---
title: GetLayer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

**Description:**

Returns layer, where object with ID *ObjID* located (Enumerates all character layers and compare object in this layer with *ObjID*)
 
if character disonnected, or object not found - returns 0.

**Pascal Syntax:**

```pascal
function GetLayer(ObjID: Cardinal) : Byte;
```
Pascal Example:
```pascal
if GetLayer(my_relik_shield_ID') = 0 then 
  AddToSystemJournal('My mega-shiled not found')
else
  AddToSystemJournal('My mega-shiled found!');
```
Pascal Example 2:
```pascal

```

**Python Syntax:**
```python
def GetLayer(Obj): ubyte
```