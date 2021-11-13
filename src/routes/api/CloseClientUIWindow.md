---
title: CloseClientUIWindow
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Close window with type ***UIWindowType** and  ***ID*** on connected Client.



Pascal

```pascal
procedure CloseClientUIWindow(UIWindowType : TUIWindowType;ID : Cardinal);

```
TUIWindowType = (wtPaperdoll, wtStatus, wtCharProfile, wtContainer);



Python
```python
def CloseClientUIWindow(UIWindowType, ID)
```

where UIWindowType is
```python
        {0: 0, '0': 0, 'wtpaperdoll': 0, 'paperdoll': 0,
        1: 1, '1': 1, 'wtstatus': 1, 'status': 1,
        2: 2, '2': 2, 'wtcharprofile': 2, 'charprofile': 2, 'profile': 2,
        3: 3, '3': 3, 'wtcontainer': 3, 'container': 3}
```