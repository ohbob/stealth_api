import{S as H,i as L,s as M,e,f as p,g as C,h as a,n as O,p as t}from"./vendor.47d6f2b6.js";function _(v){let l,y,i,d,k,w,r,b,o,T='<code class="language-pascal"><span class="token keyword">function</span> GetAltName<span class="token punctuation">(</span>ObjID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span></code>',A,f,N,u,j=`<code class="language-pascal">fAltName <span class="token operator">:=</span> GetAltName<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> fAltName <span class="token operator">=</span> <span class="token string">''</span> <span class="token keyword">then</span>
<span class="token keyword">begin</span>
  ClickOnObject<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  wait<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fAltName <span class="token operator">:=</span> GetAltName<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,x,m,S,c,G='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetAltName</span><span class="token punctuation">(</span>ObjectID<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> string</code>';return{c(){l=e("h1"),l.textContent=`${D}`,y=p(),i=e("p"),i.textContent="Returns character \u201Calternative name\u201D. Depends from server it can contains title, guild, profession or anything else, or be empty.",d=p(),k=e("p"),k.innerHTML='NB: Sometimes you should call <a href="Api/ClickOnObject">ClickOnObject</a> for filling \u201CName\u201D and \u201CAltName\u201D fields.',w=p(),r=e("p"),r.innerHTML="<strong>Pascal Syntax:</strong>",b=p(),o=e("pre"),A=p(),f=e("p"),f.textContent="Pascal Example:",N=p(),u=e("pre"),x=p(),m=e("p"),m.innerHTML="<strong>Python Syntax:</strong>",S=p(),c=e("pre"),C(o,"class","language-pascal"),C(u,"class","language-pascal"),C(c,"class","language-python")},m(s,n){a(s,l,n),a(s,y,n),a(s,i,n),a(s,d,n),a(s,k,n),a(s,w,n),a(s,r,n),a(s,b,n),a(s,o,n),o.innerHTML=T,a(s,A,n),a(s,f,n),a(s,N,n),a(s,u,n),u.innerHTML=j,a(s,x,n),a(s,m,n),a(s,S,n),a(s,c,n),c.innerHTML=G},p:O,i:O,o:O,d(s){s&&t(l),s&&t(y),s&&t(i),s&&t(d),s&&t(k),s&&t(w),s&&t(r),s&&t(b),s&&t(o),s&&t(A),s&&t(f),s&&t(N),s&&t(u),s&&t(x),s&&t(m),s&&t(S),s&&t(c)}}}const P={title:"GetAltName",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:D,published:q,author:z,summary:B,layout:E}=P;class R extends H{constructor(l){super();L(this,l,null,_,M,{})}}export{R as default,P as metadata};