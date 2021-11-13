---
title: GetGlobal
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retuens value of variable *VarName* with the *VisibilityArea*. 

*VisibilityArea* can be 'char' or 'stealth'. 'Stealth' mean var, visible for all char in current Stealth instance. 'Char' - visible only for sripts of current chararter. *VisibilityArea* are non case-sensitive.


**Pascal Syntax:**

```pascal
function GetGlobal(VisibilityArea : String; VarName : String) : String;
```
Pascal Example 2:
```pascal
  If GetGlobal('stealth','ADogon')='1' then
  begin
    SetGlobal('stealth','ADogon','0');
    ClientPrint('Following cancelled');
  end
  else
  begin
    SetGlobal('stealth','Adogon','1');
    ClientPrint('Following activated');
  end;
```

Pascal Example 2:
```pascal
procedure WaitOpenContainer(serial, modelGump : integer);
begin
	SetEventProc(evDrawContainer, '');
	SetGlobal('char', 'Container', 'Open');
end;

procedure OpenContainer(serial : integer);
var
	startTime, waitTime : integer;
begin
	SetGlobal('char', 'Container', 'Closed');
	SetEventProc(evDrawContainer, 'WaitOpenContainer');
	CheckWorldSave(0);
	waitTime := 1000;
	startTime := GetTickCount();
	UseObject(serial);
	
	while (GetGlobal('char', 'Container') = 'Closed') and (GetTickCount() < (startTime + waitTime)) do
	begin
  	  Wait(1);
	end;
end;
```


**Python Syntax:**
```python
def GetGlobal(GlobalRegion, VarName): --> string
```