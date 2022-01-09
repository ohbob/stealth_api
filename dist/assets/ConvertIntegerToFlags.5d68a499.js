import{S as $,i as K,s as Q,e,f as p,g as v,h as a,n as R,p as t}from"./vendor.47d6f2b6.js";function X(j){let l,I,f,A,k,D,r,P,m,L,y,W,b,M,d,U,o,q='<code class="language-pascal"><span class="token keyword">function</span> ConvertIntegerToFlags<span class="token punctuation">(</span>Group <span class="token punctuation">:</span> byte<span class="token punctuation">;</span> Value <span class="token punctuation">:</span> LongWord<span class="token punctuation">)</span> <span class="token punctuation">:</span> TTileDataFlagSet</code>',_,T,g,w,H,C,B,u,z='<code class="language-python"><span class="token keyword">def</span> <span class="token function">ConvertIntegerToFlags</span><span class="token punctuation">(</span>Group<span class="token punctuation">,</span> Flags<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">list</span></code>',E,S,G,i,O=`<code class="language-python">         <span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'tfLand'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'tfland'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'Land'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'land'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'tfStatic'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'tfstatic'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Static'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'static'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span></code>`,N,x,J,F,V,c,Z=`<code class="language-pascal"><span class="token keyword">Program</span> <span class="token keyword">New</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>   FlagSet<span class="token punctuation">:</span> TTileDataFlagSet<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
<span class="token comment">// \u0444\u043B\u0430\u0433\u0438, \u0447\u0442\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 67117569</span>
<span class="token comment">// [tdfBackground,tdfSurface,tdfNoShoot,tdfUnknown2]</span>
FlagSet<span class="token operator">:=</span> ConvertIntegerToFlags<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">67117569</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">IF</span> tdfSurface <span class="token operator">in</span> FlagSet <span class="token keyword">then</span>
AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'surface'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">IF</span> tdfImpassable <span class="token operator">in</span> FlagSet <span class="token keyword">then</span>
AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'impass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">.</span>&#96;&#96;&#96;


</code>`;return{c(){l=e("h1"),l.textContent=`${h}`,I=p(),f=e("p"),f.textContent="Translate the numeric bitmask value to the flags.",A=p(),k=e("p"),k.textContent="Arguments:",D=p(),r=e("ul"),r.innerHTML=`<li>Group - 1 for land, 2 for statics;</li> 
<li>Value is the numeric value of flags.</li>`,P=p(),m=e("p"),m.textContent="This function is used for console output in UO Client. For example - rune renaming.",L=p(),y=e("p"),y.textContent="If you not sure, if ConsoleEntry or ConsoleEntryUnicode coming from server - check Journal, message about console entry will be printed there.",W=p(),b=e("p"),b.textContent="If Console Entry already received from server - this method will immediately send answer to server. If not received yet - the hook installing, and once Console Etry will come - it will be processed by this hook.",M=p(),d=e("p"),d.textContent="Pascal",U=p(),o=e("pre"),_=p(),T=e("p"),T.textContent="TTileDataFlagSet:",g=p(),w=e("p"),w.textContent=`TTileDataFlags = (
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
TTileDataFlagSet = set of TTileDataFlags;`,H=p(),C=e("p"),C.textContent="Python",B=p(),u=e("pre"),E=p(),S=e("p"),S.textContent="where Group is",G=p(),i=e("pre"),N=p(),x=e("p"),x.textContent="and result will be list of strings-flags.",J=p(),F=e("p"),F.textContent="Example Pascal",V=p(),c=e("pre"),v(o,"class","language-pascal"),v(u,"class","language-python"),v(i,"class","language-python"),v(c,"class","language-pascal")},m(n,s){a(n,l,s),a(n,I,s),a(n,f,s),a(n,A,s),a(n,k,s),a(n,D,s),a(n,r,s),a(n,P,s),a(n,m,s),a(n,L,s),a(n,y,s),a(n,W,s),a(n,b,s),a(n,M,s),a(n,d,s),a(n,U,s),a(n,o,s),o.innerHTML=q,a(n,_,s),a(n,T,s),a(n,g,s),a(n,w,s),a(n,H,s),a(n,C,s),a(n,B,s),a(n,u,s),u.innerHTML=z,a(n,E,s),a(n,S,s),a(n,G,s),a(n,i,s),i.innerHTML=O,a(n,N,s),a(n,x,s),a(n,J,s),a(n,F,s),a(n,V,s),a(n,c,s),c.innerHTML=Z},p:R,i:R,o:R,d(n){n&&t(l),n&&t(I),n&&t(f),n&&t(A),n&&t(k),n&&t(D),n&&t(r),n&&t(P),n&&t(m),n&&t(L),n&&t(y),n&&t(W),n&&t(b),n&&t(M),n&&t(d),n&&t(U),n&&t(o),n&&t(_),n&&t(T),n&&t(g),n&&t(w),n&&t(H),n&&t(C),n&&t(B),n&&t(u),n&&t(E),n&&t(S),n&&t(G),n&&t(i),n&&t(N),n&&t(x),n&&t(J),n&&t(F),n&&t(V),n&&t(c)}}}const Y={title:"ConvertIntegerToFlags",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:h,published:sn,author:an,summary:tn,layout:en}=Y;class pn extends ${constructor(l){super();K(this,l,null,X,Q,{})}}export{pn as default,Y as metadata};
