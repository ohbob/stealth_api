import{S as J,i as q,s as z,e as t,f as l,g as L,h as e,n as S,p as a}from"./vendor.47d6f2b6.js";function B(G){let p,w,f,x,r,T,k,M,y,_,o,P='<code class="language-pascal"><span class="token keyword">function</span> GetLayer<span class="token punctuation">(</span>ObjID<span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span> <span class="token punctuation">:</span> Byte<span class="token punctuation">;</span></code>',j,m,H,u,O=`<code class="language-pascal"><span class="token keyword">if</span> GetLayer<span class="token punctuation">(</span>my_relik_shield_ID'<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">then</span> 
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'My mega-shiled not found'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'My mega-shiled found!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,v,d,C,i,A='<code class="language-pascal"></code>',D,b,I,c,E='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetLayer</span><span class="token punctuation">(</span>Obj<span class="token punctuation">)</span><span class="token punctuation">:</span> ubyte</code>';return{c(){p=t("h1"),p.textContent=`${V}`,w=l(),f=t("p"),f.innerHTML="<strong>Description:</strong>",x=l(),r=t("p"),r.innerHTML="Returns layer, where object with ID <em>ObjID</em> located (Enumerates all character layers and compare object in this layer with <em>ObjID</em>)",T=l(),k=t("p"),k.textContent="if character disonnected, or object not found - returns 0.",M=l(),y=t("p"),y.innerHTML="<strong>Pascal Syntax:</strong>",_=l(),o=t("pre"),j=l(),m=t("p"),m.textContent="Pascal Example:",H=l(),u=t("pre"),v=l(),d=t("p"),d.textContent="Pascal Example 2:",C=l(),i=t("pre"),D=l(),b=t("p"),b.innerHTML="<strong>Python Syntax:</strong>",I=l(),c=t("pre"),L(o,"class","language-pascal"),L(u,"class","language-pascal"),L(i,"class","language-pascal"),L(c,"class","language-python")},m(s,n){e(s,p,n),e(s,w,n),e(s,f,n),e(s,x,n),e(s,r,n),e(s,T,n),e(s,k,n),e(s,M,n),e(s,y,n),e(s,_,n),e(s,o,n),o.innerHTML=P,e(s,j,n),e(s,m,n),e(s,H,n),e(s,u,n),u.innerHTML=O,e(s,v,n),e(s,d,n),e(s,C,n),e(s,i,n),i.innerHTML=A,e(s,D,n),e(s,b,n),e(s,I,n),e(s,c,n),c.innerHTML=E},p:S,i:S,o:S,d(s){s&&a(p),s&&a(w),s&&a(f),s&&a(x),s&&a(r),s&&a(T),s&&a(k),s&&a(M),s&&a(y),s&&a(_),s&&a(o),s&&a(j),s&&a(m),s&&a(H),s&&a(u),s&&a(v),s&&a(d),s&&a(C),s&&a(i),s&&a(D),s&&a(b),s&&a(I),s&&a(c)}}}const R={title:"GetLayer",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:V,published:$,author:F,summary:K,layout:N}=R;class Q extends J{constructor(p){super();q(this,p,null,B,z,{})}}export{Q as default,R as metadata};
