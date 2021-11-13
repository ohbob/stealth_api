---
title: CheckLag
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Check Connection - send request and wait for answer *timeoutMS* milliseconds.

If timeout - return false, else - True.


Pascal

```pascal
function CheckLag(timeoutMS : Integer) : Boolean;
```

Example:
```pascal
begin
...
CheckLag(1000);
UseObject(runebook);
end.
```

## Python

```python
CheckLag(timeoutMS=10000)
```