---
title: GetLandTilesArray
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Search of Land tile *TileType* in bound, limited by *Xmin*, *Ymin*, *Xmax*, *Ymax*, founded tiles added to *FoundTilesArray*. Returns found amount.

**Pascal Syntax:**

```pascal
function GetLandTilesArray(Xmin, Ymin, Xmax, Ymax : Word; WorldNum : byte; TileType : Word; var FoundTilesArray : TFoundTilesArray) : Word;

TFoundTile = record
  Tile : Word;
  X : SmallInt;
  Y : SmallInt;
  Z : ShortInt;
end;

TFoundTilesArray = Array[0..999] of TFoundTile;
```

Pascal Example:
```pascal

```


**Python Syntax:**
```python
def GetLandTilesArray(Xmin, Ymin, Xmax, Ymax, WorldNum, TileTypes):  --> list
```

Python Example:
```python
ResourceTiles = set(); Stack = []

def FindResources():
  TilesCache = []
  global ResourceTiles
  for i in [3274, 3275, 3276, 3277, 3280, 3283, 3286, 3289, 3291, 3292, 3294, 3295, 3296, 3299, 3302, 3394, 3395, 3417, 3440, 3461, 4792, 4793, 4794, 4795]:
    for t, x, y, z in GetStaticTilesArray(GetX(Self()) - 50, GetY(Self()) - 50, GetX(Self()) + 50, GetY(Self()) + 50, WorldNum(), i):
      TilesCache.append((t, x, y, z, 'Logs'))
  for i in range(1339, 1359):
    for t, x, y, z in GetStaticTilesArray(GetX(Self()) - 50, GetY(Self()) - 50, GetX(Self()) + 50, GetY(Self()) + 50, WorldNum(), i):
      TilesCache.append((t, x, y, z, 'Ingots'))
  for i in [240, 241, 242, 243]:
    for t, x, y, z in GetLandTilesArray(GetX(Self()) - 50, GetY(Self()) - 50, GetX(Self()) + 50, GetY(Self()) + 50, WorldNum(), i):
      TilesCache.append((t, x, y, z, 'Ingots'))
  ResourceTiles |= set(TilesCache)
```