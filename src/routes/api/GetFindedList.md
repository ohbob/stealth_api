---
title: GetFindedList
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Fill UserList by search results. If found nothing, returns false and empty list, else true.

Search can be done with [FindType](Api/FindType), [FindTypeEx](Api/FindTypeEx), [FindNotoriety](Api/FindNotoriety), etc

WARNING! IDs in list in hex!

NB: Starting from version 7.9.0 function [GetFoundItems](Api/GetFoundItems) available, returns array of found items.

**Pascal Syntax:**

```pascal
function GetFindedList(var UserList : TStringList) : Boolean;
```
Warning: var with type TStringList should be created before calling GetFindedList and be disposed after!  


Pascal Example 1:
```pascal
function GetFoundItemsFromStringList(var Items: Array Of Cardinal): Integer;
var List: TStringList; i: Integer;
begin
  List := TStringList.Create;
  if GetFindedList(List) = False then Result := 0
  else begin
    SetLength(Items, List.Count);
    for i := 0 to Length(Items)-1 do Items[i] := StrToInt('$'+List.Strings[i]);
    Result := Length(Items);
  end;
  List.Free;
end;
```

**Python Syntax:**
#### NB: Python doesn't support this method ####
See [GetFoundList](Api/GetFoundList)
