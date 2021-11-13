---
title: GetMapCell
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Information about Map (Land) cell, including its tile and Z.

**Pascal Syntax:**

```pascal
function GetMapCell(X,Y : Word; WorldNum : Byte) : TMapCell;

TMapCell = record
  Tile : Word;
  Z : ShortInt;
end;
```
Pascal Example:
```pascal
   for ix := (GetX(self) - 2) to (GetX(self) + 2) do
      for iy := (GetY(self) - 2) to (GetY(self) + 2) do
      begin
        T := 0;
        X := ix;
        Y := iy;
        Z := GetZ(self);
        MapCell := GetMapCell(ix, iy, WorldNum);
        if (MapCell.Tile = Mountain_Tile) and (abs(Z - MapCell.Z) < 15) then
        begin
          T := MapCell.Tile;
          Z := MapCell.Z;
          WaitTargetTile(T, X, Y, Z);
          UseObject(ShovelID);
        end;
      end;

```

**Python Syntax:**
```python
def GetCell(X, Y, WorldNum): --> dict
```
