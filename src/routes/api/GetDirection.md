---
title: GetDirection
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns character direction(0-7)
Total we have 8 directions in UO: North, NorthEast, East,SouthEast, South, SouthWest, West,NorthWest.
NB: Keep in mind, than 0 can be real direction, but also can be default value for non-conected character

**Pascal Syntax:**

```pascal
function GetDirection(ObjID : Cardinal) : Byte;
```
Pascal Example:
```pascal
Procedure PreslPet;
Begin;
  DPet:=GetDirection(Pet);
  If Dpet=0 then newmoveXY((getX(Pet)+1),(gety(Pet)+1),True,1,True);
  If Dpet=1 then newmoveXY(getX(Pet),(gety(Pet)+1),True,1,True);
  If Dpet=2 then newmoveXY((getX(Pet)-1),(gety(Pet)+1),True,1,True);
  If Dpet=3 then newmoveXY((getX(Pet)-1),gety(Pet),True,1,True);
  If Dpet=4 then newmoveXY((getX(Pet)-1),(gety(Pet)-1),True,1,True);
  If Dpet=5 then newmoveXY(getX(Pet),(gety(Pet)-1),True,1,True);
  If Dpet=6 then newmoveXY((getX(Pet)+1),(gety(Pet)-1),True,1,True);
  If Dpet=7 then newmoveXY(getX(Pet),(gety(Pet)+1),True,1,True);  
end; 
```


**Python Syntax:**
```python
def GetDirection(ObjID): --> ubyte
```
