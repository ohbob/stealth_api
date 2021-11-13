---
title: GetGetStaticTileDataLandTileData
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Detailed information about Static tile, including Flags and Name.

NB: In PS you can use method [AnsiByteArrayToString](Api/AnsiByteArrayToString) to convert "array of Char" to "String"

**Pascal Syntax:**
```pascal
function GetStaticTileData(Tile : Word) : TStaticTileData;

TStaticTileData = record
  Flags : Int64;
  Weight : Word;
  AnimID : Word;
  Height : Integer;
  RadarColorRGBA : Cardinal;
  Name : array[0..19] of Char;
end;
```
Pascal Example:
```pascal
var S : String;
    zz: TStaticTileData;
begin
  zz := (GetStaticTileData($449))
  S:= AnsiByteArrayToString(zz.Name);  
  AddToSystemJournal(S);
END.
```


**Python Syntax:**
```python
def GetStaticTileData(Tile): --> dict
```