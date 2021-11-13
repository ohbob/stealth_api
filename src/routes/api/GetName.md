---
title: GetName
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

**Description:**


Return name of object *ObjID*, or "NoName" if char not connected, or name not sent by server.

In some case need to use [ClickOnObject](Api/ClickOnObject) to request name from server.

NB: "Name" for items (not mobiles!) usually not sent for clientver 4++. In this case try to use [GetTooltip](Api/GetTooltip)


**Pascal Syntax:**

```pascal
function GetName(ObjID : Cardinal) : String;
```
Pascal Example:
```pascal
function GetSrvName(Id: Cardinal): String;
var _HighJournal, _Timer : Integer;
begin
  Result := GetCliloc(Id); // Для клиентов версии >4.x.x.x
  if Result = '' then begin  // Для старых клиентов <4.x.x.x
    Result := GetName(Id);
    if Result = 'NoName' then begin // Если имя сразу выяснить не удалось
      _HighJournal := HighJournal; // Запоминаем последнюю строку журнала
      ClickOnObject(Id); // Кликаем, чтобы получить ответ от сервера
      _Timer := Timer+15000; // Задаем максимальное время ожидания ответа 
      while (Timer < _Timer) and (_HighJournal = HighJournal) do Wait(100); // Ждем, когда измениться журнал
      Result := GetName(Id); // Если имя можно узнать, то оно будет возвращено
    end;
  end;
end;
```

**Python Syntax:**
```python
def GetName(ObjectID): --> string
```

Pyton Example:
```pascal

```