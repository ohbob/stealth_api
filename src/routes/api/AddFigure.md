---
title: AddFigure
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Addd figure to list and returns its index (can be used for [RemoveFigure](Api/RemoveFigure))



Pascal

```pascal
function AddFigure(const figure : TMapFigure) : Cardinal;
```

Example Pascal

```pascal
PROGRAM Test;
var
  temp11 : TMapFigure;
begin
  temp11.kind := fkRectangle;       
  temp11.coord := fcScreen;
  temp11.x1 := 55;
  temp11.x2 := 99;
  temp11.y1 := 55;
  temp11.y2 := 99;
  temp11.brushColor := 8888;
  temp11.worldNum := 1;
  temp11.text := 'test';  
  AddFigure(temp11);    
 end.

```

#### Types: ###

```pascal
TMapFigure = record
  kind : TFigureKind;
  coord : TFigureCoord;
  x1 : Integer;
  y1 : Integer;
  x2 : Integer;
  y2 : Integer;
  brushColor : TColor;
  brushStyle : TBrushStyle;
  color : TColor;
  worldNum : Byte;
  text : String;
end;
```
where

```pascal
TFigureCoord = (fcWorld, fcScreen);

TFigureKind = (fkLine, fkEllipse, fkRectangle, fkDirection, fkText);

TBrushStyle = (bsSolid, bsClear, bsHorizontal, bsVertical,  bsFDiagonal, bsBDiagonal, bsCross, bsDiagCross);

```


#### NB: Python doesn't support all Figures methods ####
