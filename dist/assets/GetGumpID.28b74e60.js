import{S as N,i as R,s as $,e,f as t,g as I,h as p,n as P,p as a}from"./vendor.47d6f2b6.js";function j(S){let l,C,f,w,k,d,m,b,r,D,o,A='<code class="language-pascal"><span class="token keyword">function</span> GetGumpID<span class="token punctuation">(</span>GumpIndex <span class="token punctuation">:</span> Integer<span class="token punctuation">)</span> <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span></code>',T,G,H,u,E=`<code class="language-pascal"><span class="token keyword">If</span> GetGumpsCount <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> GetGumpID<span class="token punctuation">(</span>GetGumpsCount<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">$15A7DDF</span> <span class="token keyword">then</span>
    CloseSimpleGump<span class="token punctuation">(</span>GetGumpsCount<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,L,x,M,i,q='<code class="language-pascal"></code>',_,y,v,c,B='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetGumpID</span><span class="token punctuation">(</span>GumpIndex<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> uint</code>';return{c(){l=e("h1"),l.textContent=`${F}`,C=t(),f=e("p"),f.innerHTML="Returns Gump ID for gump with list index <em>GumpIndex</em>",w=t(),k=e("p"),k.textContent="Returns 0 if gump index incorrect (out of gumps list) or char disconnected.",d=t(),m=e("p"),m.textContent="NB: GumpID CAN BE unique, but thats not a rule!",b=t(),r=e("p"),r.innerHTML="<strong>Pascal Syntax:</strong>",D=t(),o=e("pre"),T=t(),G=e("p"),G.textContent="Pascal Example:",H=t(),u=e("pre"),L=t(),x=e("p"),x.textContent="Pascal Example 2:",M=t(),i=e("pre"),_=t(),y=e("p"),y.innerHTML="<strong>Python Syntax:</strong>",v=t(),c=e("pre"),I(o,"class","language-pascal"),I(u,"class","language-pascal"),I(i,"class","language-pascal"),I(c,"class","language-python")},m(s,n){p(s,l,n),p(s,C,n),p(s,f,n),p(s,w,n),p(s,k,n),p(s,d,n),p(s,m,n),p(s,b,n),p(s,r,n),p(s,D,n),p(s,o,n),o.innerHTML=A,p(s,T,n),p(s,G,n),p(s,H,n),p(s,u,n),u.innerHTML=E,p(s,L,n),p(s,x,n),p(s,M,n),p(s,i,n),i.innerHTML=q,p(s,_,n),p(s,y,n),p(s,v,n),p(s,c,n),c.innerHTML=B},p:P,i:P,o:P,d(s){s&&a(l),s&&a(C),s&&a(f),s&&a(w),s&&a(k),s&&a(d),s&&a(m),s&&a(b),s&&a(r),s&&a(D),s&&a(o),s&&a(T),s&&a(G),s&&a(H),s&&a(u),s&&a(L),s&&a(x),s&&a(M),s&&a(i),s&&a(_),s&&a(y),s&&a(v),s&&a(c)}}}const z={title:"GetGumpID",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:F,published:Z,author:J,summary:K,layout:O}=z;class Q extends N{constructor(l){super();R(this,l,null,j,$,{})}}export{Q as default,z as metadata};
