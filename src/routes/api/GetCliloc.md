---
title: GetCliloc
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retuns tooltip for object wth id *ObjID*, empty line if no tooltip.
Synonym for [GetTooltip](Api/GetTooltip)


**Pascal Syntax:**

```pascal
function GetCliloc(ObjID : Cardinal) : String;
```
Pascal Example:
```pascal
if BMSearch(1,GetCliloc(finditem),'64')>0 then 
  ignore(finditem) 
else 
begin
  //Work with item here
end;

```

**Python Syntax:**
```python
def GetCliloc(ObjID): --> string
```
