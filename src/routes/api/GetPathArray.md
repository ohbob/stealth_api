---
title: GetPathArray
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

**Description:**

Calculates path from present position to point with *DestX* and *DestY*. Calculated path point will be written to *PathArray*. Returns path length.
 
*Optimized* - not in use, left for compatibility. Use [MoveHeuristicMult](Api/MoveHeuristicMult)
*Accuracy* - approaching accuracy: 0 - exactly to destination point, 1 - in area of 1 tiles from destination point, etc. Limited to 1000 tiles.
*PathArray* - founded points array.

This method call [GetPathArray3D](Api/GetPathArray3D) for calculation.
**Pascal Syntax:**

```pascal
function GetPathArray(DestX : Word;DestY : Word;Optimized : Boolean;Accuracy : integer;var PathArray : TPathArray) : Integer;
```
Pascal Example:
```pascal
function easyMoveXY(X,Y: integer; Optimized: boolean; Accuracy : Integer; Running: boolean): boolean; 
var 
   StepCnt,i : Integer; 
   mPathArr : TPathArray;
 
Begin 
Result:=false; 
While true do 
   begin 
   ''AddToSystemJournal('pathfinding...') 
   StepCnt:=GetPathArray(X,Y,Optimized,Accuracy,mPathArr); 
   If StepCnt<0 then Exit; 
   If StepCnt=0 then 
      begin 
      Result:= true; 
      Exit; 
      end; 
   For i:=0 to StepCnt do 
      begin 
 
      If Not IsWorldCellPassable(getX(self),getY(self),mPathArr[i].X,mPathArr[i].Y,WorldNum,getZ(self)) then  Break; 
      If Not MoveToPoint(mPathArr[i].X,mPathArr[i].Y,Running) then  Break; 
      If Dist(X,Y)<=Accuracy then 
         begin 
    AddToSystemJournal('Location reached!'); 
    Result:=true; 
    Exit; 
    end; 
      end; 
    end; 
End;
```
Pascal Example 2:
```pascal
look module mover3d.pas
```

**Python Syntax:**
```python
def GetPathArray(DestX, DestY, Optimized, Accuracy): -- > list
```
