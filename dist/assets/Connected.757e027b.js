import{S as M,i as S,s as j,e as t,f as p,g as v,h as e,n as _,p as a}from"./vendor.47d6f2b6.js";function q(T){let o,d,i,y,k,m,l,P=`<code class="language-pascal"><span class="token keyword">function</span> Connected<span class="token punctuation">:</span>boolean
</code>`,w,f,C,u,H='<code class="language-python"><span class="token keyword">def</span> <span class="token function">Connected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Boolean</code>',x,r,b,c,L=`<code class="language-pascal"><span class="token keyword">program</span> test<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
<span class="token keyword">if</span> <span class="token operator">not</span> Connected <span class="token keyword">then</span> 
<span class="token keyword">begin</span> Connect<span class="token punctuation">;</span> 
wait<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=t("h1"),o.textContent=`${A}`,d=p(),i=t("p"),i.textContent="Returns status of the connection with the UO server: \u2018True - connected, \u2018False - not connected",y=p(),k=t("p"),k.textContent="Pascal",m=p(),l=t("pre"),w=p(),f=t("p"),f.textContent="Python",C=p(),u=t("pre"),x=p(),r=t("p"),r.textContent="Example Pascal",b=p(),c=t("pre"),v(l,"class","language-pascal"),v(u,"class","language-python"),v(c,"class","language-pascal")},m(s,n){e(s,o,n),e(s,d,n),e(s,i,n),e(s,y,n),e(s,k,n),e(s,m,n),e(s,l,n),l.innerHTML=P,e(s,w,n),e(s,f,n),e(s,C,n),e(s,u,n),u.innerHTML=H,e(s,x,n),e(s,r,n),e(s,b,n),e(s,c,n),c.innerHTML=L},p:_,i:_,o:_,d(s){s&&a(o),s&&a(d),s&&a(i),s&&a(y),s&&a(k),s&&a(m),s&&a(l),s&&a(w),s&&a(f),s&&a(C),s&&a(u),s&&a(x),s&&a(r),s&&a(b),s&&a(c)}}}const z={title:"Connected",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:A,published:E,author:F,summary:I,layout:O}=z;class R extends M{constructor(o){super();S(this,o,null,q,j,{})}}export{R as default,z as metadata};