import{S as O,i as A,s as E,e as t,f as e,g as m,h as a,n as M,p}from"./vendor.47d6f2b6.js";function F(_){let o,b,i,P,r,I,f,x,l,j='<code class="language-pascal"><span class="token keyword">function</span> GetParent<span class="token punctuation">(</span>ObjID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span> <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span></code>',D,y,T,c,v=`<code class="language-pascal"> <span class="token keyword">if</span> <span class="token punctuation">(</span>GetParent<span class="token punctuation">(</span>finditem<span class="token punctuation">)</span> <span class="token operator">&lt;></span> backpack<span class="token punctuation">)</span> <span class="token keyword">then</span> 
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Item is not in backpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,G,d,C,u,B='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetParent</span><span class="token punctuation">(</span>ObjID<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> uint</code>',H,w,L,k,S=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">FullParentPath</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token builtin">list</span> <span class="token keyword">or</span> <span class="token keyword">not</span> p<span class="token punctuation">:</span> p<span class="token operator">=</span><span class="token punctuation">[</span>p<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> p<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">return</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> FullParentPath<span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token punctuation">[</span>GetParent<span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

Return <span class="token builtin">list</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>BagID1<span class="token punctuation">,</span> BagID2<span class="token punctuation">,</span> BagIDpreGround<span class="token punctuation">]</span><span class="token punctuation">,</span> whereBagID1 <span class="token operator">-</span> containers <span class="token keyword">with</span> ObjID<span class="token punctuation">,</span> BagIDpreGround <span class="token operator">-</span> last container before groud <span class="token punctuation">(</span><span class="token keyword">if</span> search <span class="token keyword">in</span> character backpack <span class="token keyword">or</span> layers <span class="token operator">-</span> will <span class="token keyword">return</span> character ID<span class="token punctuation">)</span><span class="token punctuation">.</span></code>`;return{c(){o=t("h1"),o.textContent=`${z}`,b=e(),i=t("p"),i.innerHTML="returns parent container for <em>ObjID</em>.",P=e(),r=t("p"),r.textContent="If char disconnected, of item not found, or object has no parent (on ground), returns 0.",I=e(),f=t("p"),f.innerHTML="<strong>Pascal Syntax:</strong>",x=e(),l=t("pre"),D=e(),y=t("p"),y.textContent="Pascal Example:",T=e(),c=t("pre"),G=e(),d=t("p"),d.innerHTML="<strong>Python Syntax:</strong>",C=e(),u=t("pre"),H=e(),w=t("p"),w.textContent=`Detection of last parent container before ground.
Python Example:`,L=e(),k=t("pre"),m(l,"class","language-pascal"),m(c,"class","language-pascal"),m(u,"class","language-python"),m(k,"class","language-python")},m(n,s){a(n,o,s),a(n,b,s),a(n,i,s),a(n,P,s),a(n,r,s),a(n,I,s),a(n,f,s),a(n,x,s),a(n,l,s),l.innerHTML=j,a(n,D,s),a(n,y,s),a(n,T,s),a(n,c,s),c.innerHTML=v,a(n,G,s),a(n,d,s),a(n,C,s),a(n,u,s),u.innerHTML=B,a(n,H,s),a(n,w,s),a(n,L,s),a(n,k,s),k.innerHTML=S},p:M,i:M,o:M,d(n){n&&p(o),n&&p(b),n&&p(i),n&&p(P),n&&p(r),n&&p(I),n&&p(f),n&&p(x),n&&p(l),n&&p(D),n&&p(y),n&&p(T),n&&p(c),n&&p(G),n&&p(d),n&&p(C),n&&p(u),n&&p(H),n&&p(w),n&&p(L),n&&p(k)}}}const q={title:"GetParent",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:z,published:R,author:V,summary:Z,layout:$}=q;class K extends O{constructor(o){super();A(this,o,null,F,E,{})}}export{K as default,q as metadata};
