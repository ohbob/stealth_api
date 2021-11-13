---
title: ClientRequestObjectTarget
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Sending an object target request to connected Client.
This method using only for targettting objects, not tiles.


Result (Targettted object) can be obtained by [ClientTargetResponse](Api/ClientTargetResponse) method.

Pascal

```pascal
procedure ClientRequestObjectTarget;
```



Python
```python
ClientRequestObjectTarget()
```


Example Pascal

```pascal
procedure AttackObj;
begin
  ClientRequestObjectTarget;
  
  while not ClientTargetResponsePresent do
    Wait(100);
  
  Attack(ClientTargetResponse.Id);
end;
``` 