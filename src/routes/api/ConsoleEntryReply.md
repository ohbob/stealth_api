---
title: ConsoleEntryReply
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

This function is used for console output in UO Client. For example - rune renaming.

If you not sure, if ConsoleEntry or ConsoleEntryUnicode coming from server - check Journal, message about console entry will be printed there.

If Console Entry already received from server - this method will immediately send answer to server. If not received yet - the hook installing, and once Console Etry will come - it will be processed by this hook.

Pascal

```pascal
procedure ConsoleEntryReply(Text : String)
```




Python
```python
def ConsoleEntryReply(Text)
```





Example Python

```python
etContextMenuHook(book_to_rename_ID, 0)  # ставим ловушку на автовыбор "Name Book"
RequestContextMenu(book_to_rename_ID)     # вызываем контекстное меню книги
Wait(1500)                                # немного ждем на всякий случай
ConsoleEntryReply(("New book name"+"\r")) # вводим новое название книги
```


