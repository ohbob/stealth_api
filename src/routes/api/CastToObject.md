---
title: CastToObject
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}



Cast spell *SpellName* to Object with ID *ObjectID*
List of default spells names you can find in [Cast](Api/Cast)

Pascal

```pascal
function CastToObject( SpellName : String; ObjectID : Cardinal ): Boolean
```



Python

```python
CastToObject(SpellName, ObjID)
```



Example Python

```python
Cast("Heal", Self())
```
