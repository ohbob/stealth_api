---
title: CheckLOS
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Check LineOfSight-LOS between 2 point.

Params:
* xf, yf, zf - source point,
* xt, yt, zt - dest point,
* WorldNum - number of World (can be obtained by using WorldNum method)
* LOSCheckType  - **Python-only** :  expected type of emulator - "Sphere", "SphereAdv","Pol" or "RunUO"
* LOSOptions   - **Python-only** :  set of options. Can be : "SphereCheckCorners", "PolUseNoShoot", "PolLosThroughWindow" or None.

## Pascal ##

```pascal
function CheckLOS(xf : Integer; yf : Integer; zf : Integer; xt : Integer; yt : Integer; zt : Integer; WorldNum : Byte) : Boolean;
```
LOSOptions setted by PS variable, named "LOSOptions". Its not a parameter of this method!

LOSOptions MUST BE set before calling CheckLOS!


LOSOptions value can be:

losTypeSphere = 1;

losTypeSphereAdv = 2;

losTypeRunUO = 3;

losTypePOL = 4;


and modifiers:

losSphereCheckCorners = 256; //actual only for Sphere

losPolUseNoShoot= 512; //actual only for POL

losPolLOSThroughWindow = 1024; //actual only for POL


Example:
```pascal
begin
LOSOptions := losTypePOL OR losPolUseNoShoot;
CheckLOS(GetX(Self),GetY(Self),GetZ(Self),GetX(Self)+10,GetY(Self)+10,GetZ(Self),WorldNum);
end.
```

## Python

```python
CheckLOS(xf, yf, zf, xt, yt, zt, WorldNum, LOSCheckType, LOSOptions=None) -> Boolean
```


Example Python

```python
CheckLOS(GetX(Self),GetY(Self),GetZ(Self),GetX(Self)+10,GetY(Self)+10,GetZ(Self),WorldNum, "Pol", {"PolUseNoShoot", "PolLosThroughWindow"});
```
