import{S as L,i as F,s as A,e as a,f as p,g as E,h as t,n as I,p as e}from"./vendor.47d6f2b6.js";function j(M){let l,d,c,C,k,y,r,b,f,w,o,_='<code class="language-pascal"><span class="token keyword">procedure</span> ClientPrintEx<span class="token punctuation">(</span>SenderID<span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span> Color<span class="token punctuation">:</span> Word<span class="token punctuation">;</span> Font<span class="token punctuation">:</span> Word<span class="token punctuation">;</span> Text<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',P,m,T,i,D='<code class="language-python">ClientPrintEx<span class="token punctuation">(</span>SenderID<span class="token punctuation">,</span> Color<span class="token punctuation">,</span> Font<span class="token punctuation">,</span> Text<span class="token punctuation">)</span></code>',S,x,v,u,H=`<code class="language-pascal"><span class="token keyword">PROGRAM</span> Test<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
<span class="token comment">//some preparation</span>
  ClientPrintEx<span class="token punctuation">(</span>SelfID<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'Script loaded :)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//main script body</span>
 
<span class="token keyword">end</span><span class="token punctuation">.</span></code>`;return{c(){l=a("h1"),l.textContent=`${W}`,d=p(),c=a("p"),c.innerHTML=`Sending text line to connected Client, Extended version of <a href="Api/ClientPrint">ClientPrint</a>)
You can set:`,C=p(),k=a("ul"),k.innerHTML=`<li>SenderID (ID of object, text will be shown above of it). 0 means text will be in lower left corner of the screen</li> 
<li>Color - Text color. 0 mean default color.</li> 
<li>Font - Font type. 0 mean default font.</li>`,y=p(),r=a("p"),r.textContent="NB: This text sending only to client, not to server!",b=p(),f=a("p"),f.textContent="Pascal",w=p(),o=a("pre"),P=p(),m=a("p"),m.textContent="Python",T=p(),i=a("pre"),S=p(),x=a("p"),x.textContent="Example Pascal",v=p(),u=a("pre"),E(o,"class","language-pascal"),E(i,"class","language-python"),E(u,"class","language-pascal")},m(n,s){t(n,l,s),t(n,d,s),t(n,c,s),t(n,C,s),t(n,k,s),t(n,y,s),t(n,r,s),t(n,b,s),t(n,f,s),t(n,w,s),t(n,o,s),o.innerHTML=_,t(n,P,s),t(n,m,s),t(n,T,s),t(n,i,s),i.innerHTML=D,t(n,S,s),t(n,x,s),t(n,v,s),t(n,u,s),u.innerHTML=H},p:I,i:I,o:I,d(n){n&&e(l),n&&e(d),n&&e(c),n&&e(C),n&&e(k),n&&e(y),n&&e(r),n&&e(b),n&&e(f),n&&e(w),n&&e(o),n&&e(P),n&&e(m),n&&e(T),n&&e(i),n&&e(S),n&&e(x),n&&e(v),n&&e(u)}}}const R={title:"ClientPrintEx",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:W,published:z,author:B,summary:G,layout:N}=R;class O extends L{constructor(l){super();F(this,l,null,j,A,{})}}export{O as default,R as metadata};