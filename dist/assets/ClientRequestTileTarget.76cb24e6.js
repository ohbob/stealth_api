import{S as z,i as H,s as I,e,f as p,g,h as a,n as q,p as t}from"./vendor.47d6f2b6.js";function L(P){let o,y,i,C,k,d,r,m,l,S='<code class="language-pascal"><span class="token keyword">procedure</span> ClientRequestTileTarget<span class="token punctuation">;</span></code>',w,f,R,u,_='<code class="language-python">ClientRequestTileTarget<span class="token punctuation">(</span><span class="token punctuation">)</span></code>',b,T,x,c,v=`<code class="language-pascal"><span class="token keyword">procedure</span> Fishing<span class="token punctuation">;</span>
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
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=e("h1"),o.textContent=`${Z}`,y=p(),i=e("p"),i.textContent=`Sending a tile target request to connected Client.
This method using only for targettting tiles, not objects.`,C=p(),k=e("p"),k.innerHTML='Result (Targettted tile) can be obtained by <a href="Api/ClientTargetResponse">ClientTargetResponse</a> method.',d=p(),r=e("p"),r.textContent="Pascal",m=p(),l=e("pre"),w=p(),f=e("p"),f.textContent="Python",R=p(),u=e("pre"),b=p(),T=e("p"),T.textContent="Example Pascal",x=p(),c=e("pre"),g(l,"class","language-pascal"),g(u,"class","language-python"),g(c,"class","language-pascal")},m(s,n){a(s,o,n),a(s,y,n),a(s,i,n),a(s,C,n),a(s,k,n),a(s,d,n),a(s,r,n),a(s,m,n),a(s,l,n),l.innerHTML=S,a(s,w,n),a(s,f,n),a(s,R,n),a(s,u,n),u.innerHTML=_,a(s,b,n),a(s,T,n),a(s,x,n),a(s,c,n),c.innerHTML=v},p:q,i:q,o:q,d(s){s&&t(o),s&&t(y),s&&t(i),s&&t(C),s&&t(k),s&&t(d),s&&t(r),s&&t(m),s&&t(l),s&&t(w),s&&t(f),s&&t(R),s&&t(u),s&&t(b),s&&t(T),s&&t(x),s&&t(c)}}}const M={title:"ClientRequestTileTarget",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:Z,published:A,author:F,summary:X,layout:Y}=M;class E extends z{constructor(o){super();H(this,o,null,L,I,{})}}export{E as default,M as metadata};
