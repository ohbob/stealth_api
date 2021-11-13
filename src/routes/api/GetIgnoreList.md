---
title: GetIgnoreList
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Fill UserList by ids from IgnoreList in string format. If IgnoreList is empty, returns false and empty list, else true.

IgnoreList filled up by [Ignore](Api/Ignore) and [IgnoreOff](Api/IgnoreOff), cleaned by [IgnoreReset](Api/IgnoreReset)

WARNING! IDs in list in hex!


**Pascal Syntax:**

```pascal
function GetIgnoreList(var UserList : TStringList) : Boolean;
```
Warning: var with type TStringList should be created before calling GetIgnoreList and be disposed after!  


Pascal Example 1:
```pascal
//that is used for demonstration purpose only, you can use IgnoreOff without this check.
procedure RemoveFromIgnoreList(ID : Cardinal);
var List: TStringList; i: Integer;
begin
  List := TStringList.Create;
  if GetIgnoreList(List) = False then Exit;
  if List.IndexOf(IntToHex(ID,8)) = -1 then
    IgnoreOff(ID);
  end;
  List.Free;
end;
```

**Python Syntax:**
```python
def GetIgnoreList(): --> dict of string
```

