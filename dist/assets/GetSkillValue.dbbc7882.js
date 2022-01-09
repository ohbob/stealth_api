import{S as P,i as A,s as E,e as p,f as e,g as V,h as a,n as I,p as t}from"./vendor.47d6f2b6.js";function _(x){let o,y,u,d,k,S,r,M,m,w,l,H='<code class="language-pascal"><span class="token keyword">function</span> GetSkillValue<span class="token punctuation">(</span>SkillName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> ShortInt<span class="token punctuation">;</span></code>',b,f,T,i,L=`<code class="language-pascal">    Useskill<span class="token punctuation">(</span><span class="token string">'Inscription'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Wait<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    SkillValue <span class="token operator">:=</span> GetSkillValue<span class="token punctuation">(</span><span class="token string">'Inscription'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span> SkillValue <span class="token operator">>=</span> <span class="token number">33</span> <span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span> SkillValue <span class="token operator">&lt;</span> <span class="token number">43</span> <span class="token punctuation">)</span><span class="token keyword">then</span> <span class="token keyword">begin</span>
      WaitMenu<span class="token punctuation">(</span><span class="token string">'Escolha um circulo'</span><span class="token punctuation">,</span><span class="token string">'Magias do Circulo 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Wait<span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      WaitMenu<span class="token punctuation">(</span><span class="token string">'Que magia quer escrever'</span><span class="token punctuation">,</span><span class="token string">'Strength'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span> SkillValue <span class="token operator">>=</span> <span class="token number">43</span> <span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span> SkillValue <span class="token operator">&lt;</span> <span class="token number">53</span> <span class="token punctuation">)</span> <span class="token keyword">then</span> <span class="token keyword">begin</span>
      WaitMenu<span class="token punctuation">(</span><span class="token string">'Escolha um circulo'</span><span class="token punctuation">,</span><span class="token string">'Magias do Circulo 3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Wait<span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      WaitMenu<span class="token punctuation">(</span><span class="token string">'Que magia quer escrever'</span><span class="token punctuation">,</span><span class="token string">'Wall of Stone'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token comment">//etc.</span></code>`,v,g,C,c,W='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetSkillValue</span><span class="token punctuation">(</span>SkillName<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> byte</code>';return{c(){o=p("h1"),o.textContent=`${G}`,y=e(),u=p("p"),u.textContent="Return skill value.",d=e(),k=p("p"),k.textContent="If char disconnected - return 0",S=e(),r=p("details"),r.innerHTML=`<summary>Default Skill names(can be changes on custom shards):</summary>
\`\`\`pascal
&#39;Alchemy&#39;
&#39;Anatomy&#39;
&#39;Animal Lore&#39;
&#39;Item ID&#39;
&#39;Arms Lore&#39;
&#39;Parrying&#39;
&#39;Begging&#39;
&#39;Blacksmithing&#39;
&#39;Bowcraft&#39;
&#39;Peacemaking&#39;
&#39;Camping&#39;
&#39;Carpentry&#39;
&#39;Cartography&#39;
&#39;Cooking&#39;
&#39;Detect Hidden&#39;
&#39;Enticement&#39;
&#39;Evaluate Intelligence&#39;
&#39;Healing&#39;
&#39;Fishing&#39;
&#39;Forensic Evaluation&#39;
&#39;Herding&#39;
&#39;Hiding&#39;
&#39;Provocation&#39;
&#39;Inscription&#39;
&#39;Lockpicking&#39;
&#39;Magery&#39;
&#39;Magic Resistance&#39;
&#39;Tactics&#39;
&#39;Snooping&#39;
&#39;Musicianship&#39;
&#39;Poisoning&#39;
&#39;Archery&#39;
&#39;Spirit Speak&#39;
&#39;Stealing&#39;
&#39;Tailoring&#39;
&#39;Animal Taming&#39;
&#39;Taste Identification&#39;
&#39;Tinkering&#39;
&#39;Tracking&#39;
&#39;Veterinary&#39;
&#39;Swordsmanship&#39;
&#39;Mace Fighting&#39;
&#39;Fencing&#39;
&#39;Wrestling&#39;
&#39;Lumberjacking&#39;
&#39;Mining&#39;
&#39;Meditation&#39;
&#39;Stealth&#39;
&#39;Remove Trap&#39;
&#39;Necromancy&#39;
&#39;Focus&#39;
&#39;Chivalry&#39;
&#39;Bushido&#39;
&#39;Ninjitsu&#39;
&#39;Spellweaving&#39;
&#39;Mysticism&#39;
&#39;Imbuing&#39;
&#39;Throwing&#39;
\`\`\``,M=e(),m=p("p"),m.innerHTML="<strong>Pascal Syntax:</strong>",w=e(),l=p("pre"),b=e(),f=p("p"),f.textContent="Pascal Example:",T=e(),i=p("pre"),v=e(),g=p("p"),g.innerHTML="<strong>Python Syntax:</strong>",C=e(),c=p("pre"),V(l,"class","language-pascal"),V(i,"class","language-pascal"),V(c,"class","language-python")},m(n,s){a(n,o,s),a(n,y,s),a(n,u,s),a(n,d,s),a(n,k,s),a(n,S,s),a(n,r,s),a(n,M,s),a(n,m,s),a(n,w,s),a(n,l,s),l.innerHTML=H,a(n,b,s),a(n,f,s),a(n,T,s),a(n,i,s),i.innerHTML=L,a(n,v,s),a(n,g,s),a(n,C,s),a(n,c,s),c.innerHTML=W},p:I,i:I,o:I,d(n){n&&t(o),n&&t(y),n&&t(u),n&&t(d),n&&t(k),n&&t(S),n&&t(r),n&&t(M),n&&t(m),n&&t(w),n&&t(l),n&&t(b),n&&t(f),n&&t(T),n&&t(i),n&&t(v),n&&t(g),n&&t(C),n&&t(c)}}}const F={title:"GetSkillValue",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:G,published:N,author:j,summary:q,layout:D}=F;class R extends P{constructor(o){super();A(this,o,null,_,E,{})}}export{R as default,F as metadata};
