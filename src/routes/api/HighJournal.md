---
title: GetMana
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns index of last line in Journal (UO journal, not systemjournal)

**Pascal Syntax:**

```pascal
function HighJournal : Integer;
```

Pascal Example:
```pascal
procedure onSpeech( const text:String; senderName:String; senderID:Cardinal );
var
  journalText:String;
  journalTextColor:Word;
  guardZoneName:String;
begin 
  journalText := Journal( HighJournal() );
  journalTextColor := LineTextColor();
        
  AddToSystemJournal
  ('onSpeech [ senderID:$' + IntToHex( senderID, 8 ) + 
                  ', senderName:''' + senderName +  
                  ''', text:''' + text + 
                  ''', lineTextColor:$' + IntToHex( journalTextColor, 4 ) + 
                  ', journalText:' + journalText + ' ]' 
  );  
end;
```

**Python Syntax:**
```python
def HighJournal(): --> int
```
