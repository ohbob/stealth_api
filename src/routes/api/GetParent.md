---
title: GetParent
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

returns parent container for *ObjID*. 

If char disconnected, of item not found, or object has no parent (on ground), returns 0.


**Pascal Syntax:**

```pascal
function GetParent(ObjID : Cardinal) : Cardinal;
```
Pascal Example:
```pascal
 if (GetParent(finditem) <> backpack) then 
  AddToSystemJournal('Item is not in backpack');
```


**Python Syntax:**
```python
def GetParent(ObjID): --> uint
```
Detection of last parent container before ground.
Python Example:
```python
def FullParentPath(p):
    if type(p)!=list or not p: p=[p]
    if not p[-1]: return p[1:-1]
    return FullParentPath(p+[GetParent(p[-1])])

Return list: [BagID1, BagID2, BagIDpreGround], whereBagID1 - containers with ObjID, BagIDpreGround - last container before groud (if search in character backpack or layers - will return character ID).
```
