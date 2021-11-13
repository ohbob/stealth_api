---
title: GetTitle
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Return name of object *ObjID*

If char disconnected, or no paperdoll open for *ObjID* - return empty string.

Use [UseObject](Api/UseObject) to request paperdoll from server.

Example of result: 'The Lord Che-Burashka, Grandmaster Chef'

NB: Even if WarMode = True, execution of UseObject will not attack mobile.

**Pascal Syntax:**

```pascal
function GetTitle(ObjID : Cardinal) : String;
```
Pascal Example:
```pascal
function GetProfile(Id: Cardinal): String;
var _Timer : Integer;
begin
  Result := GetTitle(Id);
  if (Result = '') and IsMobile(Id) then begin
    UseObject(Id);
    _Timer := Timer+15000; // Задаем максимальное время ожидания ответа 
    while (Timer < _Timer) and (GetTitle(Id) = '') do Wait(100); // Ждем, когда истечет тамаут или обновиться GetTitle
    Result := GetTitle(Id);// Если титул можно узнать, то он будет возвращен
  end
end;
```

**Python Syntax:**
```python
def GetTitle(ObjID): --> string
```