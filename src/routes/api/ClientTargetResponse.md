---
title: ClientTargetResponse
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns Target info from client (target request sent by [ClientRequestObjectTarget](Api/ClientRequestObjectTarget) or  [ClientRequestTileTarget](Api/ClientRequestTileTarget))


Pascal

```pascal
function ClientTargetResponse : TTargetInfo;
```
where 
  Ttargetinfo = record
    ID : Cardinal;
    Tile : Word;
    X, Y : Word;
    Z :  ShortInt;
  end;




Python
```python
def ClientTargetResponse() -> Dictionary
```
Returns a dictionary containing keys ['Tile', 'X', 'Z', 'Y', 'ID'].





Example Pascal

```pascal
procedure Fishing;
begin
    ClientPrint('Укажите точку ловли');
    ClientRequestTileTarget;
    WaitForClientTargetResponse(60000);
    if ClientTargetResponsePresent then
    begin
      tx:=ClientTargetResponse.X;
      ty:=ClientTargetResponse.Y;
      tz:=ClientTargetResponse.Z;
      if (tz=0) then tz:=GetZ(self);
      ClientPrint('Выбран тайл X:'+IntToStr(tx)+',Y:'+IntToStr(ty)+',Z:'+IntToStr(tz));
    end;
end;
``` 