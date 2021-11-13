---
title: GetGumpShortLines
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retrieve info about 3 gump elements for the gump with list index *GumpIndex*

Returns nothing if gump index incorrect (out of gumps list) or char disconnected.

Method is similar to [GetGumpButtonsDescription](Api/GetGumpButtonsDescription) and [GetGumpFullLines](Api/GetGumpFullLines), but contains info ONLY for:
a)TextEntries
b)TextLines
c)Buttons

**Pascal Syntax:**

```pascal
procedure GetGumpShortLines(GumpIndex : Integer; var TL : TStringList);
```
Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!  

Pascal Example:
```pascal
var 
b : TStringList; 
i,k : Integer; 

Begin 
b := TStringList.Create; 
for i := 0 to GetGumpsCount - 1 do 
begin  
  GetGumpShortLines(i,b); 
  if b.Count > 0 then
  begin
    for k := 0 to b.Count - 1 do   
      if b.Strings[i] = 'xxx' then
      //some work here  
  end; 
end;
b.free; 
End.
```

**Python Syntax:**
```python
def GetGumpShortLines(GumpIndex): --> list of string
```