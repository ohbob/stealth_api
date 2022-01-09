import{S as q,i as E,s as z,e as t,f as e,g as T,h as a,n as S,p}from"./vendor.47d6f2b6.js";function B(R){let o,x,i,H,r,N,m,_,f,I,y,v,l,J='<code class="language-pascal"><span class="token keyword">function</span> GetName<span class="token punctuation">(</span>ObjID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span></code>',C,d,G,c,P=`<code class="language-pascal"><span class="token keyword">function</span> GetSrvName<span class="token punctuation">(</span>Id<span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _HighJournal<span class="token punctuation">,</span> _Timer <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">Result</span> <span class="token operator">:=</span> GetCliloc<span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432\u0435\u0440\u0441\u0438\u0438 >4.x.x.x</span>
  <span class="token keyword">if</span> <span class="token keyword">Result</span> <span class="token operator">=</span> <span class="token string">''</span> <span class="token keyword">then</span> <span class="token keyword">begin</span>  <span class="token comment">// \u0414\u043B\u044F \u0441\u0442\u0430\u0440\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 &lt;4.x.x.x</span>
    <span class="token keyword">Result</span> <span class="token operator">:=</span> GetName<span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token keyword">Result</span> <span class="token operator">=</span> <span class="token string">'NoName'</span> <span class="token keyword">then</span> <span class="token keyword">begin</span> <span class="token comment">// \u0415\u0441\u043B\u0438 \u0438\u043C\u044F \u0441\u0440\u0430\u0437\u0443 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C</span>
      _HighJournal <span class="token operator">:=</span> HighJournal<span class="token punctuation">;</span> <span class="token comment">// \u0417\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0436\u0443\u0440\u043D\u0430\u043B\u0430</span>
      ClickOnObject<span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u041A\u043B\u0438\u043A\u0430\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430</span>
      _Timer <span class="token operator">:=</span> Timer<span class="token operator">+</span><span class="token number">15000</span><span class="token punctuation">;</span> <span class="token comment">// \u0417\u0430\u0434\u0430\u0435\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u0432\u0435\u0442\u0430 </span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>Timer <span class="token operator">&lt;</span> _Timer<span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span>_HighJournal <span class="token operator">=</span> HighJournal<span class="token punctuation">)</span> <span class="token keyword">do</span> Wait<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u0416\u0434\u0435\u043C, \u043A\u043E\u0433\u0434\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F \u0436\u0443\u0440\u043D\u0430\u043B</span>
      <span class="token keyword">Result</span> <span class="token operator">:=</span> GetName<span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u0415\u0441\u043B\u0438 \u0438\u043C\u044F \u043C\u043E\u0436\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C, \u0442\u043E \u043E\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,L,w,M,u,D='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetName</span><span class="token punctuation">(</span>ObjectID<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> string</code>',O,b,j,k,A='<code class="language-pascal"></code>';return{c(){o=t("h1"),o.textContent=`${W}`,x=e(),i=t("p"),i.innerHTML="<strong>Description:</strong>",H=e(),r=t("p"),r.innerHTML="Return name of object <em>ObjID</em>, or \u201CNoName\u201D if char not connected, or name not sent by server.",N=e(),m=t("p"),m.innerHTML='In some case need to use <a href="Api/ClickOnObject">ClickOnObject</a> to request name from server.',_=e(),f=t("p"),f.innerHTML='NB: \u201CName\u201D for items (not mobiles!) usually not sent for clientver 4++. In this case try to use <a href="Api/GetTooltip">GetTooltip</a>',I=e(),y=t("p"),y.innerHTML="<strong>Pascal Syntax:</strong>",v=e(),l=t("pre"),C=e(),d=t("p"),d.textContent="Pascal Example:",G=e(),c=t("pre"),L=e(),w=t("p"),w.innerHTML="<strong>Python Syntax:</strong>",M=e(),u=t("pre"),O=e(),b=t("p"),b.textContent="Pyton Example:",j=e(),k=t("pre"),T(l,"class","language-pascal"),T(c,"class","language-pascal"),T(u,"class","language-python"),T(k,"class","language-pascal")},m(s,n){a(s,o,n),a(s,x,n),a(s,i,n),a(s,H,n),a(s,r,n),a(s,N,n),a(s,m,n),a(s,_,n),a(s,f,n),a(s,I,n),a(s,y,n),a(s,v,n),a(s,l,n),l.innerHTML=J,a(s,C,n),a(s,d,n),a(s,G,n),a(s,c,n),c.innerHTML=P,a(s,L,n),a(s,w,n),a(s,M,n),a(s,u,n),u.innerHTML=D,a(s,O,n),a(s,b,n),a(s,j,n),a(s,k,n),k.innerHTML=A},p:S,i:S,o:S,d(s){s&&p(o),s&&p(x),s&&p(i),s&&p(H),s&&p(r),s&&p(N),s&&p(m),s&&p(_),s&&p(f),s&&p(I),s&&p(y),s&&p(v),s&&p(l),s&&p(C),s&&p(d),s&&p(G),s&&p(c),s&&p(L),s&&p(w),s&&p(M),s&&p(u),s&&p(O),s&&p(b),s&&p(j),s&&p(k)}}}const V={title:"GetName",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:W,published:$,author:F,summary:K,layout:Q}=V;class U extends q{constructor(o){super();E(this,o,null,B,z,{})}}export{U as default,V as metadata};