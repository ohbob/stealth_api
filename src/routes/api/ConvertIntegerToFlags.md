---
title: ConvertIntegerToFlags
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}

Translate the numeric bitmask value to the flags. 

Arguments:
 - Group - 1 for land, 2 for statics;
 - Value is the numeric value of flags.

This function is used for console output in UO Client. For example - rune renaming.

If you not sure, if ConsoleEntry or ConsoleEntryUnicode coming from server - check Journal, message about console entry will be printed there.

If Console Entry already received from server - this method will immediately send answer to server. If not received yet - the hook installing, and once Console Etry will come - it will be processed by this hook.

Pascal

```pascal
function ConvertIntegerToFlags(Group : byte; Value : LongWord) : TTileDataFlagSet
```

TTileDataFlagSet:

TTileDataFlags = (
tsfBackground,
tsfWeapon,
tsfTransparent,
tsfTranslucent,
tsfWall,
tsfDamaging,
tsfImpassable,
tsfWet,
tsfUnknown,
tsfSurface,
tsfBridge,
tsfGeneric,
tsfWindow,
tsfNoShoot,
tsfPrefixA,
tsfPrefixAn,
tsfInternal,
tsfFoliage,
tsfPartialHue,
tsfUnknown1,
tsfMap,
tsfContainer,
tsfWearable,
tsfLightSource,
tsfAnimated,
tsfNoDiagonal,
tsfUnknown2,
tsfArmor,
tsfRoof,
tsfDoor,
tsfStairBack,
tsfStairRight,
tlfTranslucent,
tlfWall,
tlfDamaging,
tlfImpassable,
tlfWet,
tlfSurface,
tlfBridge,
tlfPrefixA,
tlfPrefixAn,
tlfInternal,
tlfMap,
tlfUnknown3);
TTileDataFlagSet = set of TTileDataFlags;



Python
```python
def ConvertIntegerToFlags(Group, Flags) -> list
```
where Group is
```python
         {0: 0, 'tfLand': 0, 'tfland': 0, 'Land': 0, 'land': 0,
         1: 1, 'tfStatic': 1, 'tfstatic': 1, 'Static': 1, 'static': 1}
```
and result will be list of strings-flags.






Example Pascal

```pascal
Program New;
var   FlagSet: TTileDataFlagSet;
begin
// флаги, что соответствуют 67117569
// [tdfBackground,tdfSurface,tdfNoShoot,tdfUnknown2]
FlagSet:= ConvertIntegerToFlags(2, 67117569);
IF tdfSurface in FlagSet then
AddToSystemJournal('surface'); 
IF tdfImpassable in FlagSet then
AddToSystemJournal('impass'); 
end.```


