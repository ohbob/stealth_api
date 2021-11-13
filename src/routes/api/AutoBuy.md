---
title: AutoBuy
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Applying for present buy lists, or set the hook for next incoming buy lists.
* "ItemType" can be any number, or $FFFF (-1) = any type
* "ItemColor" can be any number, or $FFFF (-1) = any color
* "Quantity" can be any number, or $FFFF (-1) = amount taking from buy list. If "Quantity" less than amount in sell list, then using "Quantity", else using amount from sell list.

This hook works NOT once, but will work until removed.

For hook removing need to set AutoBuy with "Quantity" param = 0.


Pascal

```pascal
procedure AutoBuy(ItemType : Word; ItemColor : Word; Quantity : Word)
```

Python

```python
AutoBuy(ItemType, ItemColor, Quantity)
```

Example 1:

```pascal
AutoBuy(NS,$FFFF,400); //will buy NS reagent of any color, all amount in buy list
```
