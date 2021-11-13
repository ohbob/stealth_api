---
title: GetZ
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns *Z* position for object *ObjID*


**Pascal Syntax:**

```pascal
function GetZ(ObjID : Cardinal) : Byte;
```
Pascal Example:
```pascal
procedure DropRuda;
var MaxMyWght : Word;
begin
  MaxMyWght:= MyWight + 30;   
  if MaxMyWght < Weight then    
  begin                  
    UseObject(Backpack); 
    wait(350);          
    if FindTypeEx($19B9,$0000 ,Backpack,false) > 0 then
    repeat
      rudapack:=FindTypeEx($19B9,$0000 ,Backpack,false);
      wait (100);
      Drop(rudapack, 10, GetX(self),GetY(self),GetZ(self));
      wait(350);
    until Weight < MaxMyWght
  end;
end;
```

**Python Syntax:**
```python
def GetZ(ObjID): --> ubyte
```