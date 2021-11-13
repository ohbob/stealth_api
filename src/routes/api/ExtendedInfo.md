---
title: ExtendedInfo
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Returns extended info of char in SE++ version of UO (if is sent by server)


Pascal

```pascal
function ExtendedInfo : TExtendedInfo;
```
where 

TExtendedInfo = record
  MaxWeight : Word;
  Race : Byte;
  StatCap : Word;
  PetsCurrent : Byte;
  PetsMax : Byte;
  FireResist : Word;
  ColdResist : Word;
  PoisonResist : Word;
  EnergyResist : Word;
  Luck : SmallInt;
  DamageMin : Word;
  DamageMax : Word;
  Tithing_points : Cardinal;
  ArmorMax : Word;
  fireresistMax : Word;
  coldresistMax : Word;
  poisonresistMax : Word;
  energyresistMax : Word;
  DefenseChance : Word;
  DefensceChanceMax : Word;
  Hit_Chance_Incr : Word;
  Damage_Incr : Word;
  Swing_Speed_Incr : Word;
  Lower_Reagent_Cost : Word;
  Spell_Damage_Incr : Word;
  Faster_Cast_Recovery : Word;
  Faster_Casting : Word;
  Lower_Mana_Cost : Word;
  HP_Regen : Word;
  Stam_Regen : Word;
  Mana_Regen : Word;
  Reflect_Phys_Damage : Word;
  Enhance_Potions : Word;
  Strength_Incr : Word;
  Dext_Incr : Word;
  Int_Incr : Word;
  HP_Incr : Word;
  Stam_Incr : Word;
  Mana_Incr : Word;
end;





Python
```python
def GetExtInfo(): -> dict
```
Returns a dictionary containing keys 
            ('MaxWeight', 'Race', 'StatCap', 'PetsCurrent', 'PetsMax',
            'FireResist', 'ColdResist', 'PoisonResist', 'EnergyResist',
            'Luck', 'DamageMin', 'DamageMax', 'Tithing_points',

            'ArmorMax', 'fireresistMax', 'coldresistMax',
            'poisonresistMax', 'energyresistMax', 'DefenseChance',
            'DefensceChanceMax', 'Hit_Chance_Incr', 'Damage_Incr',
            'Swing_Speed_Incr', 'Lower_Reagent_Cost', 'Spell_Damage_Incr',
            'Faster_Cast_Recovery', 'Faster_Casting', 'Lower_Mana_Cost',
            'HP_Regen', 'Stam_Regen', 'Mana_Regen', 'Reflect_Phys_Damage', 
            'Enhance_Potions', 'Strength_Incr', 'Dex_Incr', 'Int_Incr',
            'HP_Incr', 'Mana_Incr')





Example Pascal

```pascal
procedure GetPetsInfo;
var ExtInfo : TExtendedInfo; 
begin
  ExtInfo := ExtendedInfo;
  AddToSystemJournal('I have ' + IntToStr(ExtInfo.PetsCurrent)+'/' + IntToStr(ExtInfo.PetsMax)+' pets')
end;
``` 