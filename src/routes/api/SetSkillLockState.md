---
title: SetSkillLockState
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Change skill lock state. 

Possible *skillState* values: 0 - skill will increase, 1 - skill will decrease, 2 - skill locked.

<details>
<summary>Default Skill names(can be changes on custom shards):</summary>
```pascal
'Alchemy'
'Anatomy'
'Animal Lore'
'Item ID'
'Arms Lore'
'Parrying'
'Begging'
'Blacksmithing'
'Bowcraft'
'Peacemaking'
'Camping'
'Carpentry'
'Cartography'
'Cooking'
'Detect Hidden'
'Enticement'
'Evaluate Intelligence'
'Healing'
'Fishing'
'Forensic Evaluation'
'Herding'
'Hiding'
'Provocation'
'Inscription'
'Lockpicking'
'Magery'
'Magic Resistance'
'Tactics'
'Snooping'
'Musicianship'
'Poisoning'
'Archery'
'Spirit Speak'
'Stealing'
'Tailoring'
'Animal Taming'
'Taste Identification'
'Tinkering'
'Tracking'
'Veterinary'
'Swordsmanship'
'Mace Fighting'
'Fencing'
'Wrestling'
'Lumberjacking'
'Mining'
'Meditation'
'Stealth'
'Remove Trap'
'Necromancy'
'Focus'
'Chivalry'
'Bushido'
'Ninjitsu'
'Spellweaving'
'Mysticism'
'Imbuing'
'Throwing'
```</details>

**Pascal Syntax:**

```pascal
procedure SetSkillLockState(SkillName : String; skillState : Byte);
```	

**Python Syntax:**
```python
def ChangeSkillLockState(SkillName, skillState):
```