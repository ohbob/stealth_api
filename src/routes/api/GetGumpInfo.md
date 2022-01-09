---
title: GetGumpInfo
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns struct gumpInfo with FULL gump info for the gump with list index *GumpIndex*
 
**Pascal Syntax:**
```pascal
procedure GetGumpInfo(GumpIndex : Word; var gumpInfo : TGumpInfo);
```

<details>
<summary>Pascal TGumpInfo declaration:</summary>
```pascal
TGroup = record
  groupnumber : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TEndGroup = record
  groupnumber : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TPage = record
  Page : Integer;
  ElemNum : Integer;
end;

TMasterGump = record
  ID : Cardinal;
  ElemNum : Integer;
end;

TGumpButton = record
  x : Integer;
  y : Integer;
  released_id : Integer;
  pressed_id : Integer;
  quit : Integer;
  page_id : Integer;
  return_value : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TButtonTileArt = record
  x : Integer;
  y : Integer;
  released_id : Integer;
  pressed_id : Integer;
  quit : Integer;
  page_id : Integer;
  return_value : Integer;
  art_id : Integer;
  Hue : Integer;
  art_x : Integer;
  art_y : Integer;
  ElemNum : Integer;
end;

TCheckerTrans = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TCroppedText = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  color : Integer;
  text_id : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TGumpPic = record
  x : Integer;
  y : Integer;
  id : Integer;
  Hue : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TGumpPicTiled = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  gump_id : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TRadio = record
  x : Integer;
  y : Integer;
  released_id : Integer;
  pressed_id : Integer;
  status : Integer;
  return_value : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TCheckBox = record
  x : Integer;
  y : Integer;
  released_id : Integer;
  pressed_id : Integer;
  status : Integer;
  return_value : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TResizePic = record
  x : Integer;
  y : Integer;
  gump_id : Integer;
  width : Integer;
  height : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TGumpText = record
  x : Integer;
  y : Integer;
  color : Integer;
  text_id : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TTextEntry = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  color : Integer;
  return_value : Integer;
  default_text_id : Integer;
  Value : String;
  Page : Integer;
  ElemNum : Integer;
end;

TTilePic = record
  x : Integer;
  y : Integer;
  id : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TTilePicHue = record
  x : Integer;
  y : Integer;
  id : Integer;
  color : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TTooltip = record
  Cliloc_ID : Cardinal;
  Arguments : String;
  Page : Integer;
  ElemNum : Integer;
end;

THtmlGump = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  text_id : Integer;
  background : Integer;
  scrollbar : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TXmfHTMLGump = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  Cliloc_id : Cardinal;
  background : Integer;
  scrollbar : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TXmfHTMLGumpColor = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  Cliloc_id : Cardinal;
  background : Integer;
  scrollbar : Integer;
  Hue : Integer;
  Page : Integer;
  ElemNum : Integer;
end;

TXmfHTMLTok = record
  x : Integer;
  y : Integer;
  width : Integer;
  height : Integer;
  background : Integer;
  scrollbar : Integer;
  Color : Integer;
  Cliloc_id : Cardinal;
  Arguments : String;
  Page : Integer;
  ElemNum : Integer;
end;

TItemProperty = record
  Prop : Cardinal;
  ElemNum : Integer;
end;

TUnknownItem = record
  CmdName : String;
  Arguments : String;
  ElemNum : Integer;
end;

TGumpInfo = record
  Serial : Cardinal;
  GumpID : Cardinal;
  X : SmallInt;
  Y : SmallInt;
  Pages : Integer;
  NoMove : Boolean;
  NoResize : Boolean;
  NoDispose : Boolean;
  NoClose : Boolean;
  Groups : array of TGroup;
  EndGroups : array of TEndGroup;
  GumpButtons : array of TGumpButton;
  ButtonTileArts : array of TButtonTileArt;
  CheckBoxes : array of TCheckBox;
  CheckerTrans : array of TCheckerTrans;
  CroppedText : array of TCroppedText;
  GumpPics : array of TGumpPic;
  GumpPicTiled : array of TGumpPicTiled;
  RadioButtons : array of TRadio;
  ResizePics : array of TResizePic;
  GumpText : array of TGumpText;
  TextEntries : array of TTextEntry;
  Text : array of string;
  TextEntriesLimited : array of TTextEntry;
  TilePics : array of TTilePic;
  TilePicHue : array of TTilePicHue;
  Tooltips : array of TTooltip;
  HtmlGump : array of THtmlGump;
  XmfHtmlGump : array of TXmfHtmlGump;
  XmfHTMLGumpColor : array of TXmfHTMLGumpColor;
  XmfHTMLTok : array of TXmfHTMLTok;
  ItemProperties : array of TItemProperty;
end;
</details>
```


Pascal Example:
```pascal
var gi : TGumpInfo;
begin
  GetGumpInfo(0, gi);
  AddToSystemJournal('Gump has ' + IntToStr(Length(gi.GumpButtons)) + ' buttons');
end;
```


**Python Syntax:**
def GetGumpInfo(GumpIndex): --> dict of struct
```python

```
Pyton Example:
```python
import pprint
 
gumpdictDebug = open (r'' + StealthPath() +'gumpDict.log', 'w')
pp = pprint.PrettyPrinter(width=150, indent=1, stream=gumpdictDebug)
pp.pprint(GetGumpInfo(0))
 
# Output dictionary
{'GumpButtons': [{'ElemNum': 3, 'Page': 0, 'page_id': 0, 'pressed_id': 4007, 'quit': 1, 'released_id': 4005, 'return_value': 1, 'x': 60, 'y': 95},
                 {'ElemNum': 5, 'Page': 0, 'page_id': 0, 'pressed_id': 4019, 'quit': 1, 'released_id': 4017, 'return_value': 0, 'x': 285, 'y': 95}],
 'GumpID': -1817877309,
 'NoClose': False,
 'NoDispose': False,
 'NoMove': False,
 'NoResize': False,
 'Pages': 1,
 'ResizePics': [{'ElemNum': 1, 'Page': 0, 'gump_id': 2600, 'height': 135, 'width': 500, 'x': 10, 'y': 10}],
 'Serial': 346764,
 'X': 0,
 'XmfHtmlGump': [{'Cliloc_id': 1006046, 'ElemNum': 2, 'Page': 0, 'background': 1, 'height': 55, 'scrollbar': 1, 'width': 420, 'x': 52, 'y': 35},
                 {'Cliloc_id': 1006044, 'ElemNum': 4, 'Page': 0, 'background': 0, 'height': 35, 'scrollbar': 0, 'width': 150, 'x': 95, 'y': 96},
                 {'Cliloc_id': 1006045, 'ElemNum': 6, 'Page': 0, 'background': 0, 'height': 35, 'scrollbar': 0, 'width': 150, 'x': 320, 'y': 96}],
 'Y': 0}
```