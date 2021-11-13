---
title: FindCount
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns the number of items found by using the functions [FindType](Api/FindType) or [FindTypeEx](Api/FindTypeEx)

If no objects found, or char disconnected - returns 0.

NB: Items stack, containing lot of items - will be counted as 1 item in this method.




Pascal

```pascal
function FindCount : Integer;
```



Python
```python
def FindCount(): -> int
```


Example Pascal
```pascal
  FindType(runes, backpack);
  AddAddToSystemJournal('Runes found:' + IntToStr(FindCount));
end.
```