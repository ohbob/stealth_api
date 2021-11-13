---
title: GetQuantity
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns stack size for object *ObjID*


**Pascal Syntax:**

```pascal
function GetQuantity(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
  if (FindType(CraftItemReagentType, Backpack) = 0) or (GetQuantity(FindItem) < RegsAmountForCraft) then
    begin
      Ignore(FindItem);
      GetRegsFromChest(CraftItemReagentType, RegsAmountForCraft);
    end;
```

**Python Syntax:**
```python
def GetQuantity(ObjID): --> int
```