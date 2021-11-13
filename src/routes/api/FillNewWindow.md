---
title: FillNewWindow
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Add string line to InfoWindow.

NB: Setting [SetSilentMode](Api/SetSilentMode) has no effect for this method.


Pascal

```pascal
procedure FillNewWindow(s : String);
```



Python
```python
def FillNewWindow(s)
```


Example Pascal
```pascal
var TL : TStringList;
    i : Integer;
begin
  SetSilentMode(False);
  TL := TStringList.Create;
  GetShopList(TL);
  if TL.Count > 0 then
    for i := 0 to TL.Count - 1 do
  FillNewWindow(TL.Strings[i]);  
end.
```