import{S as A,i as F,s as E,e as p,f as e,g as B,h as a,n as H,p as t}from"./vendor.47d6f2b6.js";function R(I){let o,w,c,b,k,G,r,x,f,L,l,_='<code class="language-pascal"><span class="token keyword">procedure</span> GetGumpButtonsDescription<span class="token punctuation">(</span>GumpIndex <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> <span class="token keyword">var</span> TL <span class="token punctuation">:</span> TStringList<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',T,m,S,d,C,u,D=`<code class="language-pascal"><span class="token keyword">var</span> 
b <span class="token punctuation">:</span> TStringList<span class="token punctuation">;</span> 
i<span class="token punctuation">,</span>k <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> 

<span class="token keyword">Begin</span> 
b <span class="token operator">:=</span> TStringList<span class="token punctuation">.</span>Create<span class="token punctuation">;</span> 
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> GetGumpsCount <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span> 
<span class="token keyword">begin</span>  
  GetGumpButtonsDescription<span class="token punctuation">(</span>i<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token keyword">if</span> b<span class="token punctuation">.</span>Count <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> b<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span>   
      <span class="token keyword">if</span> b<span class="token punctuation">.</span>Strings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'xxx'</span> <span class="token keyword">then</span>
      <span class="token comment">//some work here  </span>
  <span class="token keyword">end</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>free<span class="token punctuation">;</span> 
<span class="token keyword">End</span><span class="token punctuation">.</span></code>`,v,y,M,i,P='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetGumpButtonsDescription</span><span class="token punctuation">(</span>GumpIndex<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">list</span> of string</code>';return{c(){o=p("h1"),o.textContent=`${q}`,w=e(),c=p("p"),c.innerHTML="Retrieve all Buttons info for the gump with list index <em>GumpIndex</em>",b=e(),k=p("p"),k.textContent="Returns nothing if gump index incorrect (out of gumps list) or char disconnected.",G=e(),r=p("p"),r.innerHTML='Method is similar to <a href="Api/GetGumpShortLines">GetGumpShortLines</a> and <a href="Api/GetGumpFullLines">GetGumpFullLines</a>, but contains info ONLY for buttons.',x=e(),f=p("p"),f.innerHTML="<strong>Pascal Syntax:</strong>",L=e(),l=p("pre"),T=e(),m=p("p"),m.textContent="Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!",S=e(),d=p("p"),d.textContent="Pascal Example:",C=e(),u=p("pre"),v=e(),y=p("p"),y.innerHTML="<strong>Python Syntax:</strong>",M=e(),i=p("pre"),B(l,"class","language-pascal"),B(u,"class","language-pascal"),B(i,"class","language-python")},m(s,n){a(s,o,n),a(s,w,n),a(s,c,n),a(s,b,n),a(s,k,n),a(s,G,n),a(s,r,n),a(s,x,n),a(s,f,n),a(s,L,n),a(s,l,n),l.innerHTML=_,a(s,T,n),a(s,m,n),a(s,S,n),a(s,d,n),a(s,C,n),a(s,u,n),u.innerHTML=D,a(s,v,n),a(s,y,n),a(s,M,n),a(s,i,n),i.innerHTML=P},p:H,i:H,o:H,d(s){s&&t(o),s&&t(w),s&&t(c),s&&t(b),s&&t(k),s&&t(G),s&&t(r),s&&t(x),s&&t(f),s&&t(L),s&&t(l),s&&t(T),s&&t(m),s&&t(S),s&&t(d),s&&t(C),s&&t(u),s&&t(v),s&&t(y),s&&t(M),s&&t(i)}}}const j={title:"GetGumpButtonsDescription",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:q,published:N,author:O,summary:V,layout:W}=j;class Y extends A{constructor(o){super();F(this,o,null,R,E,{})}}export{Y as default,j as metadata};
