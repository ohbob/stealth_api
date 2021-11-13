---
title: AutoSell
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Applying for present sell lists, or set the hook for next incoming sell lists.
* "ItemType" can be any number, or $FFFF (-1) = any type
* "ItemColor" can be any number, or $FFFF (-1) = any color
* "Quantity" can be any number, or $FFFF (-1) = amount taking from sell list. If "Quantity" less than amount in sell list, then using "Quantity", else using amount from sell list.


This hook works NOT once, but will work until removed.

For hook removing need to set AutoSell with "Quantity" param = 0. 


Pascal

```pascal
procedure AutoSell(ItemType : Word; ItemColor : Word; Quantity : Word)
```

Python

```python
AutoSell(ItemType, ItemColor, Quantity)
```

Example 1:

```pascal
AutoSell($E21,$FFFF,40); //sell 40 items with type $E21, any color
```
