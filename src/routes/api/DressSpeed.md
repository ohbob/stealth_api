---
title: DressSpeed 
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Dress-Undress delay (between every item dress-undress)

Default = 100ms.

Value Limits: more than 10ms and lower than 10000ms




Pascal

```pascal
var DressSpeed:Word

```




Python
```python
def GetDressSpeed(): -> ushort
def SetDressSpeed(Value)
```



Example Pascal

```pascal
Program New;
begin
DressSpeed := 650;
SetDress;
Wait(1000);
AddToSystemJournal('Undress');
Undress;
Wait(1000)                   ;
AddToSystemJournal('Try Dress');
EquipDressSet();
end.```

