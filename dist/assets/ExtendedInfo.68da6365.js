import{S as F,i as A,s as B,e as a,f as o,g as T,h as e,n as v,p as t}from"./vendor.47d6f2b6.js";function G(H){let p,W,c,C,u,M,r,L='<code class="language-pascal"><span class="token keyword">function</span> ExtendedInfo <span class="token punctuation">:</span> TExtendedInfo<span class="token punctuation">;</span></code>',m,d,y,_,R,f,P,l,g='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetExtInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">dict</span></code>',S,x,E,k,w,I,D,i,b=`<code class="language-pascal"><span class="token keyword">procedure</span> GetPetsInfo<span class="token punctuation">;</span>
<span class="token keyword">var</span> ExtInfo <span class="token punctuation">:</span> TExtendedInfo<span class="token punctuation">;</span> 
<span class="token keyword">begin</span>
  ExtInfo <span class="token operator">:=</span> ExtendedInfo<span class="token punctuation">;</span>
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'I have '</span> <span class="token operator">+</span> IntToStr<span class="token punctuation">(</span>ExtInfo<span class="token punctuation">.</span>PetsCurrent<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">'/'</span> <span class="token operator">+</span> IntToStr<span class="token punctuation">(</span>ExtInfo<span class="token punctuation">.</span>PetsMax<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">' pets'</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){p=a("h1"),p.textContent=`${q}`,W=o(),c=a("p"),c.textContent="Returns extended info of char in SE++ version of UO (if is sent by server)",C=o(),u=a("p"),u.textContent="Pascal",M=o(),r=a("pre"),m=o(),d=a("p"),d.textContent="where",y=o(),_=a("p"),_.textContent=`TExtendedInfo = record
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
end;`,R=o(),f=a("p"),f.textContent="Python",P=o(),l=a("pre"),S=o(),x=a("p"),x.textContent=`Returns a dictionary containing keys
(\u2018MaxWeight\u2019, \u2018Race\u2019, \u2018StatCap\u2019, \u2018PetsCurrent\u2019, \u2018PetsMax\u2019,
\u2018FireResist\u2019, \u2018ColdResist\u2019, \u2018PoisonResist\u2019, \u2018EnergyResist\u2019,
\u2018Luck\u2019, \u2018DamageMin\u2019, \u2018DamageMax\u2019, \u2018Tithing_points\u2019,`,E=o(),k=a("p"),k.textContent=`\u2018ArmorMax\u2019, \u2018fireresistMax\u2019, \u2018coldresistMax\u2019,
\u2018poisonresistMax\u2019, \u2018energyresistMax\u2019, \u2018DefenseChance\u2019,
\u2018DefensceChanceMax\u2019, \u2018Hit_Chance_Incr\u2019, \u2018Damage_Incr\u2019,
\u2018Swing_Speed_Incr\u2019, \u2018Lower_Reagent_Cost\u2019, \u2018Spell_Damage_Incr\u2019,
\u2018Faster_Cast_Recovery\u2019, \u2018Faster_Casting\u2019, \u2018Lower_Mana_Cost\u2019,
\u2018HP_Regen\u2019, \u2018Stam_Regen\u2019, \u2018Mana_Regen\u2019, \u2018Reflect_Phys_Damage\u2019,
\u2018Enhance_Potions\u2019, \u2018Strength_Incr\u2019, \u2018Dex_Incr\u2019, \u2018Int_Incr\u2019,
\u2018HP_Incr\u2019, \u2018Mana_Incr\u2019)`,w=o(),I=a("p"),I.textContent="Example Pascal",D=o(),i=a("pre"),T(r,"class","language-pascal"),T(l,"class","language-python"),T(i,"class","language-pascal")},m(n,s){e(n,p,s),e(n,W,s),e(n,c,s),e(n,C,s),e(n,u,s),e(n,M,s),e(n,r,s),r.innerHTML=L,e(n,m,s),e(n,d,s),e(n,y,s),e(n,_,s),e(n,R,s),e(n,f,s),e(n,P,s),e(n,l,s),l.innerHTML=g,e(n,S,s),e(n,x,s),e(n,E,s),e(n,k,s),e(n,w,s),e(n,I,s),e(n,D,s),e(n,i,s),i.innerHTML=b},p:v,i:v,o:v,d(n){n&&t(p),n&&t(W),n&&t(c),n&&t(C),n&&t(u),n&&t(M),n&&t(r),n&&t(m),n&&t(d),n&&t(y),n&&t(_),n&&t(R),n&&t(f),n&&t(P),n&&t(l),n&&t(S),n&&t(x),n&&t(E),n&&t(k),n&&t(w),n&&t(I),n&&t(D),n&&t(i)}}}const j={title:"ExtendedInfo",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:q,published:J,author:O,summary:U,layout:V}=j;class Z extends F{constructor(p){super();A(this,p,null,G,B,{})}}export{Z as default,j as metadata};
