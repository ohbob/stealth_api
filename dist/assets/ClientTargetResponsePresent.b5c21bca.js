import{S as v,i as z,s as S,e,f as p,g as b,h as a,n as P,p as t}from"./vendor.47d6f2b6.js";function j(g){let o,T,i,y,r,C,l,x='<code class="language-pascal"><span class="token keyword">function</span> ClientTargetResponsePresent <span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span></code>',d,k,w,c,q='<code class="language-python"><span class="token keyword">def</span> <span class="token function">ClientTargetResponsePresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Boolean</code>',m,f,R,u,_=`<code class="language-pascal"><span class="token keyword">procedure</span> Fishing<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
    ClientPrint<span class="token punctuation">(</span><span class="token string">'\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u043E\u0447\u043A\u0443 \u043B\u043E\u0432\u043B\u0438'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ClientRequestTileTarget<span class="token punctuation">;</span>
    WaitForClientTargetResponse<span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> ClientTargetResponsePresent <span class="token keyword">then</span>
    <span class="token keyword">begin</span>
      tx<span class="token operator">:=</span>ClientTargetResponse<span class="token punctuation">.</span>X<span class="token punctuation">;</span>
      ty<span class="token operator">:=</span>ClientTargetResponse<span class="token punctuation">.</span>Y<span class="token punctuation">;</span>
      tz<span class="token operator">:=</span>ClientTargetResponse<span class="token punctuation">.</span>Z<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tz<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">then</span> tz<span class="token operator">:=</span>GetZ<span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ClientPrint<span class="token punctuation">(</span><span class="token string">'\u0412\u044B\u0431\u0440\u0430\u043D \u0442\u0430\u0439\u043B X:'</span><span class="token operator">+</span>IntToStr<span class="token punctuation">(</span>tx<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">',Y:'</span><span class="token operator">+</span>IntToStr<span class="token punctuation">(</span>ty<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">',Z:'</span><span class="token operator">+</span>IntToStr<span class="token punctuation">(</span>tz<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=e("h1"),o.textContent=`${I}`,T=p(),i=e("p"),i.innerHTML='Check, if object\\tile is already targetted, or not yet (target request sent by <a href="Api/ClientRequestObjectTarget">ClientRequestObjectTarget</a> or  <a href="Api/ClientRequestTileTarget">ClientRequestTileTarget</a>)',y=p(),r=e("p"),r.textContent="Pascal",C=p(),l=e("pre"),d=p(),k=e("p"),k.textContent="Python",w=p(),c=e("pre"),m=p(),f=e("p"),f.textContent="Example Pascal",R=p(),u=e("pre"),b(l,"class","language-pascal"),b(c,"class","language-python"),b(u,"class","language-pascal")},m(s,n){a(s,o,n),a(s,T,n),a(s,i,n),a(s,y,n),a(s,r,n),a(s,C,n),a(s,l,n),l.innerHTML=x,a(s,d,n),a(s,k,n),a(s,w,n),a(s,c,n),c.innerHTML=q,a(s,m,n),a(s,f,n),a(s,R,n),a(s,u,n),u.innerHTML=_},p:P,i:P,o:P,d(s){s&&t(o),s&&t(T),s&&t(i),s&&t(y),s&&t(r),s&&t(C),s&&t(l),s&&t(d),s&&t(k),s&&t(w),s&&t(c),s&&t(m),s&&t(f),s&&t(R),s&&t(u)}}}const H={title:"ClientTargetResponsePresent",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:I,published:M,author:Z,summary:A,layout:B}=H;class F extends v{constructor(o){super();z(this,o,null,j,S,{})}}export{F as default,H as metadata};
