import{S as v,i as S,s as g,e as p,f as e,g as M,h as a,n as b,p as t}from"./vendor.47d6f2b6.js";function H(z){let o,w,c,f,i,C,u,m,k,y,r,I,d,R,l,x=`<code class="language-pascal">  <span class="token keyword">program</span> test<span class="token punctuation">;</span>

  <span class="token keyword">procedure</span> IrcMsgHandler<span class="token punctuation">(</span>Msg <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">begin</span>
    AddToJournal<span class="token punctuation">(</span><span class="token string">'IrcMsg: "'</span> <span class="token operator">+</span> Msg <span class="token operator">+</span> <span class="token string">'"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span> 

  <span class="token keyword">begin</span> 
  <span class="token keyword">if</span> <span class="token operator">not</span> IRCConnected <span class="token keyword">then</span>
    <span class="token keyword">begin</span>        
      IRCSetNickName<span class="token punctuation">(</span><span class="token string">'Vizzz'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      IRCConnect<span class="token punctuation">(</span><span class="token string">'irc.quakenet.org'</span><span class="token punctuation">,</span><span class="token number">6667</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token operator">not</span> IRCConnected <span class="token keyword">do</span>
        wait<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>   
    <span class="token keyword">if</span> IRCConnected <span class="token keyword">then</span>
      IRCSay<span class="token punctuation">(</span><span class="token string">'some1'</span><span class="token punctuation">,</span> <span class="token string">'New test from Vizzzz'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> IRCConnected <span class="token keyword">then</span>
      IRCJoin<span class="token punctuation">(</span><span class="token string">'#uos'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> IRCConnected <span class="token keyword">then</span>
      IRCSay<span class="token punctuation">(</span><span class="token string">'#uos'</span><span class="token punctuation">,</span> <span class="token string">'CH test from Vizzzz'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    

    <span class="token keyword">while</span> <span class="token keyword">True</span> <span class="token keyword">do</span> 
      Wait<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">.</span></code>`;return{c(){o=p("h1"),o.textContent="Work with IRC",w=e(),c=p("p"),c.textContent="In Stealth 7.2.0 added IRC protocol support.",f=e(),i=p("p"),i.textContent="Abilities:",C=e(),u=p("ul"),u.innerHTML=`<li>Private message sending</li> 
<li>Channel joining (included channel with password), send messages to channel.</li> 
<li>Receiving messages from channel\\from private messages.</li> 
<li>\u201CRaw\u201D text sending - you can use any irc protocol commands.</li>`,m=e(),k=p("p"),k.textContent="Nick must be set before start connect to server, otherwise some server can drop your connection!",y=e(),r=p("p"),r.textContent="IRC Event - IrcMsgHandler, one param - String.",I=e(),d=p("p"),d.textContent="Script example:",R=e(),l=p("pre"),M(l,"class","language-pascal")},m(s,n){a(s,o,n),a(s,w,n),a(s,c,n),a(s,f,n),a(s,i,n),a(s,C,n),a(s,u,n),a(s,m,n),a(s,k,n),a(s,y,n),a(s,r,n),a(s,I,n),a(s,d,n),a(s,R,n),a(s,l,n),l.innerHTML=x},p:b,i:b,o:b,d(s){s&&t(o),s&&t(w),s&&t(c),s&&t(f),s&&t(i),s&&t(C),s&&t(u),s&&t(m),s&&t(k),s&&t(y),s&&t(r),s&&t(I),s&&t(d),s&&t(R),s&&t(l)}}}const N={title:"IRC",published:"2020-03-22T21:36:59.459Z",author:"Vizitor",summary:"IRC",layout:"blog"};class V extends v{constructor(o){super();S(this,o,null,H,g,{})}}export{V as default,N as metadata};
