---
title: FindType
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Search for the objects with specified type ***ObjType*** in specified container ***Container***.

Returns the last object found using the function.

If no objects found, or char disconnected - returns 0.

NB: THis method is NOT searching in subcontainers! For searching in subcontainers use [FindTypeEx](Api/FindTypeEx) with True in last param.

Search result:
* A list of found objects can be obtained ny methods [GetFindedList](Api/GetFindedList) or [GetFoundItems](Api/GetFoundItems) 
* The last object was found also stored in [FindItem](Api/FindItem)  
* [FindCount](Api/FindCount)   returns amount of found items (without stacks content)
* [FindQuantity](Api/FindQuantity)   returns quantity of last finded object (object field).
* [FindFullQuantity](Api/FindFullQuantity) returns amount of found items (including stacks content)



Search distance modifiers:

* [FindDistance](Api/FindDistance) - specifies the search range by horizontal
* [FindVertical](Api/FindVertical) - specifies the search range by vertical

The parameter ***Container*** can be:

- [Backpack](Api/Backpack)
- [Ground](Api/Ground) 
- $FFFFFFFF(= -1)
- ID of the required container (if object with ID not exists, searching in Backpack)




If ***ObjType*** = -1($FFFF) - will search ANY objects.






Pascal

```pascal
function FindType(ObjType:Word; Container:Cardinal) : Cardinal
```



Python
```python
def FindType(ObjType, Container): -> uint
```





Example Pascal
```pascal
if FindType(bottle_type,Ground) > 0 then
begin
  UseObject(FindItem);
end;
```




Example Python
```python
 FindType(runes, Backpack())
  AddAddToSystemJournal('Runes found: {0}'.format(FindCount()))
```