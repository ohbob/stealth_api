---
title: EmptyContainer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Move all items from ***Container*** to container ***DestContainer*** with delay between movements ***DelayMS***

If source container is empty - returns false, else result of method = resulf of moveitems.



Pascal

```pascal
function EmptyContainer(Container : Cardinal;DestContainer : Cardinal;DelayMS : Word) : Boolean;
```

Python

```python
def EmptyContainer(Container, DestContainer, delay_ms): -> bool
```

Example Python:

```python
def loot( lootBag = Backpack() ):
  if openContainer(corpse):
    EmptyContainer(corpse, lootBag, 5/10)
```
