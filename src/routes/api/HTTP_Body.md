---
title: Count
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

After calling [HTTP_Get](Api/HTTP_Get) or [HTTP_Post](Api/HTTP_Post) you can obrain returned body by using this method.

NB: If [HTTP_Get](Api/HTTP_Get) or [HTTP_Post](Api/HTTP_Post) not called before, or calling failed - returns '';

Pascal

```pascal
function HTTP_Body : String;
```




Python
```python
def HTTP_Body() -> string
```

