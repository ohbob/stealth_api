---
title: ClientRequestTileTarget
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Sending a tile target request to connected Client.
This method using only for targettting tiles, not objects.


Result (Targettted tile) can be obtained by [ClientTargetResponse](Api/ClientTargetResponse) method.

Pascal

```pascal
procedure ClientRequestTileTarget;
```



Python
```python
ClientRequestTileTarget()
```


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