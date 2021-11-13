---
title: AutoMenu
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Reusable trap for the menu. Works the same as  [WaitMenu](Api/WaitMenu), but runs continuously.

NB: ElementCaption can be:

  1) (sub)string of element

  2) '(any)' or '(random)' - random element will be selected

  3) '(X)', where X - some number = index, will be selected Element with this index (if exists). Numeration starts from 1, not from 0 !

  4) '(first)', '(second)', '(last)' = 1st element, 2nd, and last.

  5) '(cancel)' - menu will be cancelled.

Pascal

```pascal
procedure AutoMenu(MenuCaption, ElementCaption : String)
```

Python

```python
AutoMenu(MenuCaption, ElementCaption)
```
