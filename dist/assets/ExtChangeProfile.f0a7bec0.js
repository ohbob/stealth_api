import{S as J,i as j,s as q,e,f as p,g as M,h as a,n as _,p as t}from"./vendor.47d6f2b6.js";function z(H){let o,C,r,N,u,S,k,x,f,b,m,P,d,T,l,L=`<code class="language-pascal"><span class="token keyword">function</span> ExtChangeProfile<span class="token punctuation">(</span>ProfileName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>ShardName <span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>CharName <span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span></code>`,h,y,I,c,g='<code class="language-python">ExtChangeProfile<span class="token punctuation">(</span>PName<span class="token punctuation">,</span> ShardName<span class="token punctuation">,</span> CharName<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">></span> integer</code>',v,w,E,i,A=`<code class="language-pascal"><span class="token keyword">function</span> def_Connect<span class="token punctuation">(</span>fProfileName<span class="token punctuation">,</span> fShardName<span class="token punctuation">,</span> fCharName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">var</span>
  i <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">Result</span> <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> Connected <span class="token operator">and</span> <span class="token punctuation">(</span>ShardName <span class="token operator">&lt;></span> fShardName<span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">begin</span>
	  Disconnect<span class="token punctuation">;</span>
	  Wait<span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">end</span><span class="token punctuation">;</span>
  i <span class="token operator">:=</span> ExtChangeProfile<span class="token punctuation">(</span>ProfileName<span class="token punctuation">,</span> fShardName<span class="token punctuation">,</span> fCharName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> i <span class="token keyword">of</span>
    <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Internal error connecting to '</span> <span class="token operator">+</span> fShardName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> fCharName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Char connected error '</span> <span class="token operator">+</span> fShardName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> fCharName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">-</span><span class="token number">4</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'No such profile found '</span> <span class="token operator">+</span> ProfileName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> fShardName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> fCharName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
  
  <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">then</span>
    <span class="token keyword">Exit</span><span class="token punctuation">;</span>
  
  Connect<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`;return{c(){o=e("h1"),o.textContent=`${K}`,C=p(),r=e("p"),r.innerHTML="Change current profile to profile with name <em>ProfileName</em>.",N=p(),u=e("p"),u.textContent="Keep in mind then following:",S=p(),k=e("ul"),k.innerHTML=`<li>The current character must be disconnected</li> 
<li>Only one script should be running</li> 
<li>Specified profile must exist. Important - profile name is case sensitive.</li> 
<li>If set empty strings in ShardName and CharName you will get window select shard or get connect on selected shard index and char from profile setting (Always select)</li>`,x=p(),f=e("p"),f.textContent="If the profile is successful, the function returns 0, otherwise returns an error code:",b=p(),m=e("ul"),m.innerHTML=`<li>-1 Internal error</li> 
<li>-2 Char connected or is in the process of connecting</li> 
<li>-3 More than one script is running</li> 
<li>-4 The specified profile does not exist</li>`,P=p(),d=e("p"),d.textContent="Pascal",T=p(),l=e("pre"),h=p(),y=e("p"),y.textContent="Python",I=p(),c=e("pre"),v=p(),w=e("p"),w.textContent="Example",E=p(),i=e("pre"),M(l,"class","language-pascal"),M(c,"class","language-python"),M(i,"class","language-pascal")},m(n,s){a(n,o,s),a(n,C,s),a(n,r,s),a(n,N,s),a(n,u,s),a(n,S,s),a(n,k,s),a(n,x,s),a(n,f,s),a(n,b,s),a(n,m,s),a(n,P,s),a(n,d,s),a(n,T,s),a(n,l,s),l.innerHTML=L,a(n,h,s),a(n,y,s),a(n,I,s),a(n,c,s),c.innerHTML=g,a(n,v,s),a(n,w,s),a(n,E,s),a(n,i,s),i.innerHTML=A},p:_,i:_,o:_,d(n){n&&t(o),n&&t(C),n&&t(r),n&&t(N),n&&t(u),n&&t(S),n&&t(k),n&&t(x),n&&t(f),n&&t(b),n&&t(m),n&&t(P),n&&t(d),n&&t(T),n&&t(l),n&&t(h),n&&t(y),n&&t(I),n&&t(c),n&&t(v),n&&t(w),n&&t(E),n&&t(i)}}}const D={title:"ExtChangeProfile",published:"2020-06-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:K,published:R,author:V,summary:W,layout:Z}=D;class $ extends J{constructor(o){super();j(this,o,null,z,q,{})}}export{$ as default,D as metadata};
