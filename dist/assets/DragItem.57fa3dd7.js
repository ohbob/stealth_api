import{S as B,i as F,s as W,e as p,f as e,g as H,h as a,n as _,p as t}from"./vendor.47d6f2b6.js";function $(v){let o,b,c,w,k,I,m,D,r,x,f,T,l,P=`<code class="language-pascal"><span class="token keyword">function</span> DragItem<span class="token punctuation">(</span>ItemID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span> Amount <span class="token punctuation">:</span> Integer<span class="token punctuation">)</span> <span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
</code>`,C,d,L,u,S='<code class="language-python"><span class="token keyword">def</span> <span class="token function">DragItem</span><span class="token punctuation">(</span>ItemID<span class="token punctuation">,</span> Amount<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span></code>',M,y,A,i,E=`<code class="language-pascal"><span class="token keyword">procedure</span> LootGold<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> FindType<span class="token punctuation">(</span><span class="token number">$0EED</span><span class="token punctuation">,</span> Corpse<span class="token punctuation">)</span> <span class="token operator">&lt;></span> <span class="token number">0</span> <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    DragItem<span class="token punctuation">(</span>finditem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Wait<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    DropItem<span class="token punctuation">(</span>backpack<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Wait<span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=p("h1"),o.textContent=`${q}`,b=e(),c=p("p"),c.textContent=`Method takes item \u201Con finger\u201D.
Returns True on success, False if:`,w=e(),k=p("ul"),k.innerHTML=`<li>already exists item \u201Con finger\u201D</li> 
<li>item with this ID not found</li>`,I=e(),m=p("p"),m.innerHTML="if item in Stack, and <strong><em>Amount</em></strong> &gt; items in Stack, method will drag <strong><em>Amount</em></strong> of items, else will drag all items in stack.",D=e(),r=p("p"),r.innerHTML='NB: this method drag item \u201Con finger\u201D, not to some container or ground. Use <a href="Api/DropItem">DropItem</a> to drop item from \u201Cfinger\u201D.',x=e(),f=p("p"),f.textContent="Pascal",T=e(),l=p("pre"),C=e(),d=p("p"),d.textContent="Python",L=e(),u=p("pre"),M=e(),y=p("p"),y.textContent="Example Pascal",A=e(),i=p("pre"),H(l,"class","language-pascal"),H(u,"class","language-python"),H(i,"class","language-pascal")},m(n,s){a(n,o,s),a(n,b,s),a(n,c,s),a(n,w,s),a(n,k,s),a(n,I,s),a(n,m,s),a(n,D,s),a(n,r,s),a(n,x,s),a(n,f,s),a(n,T,s),a(n,l,s),l.innerHTML=P,a(n,C,s),a(n,d,s),a(n,L,s),a(n,u,s),u.innerHTML=S,a(n,M,s),a(n,y,s),a(n,A,s),a(n,i,s),i.innerHTML=E},p:_,i:_,o:_,d(n){n&&t(o),n&&t(b),n&&t(c),n&&t(w),n&&t(k),n&&t(I),n&&t(m),n&&t(D),n&&t(r),n&&t(x),n&&t(f),n&&t(T),n&&t(l),n&&t(C),n&&t(d),n&&t(L),n&&t(u),n&&t(M),n&&t(y),n&&t(A),n&&t(i)}}}const j={title:"DragItem",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:q,published:G,author:N,summary:R,layout:U}=j;class V extends B{constructor(o){super();F(this,o,null,$,W,{})}}export{V as default,j as metadata};
