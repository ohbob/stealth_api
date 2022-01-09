import{S as F,i as P,s as R,e as p,f as e,g as f,h as a,n as v,p as t}from"./vendor.47d6f2b6.js";function B(H){let o,m,i,x,l,I=`<code class="language-undefined">0|6123|Open Paperdoll|0|0
1|6146|Talk|0|0</code>`,C,r,b,c,G='<code class="language-pascal"><span class="token keyword">procedure</span> GetContextMenu<span class="token punctuation">(</span><span class="token keyword">var</span> list <span class="token punctuation">:</span> TStringList<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',S,d,T,y,L,u,_=`<code class="language-pascal"><span class="token keyword">function</span> SetContextMenu<span class="token punctuation">(</span>Id<span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span> <span class="token keyword">const</span> MenuText<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
<span class="token keyword">var</span> StringList<span class="token punctuation">:</span> TStringList<span class="token punctuation">;</span> NextCLock<span class="token punctuation">:</span> Int64<span class="token punctuation">;</span> i<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">Result</span> <span class="token operator">:=</span> <span class="token keyword">False</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> GetType<span class="token punctuation">(</span>Id<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token keyword">begin</span>
    StringList <span class="token operator">:=</span> TStringList<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
    NextClock <span class="token operator">:=</span> DateTimeToClock<span class="token punctuation">(</span>Now<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1000</span><span class="token punctuation">;</span>
    ClearContextMenu<span class="token punctuation">;</span>
    RequestContextMenu<span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>DateTimeToClock<span class="token punctuation">(</span>Now<span class="token punctuation">)</span> <span class="token operator">&lt;</span> NextClock<span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token keyword">begin</span>
      GetContextMenu<span class="token punctuation">(</span>StringList<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> StringList<span class="token punctuation">.</span>Count <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token keyword">Break</span> <span class="token keyword">else</span> Wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> StringList<span class="token punctuation">.</span>Count<span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">do</span> 
      <span class="token keyword">if</span> StrSub<span class="token punctuation">(</span>StringList<span class="token punctuation">.</span>Strings<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> MenuText<span class="token punctuation">,</span> <span class="token keyword">True</span><span class="token punctuation">)</span> <span class="token keyword">then</span> 
      <span class="token keyword">begin</span>
        SetContextMenuHook<span class="token punctuation">(</span>Id<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Wait<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        SetContextMenuHook<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		
        <span class="token keyword">Result</span> <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
	<span class="token keyword">Break</span><span class="token punctuation">;</span>
      <span class="token keyword">end</span><span class="token punctuation">;</span>
    StringList<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>	  
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,M,w,g,k,N='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> array of string</code>';return{c(){o=p("h1"),o.textContent=`${W}`,m=e(),i=p("p"),i.textContent=`Retuns last context menu items as strings. Format of result lines is \u201Ctag|clilocID|clilocText|flags|color\u201D, all numbers in hex.
Example of return:`,x=e(),l=p("pre"),C=e(),r=p("p"),r.innerHTML="<strong>Pascal Syntax:</strong>",b=e(),c=p("pre"),S=e(),d=p("p"),d.textContent="Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!",T=e(),y=p("p"),y.textContent="Example:",L=e(),u=p("pre"),M=e(),w=p("p"),w.innerHTML="<strong>Python Syntax:</strong>",g=e(),k=p("pre"),f(l,"class","language-undefined"),f(c,"class","language-pascal"),f(u,"class","language-pascal"),f(k,"class","language-python")},m(n,s){a(n,o,s),a(n,m,s),a(n,i,s),a(n,x,s),a(n,l,s),l.innerHTML=I,a(n,C,s),a(n,r,s),a(n,b,s),a(n,c,s),c.innerHTML=G,a(n,S,s),a(n,d,s),a(n,T,s),a(n,y,s),a(n,L,s),a(n,u,s),u.innerHTML=_,a(n,M,s),a(n,w,s),a(n,g,s),a(n,k,s),k.innerHTML=N},p:v,i:v,o:v,d(n){n&&t(o),n&&t(m),n&&t(i),n&&t(x),n&&t(l),n&&t(C),n&&t(r),n&&t(b),n&&t(c),n&&t(S),n&&t(d),n&&t(T),n&&t(y),n&&t(L),n&&t(u),n&&t(M),n&&t(w),n&&t(g),n&&t(k)}}}const D={title:"GetContextMenu",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:W,published:E,author:j,summary:z,layout:A}=D;class O extends F{constructor(o){super();P(this,o,null,B,R,{})}}export{O as default,D as metadata};