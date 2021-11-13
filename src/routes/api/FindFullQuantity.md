---
title: FindFullQuantity
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns total amount of items found by using the functions [FindType](Api/FindType) or [FindTypeEx](Api/FindTypeEx)

If no objects found, or char disconnected - returns 0.

NB: Including in result all items in Items stacks.




Pascal

```pascal
function FindFullQuantity : Integer;
```



Python
```python
def FindFullQuantity(): -> int
```


Example Pascal
```pascal
FindType(BM, backpack);
  AddAddToSystemJournal('BM total found:' + IntToStr(FindFullQuantity));
```