---
title: GumpAutoTextEntry
published: 2021-10-05T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Set hook for ONE incoming gump and check ALL existing gumps in stealth gump list for containing TextEntryID with **"return_value"** *RadiobuttonID*, if found - changing its **"Value"** to *Value*.

NB: This method does NOT send a gump reply to server, it's just changing checkboxes status values. For reply to gump use [WaitGump](Api/WaitGump) or [NumGumpButton](Api/NumGumpButton)

Pascal

```pascal
procedure GumpAutoTextEntry(TextEntryID : Integer; Value : String);
```


Pascal Example:
```pascal
begin
    WaitTargetGround($1BF5);  
    GumpAutoTextEntry(1537, "10"); //set hook for gump TextEntry with return_value 1537, to set its value to 10 (amount of items to be done)
    WaitGump('7956');   //set hook for gump button with return_value 7956. If found - send gump reply.
    UseObject(FindType($1EB9,backpack));//use hammer for receiving gump.
end;
```




Python

```python
def GumpAutoTextEntry(TextEntryID, Value)
```


