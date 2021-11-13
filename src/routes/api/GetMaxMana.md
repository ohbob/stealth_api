---
title: GetMaxMana
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character property *MaxMana* (Mana Maximum)


**Pascal Syntax:**

```pascal
function GetMaxMana(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
if GetMana(Self) < GetMaxMana(Self) then
begin
  UseSkill('Meditation');
end;
```

**Python Syntax:**
```python
def GetMaxMana(ObjID): --> int
```
