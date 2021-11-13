---
title: GetGumpFullLines
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Retrieve info about 3 gump elements for the gump with list index *GumpIndex*

Returns nothing if gump index incorrect (out of gumps list) or char disconnected.

Method is similar to [GetGumpButtonsDescription](Api/GetGumpButtonsDescription) and [GetGumpShortLines](Api/GetGumpShortLines), but contains FULL gump info, including all elements and text lines.


<details>
<summary>Example of method work:</summary>
```pascal
Serial: 1A1B9F <br>
GumpID: 11CC34F <br>
X: 0000 <br>
Y: 0000 <br>
Pages: 13 <br>
Gump Options: NoDispose NoClose <br>
 <br>
GumpPics: X Y ID  Page <br>
GumpPic: 480  367  2443  0 <br>
 <br>
TilePics: X   Y   ID   Page <br>
0   TilePic: 80  94  5099  2 <br>
1   TilePic: 230  94  5103  2 <br>
... <br>
47   TilePic: 230  184  5176  12 <br>
48   TilePic: 80  274  5181  12 <br>
 <br>
ResizePics: X   Y   ID   Width   Height   Page <br>
0   ResizePic: 20  20  5054  540  40  0 <br>
1   ResizePic: 20  60  5054  360  300  0 <br>
2   ResizePic: 380  60  5054  180  300  0 <br>
3   ResizePic: 20  360  5054  540  70  0 <br>
 <br>
 <br>
CheckBoxes: X   Y   Released_ID  Pressed_ID   Status   Return_value   Page <br>
0   CheckBox: 140  395  210  211  0  1537  0 <br>
 <br>
 <br>
GumpTexts: X   Y   Color   Text_ID   Page <br>
0   GumpText: 159  30  51  0  0 <br>
1   GumpText: 60  371  900  1  0 <br>
... <br>
61   GumpText: 223  229  900  62  12 <br>
62   GumpText: 73  319  900  63  12 <br>
 <br>
TextEntries: X   Y   Width   Height   Status   Color   Return_value   Default_text_id   Page <br>
0   TextEntry: 487  370  100  30  0  513  5  0 <br>
 <br>
Text Lines: <br>
BLACKSMITH SELECTION MENU <br>
Make last (ringmail gloves) <br>
Repair Item <br>
Hardening <br>
How Many? <br>
1 <br>
 <br>
... <br>
 <br>
War Hammer <br>
Hammer Pick <br>
 <br>
GumpButtons: X   Y   Released_ID  Pressed_ID   Quit   Page_ID   Return_value   Page <br>
0   GumpButton: 40  372  208  209  1  0  1025  0 <br>
1   GumpButton: 40  395  208  209  1  0  1026  0 <br>
... <br>
50   GumpButton: 200  164  1209  1210  1  0  5176  12 <br>
51   GumpButton: 50  254  1209  1210  1  0  5180  12<br>
```</details>

**Pascal Syntax:**

```pascal
procedure GetGumpFullLines(GumpIndex : Integer; var TL : TStringList);
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
  GetGumpFullLines(i,b); 
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
def GetGumpFullLines(GumpIndex): --> list of string
```
