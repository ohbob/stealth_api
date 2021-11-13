---
title: CurrentLine
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns the number of current script line, useful for debug.

Pascal

```pascal
function CurrentLine : Integer;

```




Python
this method is not applicable to Python.





Example Pascal

```pascal
 if something_wrong_happens then
   AddToSystemJournal('Problem in line ' + CurrentLine.ToString);
```


