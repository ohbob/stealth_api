import{S as z,i as H,s as L,e,f as p,g as P,h as a,n as S,p as t}from"./vendor.47d6f2b6.js";function M(Z){let o,C,i,d,r,w,l,_='<code class="language-pascal"><span class="token keyword">function</span> ClientTargetResponse <span class="token punctuation">:</span> TTargetInfo<span class="token punctuation">;</span></code>',R,k,m,f,x,u,g='<code class="language-python"><span class="token keyword">def</span> <span class="token function">ClientTargetResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Dictionary</code>',b,T,I,y,q,c,v=`<code class="language-pascal"><span class="token keyword">procedure</span> Fishing<span class="token punctuation">;</span>
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
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=e("h1"),o.textContent=`${Y}`,C=p(),i=e("p"),i.innerHTML='Returns Target info from client (target request sent by <a href="Api/ClientRequestObjectTarget">ClientRequestObjectTarget</a> or  <a href="Api/ClientRequestTileTarget">ClientRequestTileTarget</a>)',d=p(),r=e("p"),r.textContent="Pascal",w=p(),l=e("pre"),R=p(),k=e("p"),k.textContent=`where
Ttargetinfo = record
ID : Cardinal;
Tile : Word;
X, Y : Word;
Z :  ShortInt;
end;`,m=p(),f=e("p"),f.textContent="Python",x=p(),u=e("pre"),b=p(),T=e("p"),T.textContent="Returns a dictionary containing keys [\u2018Tile\u2019, \u2018X\u2019, \u2018Z\u2019, \u2018Y\u2019, \u2018ID\u2019].",I=p(),y=e("p"),y.textContent="Example Pascal",q=p(),c=e("pre"),P(l,"class","language-pascal"),P(u,"class","language-python"),P(c,"class","language-pascal")},m(n,s){a(n,o,s),a(n,C,s),a(n,i,s),a(n,d,s),a(n,r,s),a(n,w,s),a(n,l,s),l.innerHTML=_,a(n,R,s),a(n,k,s),a(n,m,s),a(n,f,s),a(n,x,s),a(n,u,s),u.innerHTML=g,a(n,b,s),a(n,T,s),a(n,I,s),a(n,y,s),a(n,q,s),a(n,c,s),c.innerHTML=v},p:S,i:S,o:S,d(n){n&&t(o),n&&t(C),n&&t(i),n&&t(d),n&&t(r),n&&t(w),n&&t(l),n&&t(R),n&&t(k),n&&t(m),n&&t(f),n&&t(x),n&&t(u),n&&t(b),n&&t(T),n&&t(I),n&&t(y),n&&t(q),n&&t(c)}}}const X={title:"ClientTargetResponse",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:Y,published:A,author:D,summary:W,layout:F}=X;class O extends z{constructor(o){super();H(this,o,null,M,L,{})}}export{O as default,X as metadata};