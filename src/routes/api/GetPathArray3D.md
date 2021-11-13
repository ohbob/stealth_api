---
title: GetPathArray3D
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

**Description:**

Calculates path from start position to destination point. Calculated path point will be written to *PathArray*. Returns path length.
 
StartX, StartY, StartZ - start point
FinishX, FinishY, FinishZ - Destination point
WorldNum - number of world for route
AccuracyXY, AccuracyZ - approaching accuracy: 0 - exactly to destination point, 1 - in area of 1 tiles from destination point, etc. Limits: AccuracyXY - 0..20; AccuracyZ - 0..255
Run - will character run or walk.
*PathArray* - founded points array.

NB: For calculation optimization setting use [MoveHeuristicMult](Api/MoveHeuristicMult)

**Pascal Syntax:**

```pascal
function GetPathArray3D(StartX, StartY : Word; StartZ : Shortint; FinishX, FinishY : Word; FinishZ : Shortint; WorldNum : Byte; AccuracyXY, AccuracyZ : Integer; Run : Boolean; var PathArray : TPathArray) : Integer;

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
def GetPathArray3D(StartX, StartY, StartZ, FinishX, FinishY, FinishZ, WorldNum,
                   AccuracyXY, AccuracyZ, Run): -- > list
```