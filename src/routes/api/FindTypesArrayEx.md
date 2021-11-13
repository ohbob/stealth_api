---
title: FindTypesArrayEx
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Search for the objects with specified array of types ***ObjTypes *** and array of colors ***Colors *** in the array of Containers ***Containers***.

***InSub*** select search mode for subcontainers - true or false. 

Returns the last object found using the function.

If no objects found, or char disconnected - returns 0.

NB: Method inside will go through each type\color\location and execute a simple findtypeex command.

Search result:
* A list of found objects can be obtained ny methods [GetFindedList](Api/GetFindedList) or [GetFoundItems](Api/GetFoundItems) 
* The last object was found also stored in [FindItem](Api/FindItem)  
* [FindCount](Api/FindCount)   returns amount of found items (without stacks content)
* [FindQuantity](Api/FindQuantity)   returns quantity of last finded object (object field).
* [FindFullQuantity](Api/FindFullQuantity) returns amount of found items (including stacks content)



Search distance modifiers:

* [FindDistance](Api/FindDistance) - specifies the search range by horizontal
* [FindVertical](Api/FindVertical) - specifies the search range by vertical

Array items in parameter ***Containers*** can be:

- [Backpack](Api/Backpack)
- [Ground](Api/Ground) 
- $FFFFFFFF(= -1)
- ID of the required container (if object with ID not exists, searching in Backpack)



If ***ObjTypes*** contains item -1 ($FFFF) - will search ANY objects.

If ***Colors*** contains item -1 ($FFFF) - will search objects with ANY color.





Pascal

```pascal
function FindTypesArrayEx(ObjTypes : array of Word;Colors : array of Word;Containers : array of Cardinal;InSub : Boolean) : Cardinal;
```



Python
```python
def FindTypesArrayEx(ObjTypes, Colors, Containers, InSub): -> uint
```





Example Pascal
```pascal
FindDistance := 20;
FindVertical := 10;
FindTypesArrayEx([$29A, $29B, $190, $191, $25d, $25e, $192, $193, $25f, $260, $2ea, $2ec, $2ed, $84, $f6, $19, $db, $51, $7a, $2ee, $2e8, $2e9, $2eb, $117, $116, $115],[$FFFF],[Ground],false);
AddToSystemJournal('FindCount = ' + IntToStr(FindCount));
```
