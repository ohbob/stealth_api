---
title: ConsoleEntryUnicodeReply
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

This method is used for console output in UO Client. For example - rune renaming.

If you not sure, if ConsoleEntry or ConsoleEntryUnicode coming from server - check Journal, message about console entry will be printed there.

If Console Entry already received from server - this method will immediately send answer to server. If not received yet - the hook installing, and once Console Etry will come - it will be processed by this hook.


Pascal

```pascal
procedure ConsoleEntryUnicodeReply(Text : String)
```




Python
```python
def ConsoleEntryUnicodeReply(Text)
```





Example Pascal

```pascal
procedure renamebook(oldBook:integer;str:string);
begin
  RequestContextMenu(oldBook);
  SetContextMenuHook(oldBook, 0);
  wait(300);
  ConsoleEntryUnicodeReply((str));
  wait(300);
  bookstr:=GetCliLoc(oldBook);
  wait(300);
end;
```


