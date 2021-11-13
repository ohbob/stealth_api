---
title: GetTooltipRec
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retuns tooltip for object wth id *ObjID* as record with ClilocID and params, ClilocID=0 and params empty if no tooltip.
Synonym for [GetCliloc](Api/GetCliloc)


**Pascal Syntax:**

```pascal
function GetToolTipRec(ObjID : Cardinal) : TClilocRec;

TClilocRec = packed record
   Count : Cardinal;
   Items : array of TClilocItemRec;
end;
 
TClilocItemRec = packed record
   ClilocID : Cardinal;
   Params : array of String;
 end;
```
Pascal Example:
```pascal
Program New;
var
aa : TClilocRec;
bb : TClilocItemRec;
i,k : Integer;
begin
aa := GetToolTipRec(BackPack);
AddToSystemJournal('Total lines in Toolptip: ' + IntToStr(aa.Count));
if aa.count > 0 then
for i := 0 to aa.Count - 1 do
begin
AddToSystemJournal('Line ' + IntToStr(i) + ': ');
bb := aa.Items[i]; 
AddToSystemJournal('Cliloc: $' + IntToHex(bb.ClilocID,8));
AddToSystemJournal('Cliloc text: ' + GetClilocByID(bb.ClilocID));
for k := 0 to Length(bb.Params) - 1 do
AddToSystemJournal('Param-' + IntToStr(k) + ': "'
+ bb.Params[k] + '"');
end;
```

**Python Syntax:**
```python
def GetTooltipRec(ObjID): --> list
```
