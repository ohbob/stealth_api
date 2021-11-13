---
title: GetContextMenu
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retuns last context menu items as strings. Format of result lines is "tag|clilocID|clilocText|flags|color", all numbers in hex.
Example of return:
```
0|6123|Open Paperdoll|0|0
1|6146|Talk|0|0
```

**Pascal Syntax:**

```pascal
procedure GetContextMenu(var list : TStringList);
```
Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!

Example:
```pascal
function SetContextMenu(Id: Cardinal; const MenuText: String): Boolean;
var StringList: TStringList; NextCLock: Int64; i: Integer;
begin
  Result := False;
  if GetType(Id) > 0 then begin
    StringList := TStringList.Create;
    NextClock := DateTimeToClock(Now)+1000;
    ClearContextMenu;
    RequestContextMenu(Id);
    while (DateTimeToClock(Now) < NextClock) do begin
      GetContextMenu(StringList);
      if StringList.Count > 0 then Break else Wait(1);
    end;
    for i := 0 to StringList.Count-1 do 
      if StrSub(StringList.Strings[i], MenuText, True) then 
      begin
        SetContextMenuHook(Id, i);
        Wait(1000);
        SetContextMenuHook(0, 0);		
        Result := True;
	Break;
      end;
    StringList.Free;	  
  end;
end;
```


**Python Syntax:**
```python
def GetContextMenu(): --> array of string
```
