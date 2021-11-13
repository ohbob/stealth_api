---
title: FindNotoriety
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Search for the mobile with specified type ***ObjType*** and its ***Notoriety*** (in client looks like Objects peacefulness - usually object name color) on the ground.

Returns the last object found using the function.

If no objects found, or char disconnected - returns 0.

Search result:
* A list of found objects can be obtained ny methods [GetFindedList](Api/GetFindedList) or [GetFoundItems](Api/GetFoundItems) 
* The last object was found also stored in [FindItem](Api/FindItem)  
* [FindCount](Api/FindCount) returns amount of found items (without stacks content)
* [FindQuantity](Api/FindQuantity) returns quantity of last finded object (object field).
* [FindFullQuantity](Api/FindFullQuantity) returns amount of found items (including stacks content)



The parameter Notoriety can be used:

1 - innocent(blue)
2 - guilded/ally(green)
3 - attackable but not criminal(gray)
4 - criminal(gray)
5 - enemy(orange)
6 - murderer(red)

0,7 - not in use.





Pascal

```pascal
function FindNotoriety(ObjType:Word; Notoriety:Byte):Cardinal
```



Python
```python
def FindNotoriety(ObjType, Notoriety): -> uint
```


Example Pascal
```pascal
if (FindNotoriety(-1,3) > 0) then //attack mob
    Attack(FindItem);
```