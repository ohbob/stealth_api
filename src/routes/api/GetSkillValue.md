---
title: GetSkillValue
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Return skill value. 

If char disconnected - return 0


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
function GetSkillValue(SkillName : String) : ShortInt;
```	
Pascal Example:
```pascal
    Useskill('Inscription');
    Wait(250);
    
    SkillValue := GetSkillValue('Inscription');
    
    if ( SkillValue >= 33 ) and ( SkillValue < 43 )then begin
      WaitMenu('Escolha um circulo','Magias do Circulo 2');
      Wait(3000);
      WaitMenu('Que magia quer escrever','Strength');
    end;
    
    if ( SkillValue >= 43 ) and ( SkillValue < 53 ) then begin
      WaitMenu('Escolha um circulo','Magias do Circulo 3');
      Wait(3000);
      WaitMenu('Que magia quer escrever','Wall of Stone'); 
    end;
//etc.
```

**Python Syntax:**
```python
def GetSkillValue(SkillName): --> byte
```
