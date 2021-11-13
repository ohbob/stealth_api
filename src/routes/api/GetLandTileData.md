---
title: GetLandTileData
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Detailed information about Land tile, including Flags and Name.

NB: *Tile* can be obtained from [GetMapCell](Api/GetMapCell) method
NB: In PS you can use method [AnsiByteArrayToString](Api/AnsiByteArrayToString) to convert "array of Char" to "String"

**Pascal Syntax:**
```pascal
function GetLandTileData(Tile : Word) : TLandTileData;

TLandTileData = record
  Flags : Cardinal;
  Flags2 : Cardinal;
  TextureID : Word;
  Name : array[0..19] of Char;
end;
```
Pascal Example:
```pascal
var S : String;
    zz: TLandTileData;
begin
  zz := GetLandTileData($49);
  S:= AnsiByteArrayToString(zz.Name);  
  AddToSystemJournal(S);
END.
```


**Python Syntax:**
```python
def GetCell(X, Y, WorldNum): --> dict
```
