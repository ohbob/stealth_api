import{S as j,i as q,s as z,e as t,f as e,g as b,h as a,n as I,p}from"./vendor.47d6f2b6.js";function A(L){let l,w,i,d,f,x,r,v,o,P='<code class="language-pascal"><span class="token keyword">function</span> Backpack<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>Cardinal</code>',_,m,B,u,D='<code class="language-python">Backpack<span class="token punctuation">(</span><span class="token punctuation">)</span></code>',T,y,M,c,S=`<code class="language-pascal"><span class="token keyword">if</span> Count<span class="token punctuation">(</span>runes<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token keyword">then</span>
<span class="token keyword">begin</span>
   MoveItem<span class="token punctuation">(</span>runestack <span class="token punctuation">,</span><span class="token number">10</span><span class="token operator">-</span>Count<span class="token punctuation">(</span>runes<span class="token punctuation">)</span><span class="token punctuation">,</span> Backpack<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,E,C,H,k,$=`<code class="language-pascal"><span class="token keyword">if</span> Count<span class="token punctuation">(</span>runes<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token keyword">then</span>
<span class="token keyword">begin</span>
   FindType<span class="token punctuation">(</span>$ EED<span class="token punctuation">,</span> Backpack<span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){l=t("h1"),l.textContent=`${O}`,w=e(),i=t("p"),i.textContent="Returns backpack ID (of Current Character)",d=e(),f=t("p"),f.textContent="If disconnected from UO server - returns 0.",x=e(),r=t("p"),r.textContent="Pascal",v=e(),o=t("pre"),_=e(),m=t("p"),m.textContent="Python",B=e(),u=t("pre"),T=e(),y=t("p"),y.textContent="Example 1:",M=e(),c=t("pre"),E=e(),C=t("p"),C.textContent="Example 2:",H=e(),k=t("pre"),b(o,"class","language-pascal"),b(u,"class","language-python"),b(c,"class","language-pascal"),b(k,"class","language-pascal")},m(s,n){a(s,l,n),a(s,w,n),a(s,i,n),a(s,d,n),a(s,f,n),a(s,x,n),a(s,r,n),a(s,v,n),a(s,o,n),o.innerHTML=P,a(s,_,n),a(s,m,n),a(s,B,n),a(s,u,n),u.innerHTML=D,a(s,T,n),a(s,y,n),a(s,M,n),a(s,c,n),c.innerHTML=S,a(s,E,n),a(s,C,n),a(s,H,n),a(s,k,n),k.innerHTML=$},p:I,i:I,o:I,d(s){s&&p(l),s&&p(w),s&&p(i),s&&p(d),s&&p(f),s&&p(x),s&&p(r),s&&p(v),s&&p(o),s&&p(_),s&&p(m),s&&p(B),s&&p(u),s&&p(T),s&&p(y),s&&p(M),s&&p(c),s&&p(E),s&&p(C),s&&p(H),s&&p(k)}}}const F={title:"Backpack",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:O,published:U,author:V,summary:Z,layout:G}=F;class J extends j{constructor(l){super();q(this,l,null,A,z,{})}}export{J as default,F as metadata};
