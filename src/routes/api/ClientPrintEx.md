---
title: ClientPrintEx
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Sending text line to connected Client, Extended version of [ClientPrint](Api/ClientPrint))
You can set:
* SenderID (ID of object, text will be shown above of it). 0 means text will be in lower left corner of the screen
* Color - Text color. 0 mean default color.
* Font - Font type. 0 mean default font.


NB: This text sending only to client, not to server!


Pascal

```pascal
procedure ClientPrintEx(SenderID: Cardinal; Color: Word; Font: Word; Text: String);
```



Python
```python
ClientPrintEx(SenderID, Color, Font, Text)
```


Example Pascal

```pascal
PROGRAM Test;
begin
//some preparation
  ClientPrintEx(SelfID, 0, 0, 'Script loaded :)');
//main script body
 
end.
``` 