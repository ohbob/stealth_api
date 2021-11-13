---
title: AutoBuyEx
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
* "Price" can be any number, or $FFFF (-1) = any price
* "Name" must be exact name (including case!), or empty string for any name

This hook works NOT once, but will work until removed.

For hook removing need to set AutoBuy with "Quantity" param = 0.


Pascal

```pascal
procedure AutoBuyEx(ItemType : Word; ItemColor : Word; Quantity : Word; Price : Cardinal; Name : String)

```

Python

```python
AutoBuyEx(ItemType, ItemColor, Quantity, Price, ItemName)
```

Example 1:

```pascal
AutoBuyEx(NS,$FFFF,400,$FFFF,''); //will buy NS reagent of any color, all amount in buy list
```
