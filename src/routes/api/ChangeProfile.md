---
title: ChangeProfile
published: 2020-06-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog

---

# {title}


Change current profile to profile with name *ProfileName*

Keep in mind then following:

* The current character must be disconnected
* Only one script should be running
* Specified profile must exist. Important - profile name is case sensitive.



If the profile is successful, the function returns 0, otherwise returns an error code:

* -1 Internal error
* -2 Char connected or is in the process of connecting
* -3 More than one script is running
* -4 The specified profile does not exist

Pascal

```pascal
function ChangeProfile(ProfileName : String) : Integer
```



Python

```python
ChangeProfile(ProfileName)
```



Example

```pascal
Disconnect;
ChangeProfile('Test1')
Connect;
```
