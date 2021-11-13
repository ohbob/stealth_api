---
title: Connected
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns status of the connection with the UO server: 'True - connected, 'False - not connected




Pascal

```pascal
function Connected:boolean

```




Python
```python
def Connected() -> Boolean
```


Example Pascal

```pascal
program test;
begin
if not Connected then 
begin Connect; 
wait(10000); 
end;
```
    



