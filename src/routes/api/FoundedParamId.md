---
title: FoundedParamId
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns index of matched param in multi-params line in [WaitJournalLine](Api/WaitJournalLine), [InJournal](Api/InJournal) and similar methods.

For example, search line is "create|make|destroy|already". Found in journal string with word "destroy". FoundedParamId will returns 2.

If no strings found, or char disconnected - returns 0.






Pascal

```pascal
function FoundedParamID : Integer;
```




Python
```python
def FoundedParamID(): -> int
```





Example Python
```python
    WaitJournalLine(datetime.now()-timedelta(milliseconds=1), 'Polymorph|наложено|lack', 1000)
    found = FoundedParamID()
    if found == 1:
      castTargetAndWait('Dispel')
```
