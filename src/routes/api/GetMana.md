---
title: GetMana
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character property *Mana* 

**Pascal Syntax:**

```pascal
function GetMana(ObjID : Cardinal) : Integer;
```
Pascal Example:
```pascal
while GetMana(Self) < 50 do
begin
  UseSkill('Meditation');
end;
```

**Python Syntax:**
```python
def GetMana(ObjID): --> int
```
