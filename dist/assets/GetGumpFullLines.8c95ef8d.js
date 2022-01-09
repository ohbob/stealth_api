import{S as F,i as E,s as X,e as t,f as p,g as D,h as a,n as M,p as e}from"./vendor.47d6f2b6.js";function Y(R){let o,y,r,x,c,T,k,w,b,P,m,L,l,v='<code class="language-pascal"><span class="token keyword">procedure</span> GetGumpFullLines<span class="token punctuation">(</span>GumpIndex <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> <span class="token keyword">var</span> TL <span class="token punctuation">:</span> TStringList<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',I,d,C,f,_,u,B=`<code class="language-pascal"><span class="token keyword">var</span> 
b <span class="token punctuation">:</span> TStringList<span class="token punctuation">;</span> 
i<span class="token punctuation">,</span>k <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> 

<span class="token keyword">Begin</span> 
b <span class="token operator">:=</span> TStringList<span class="token punctuation">.</span>Create<span class="token punctuation">;</span> 
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> GetGumpsCount <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span> 
<span class="token keyword">begin</span>  
  GetGumpFullLines<span class="token punctuation">(</span>i<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token keyword">if</span> b<span class="token punctuation">.</span>Count <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> b<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span>   
      <span class="token keyword">if</span> b<span class="token punctuation">.</span>Strings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'xxx'</span> <span class="token keyword">then</span>
      <span class="token comment">//some work here  </span>
  <span class="token keyword">end</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>free<span class="token punctuation">;</span> 
<span class="token keyword">End</span><span class="token punctuation">.</span></code>`,S,G,H,i,g='<code class="language-python"><span class="token keyword">def</span> <span class="token function">GetGumpFullLines</span><span class="token punctuation">(</span>GumpIndex<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">list</span> of string</code>';return{c(){o=t("h1"),o.textContent=`${A}`,y=p(),r=t("p"),r.innerHTML="Retrieve info about 3 gump elements for the gump with list index <em>GumpIndex</em>",x=p(),c=t("p"),c.textContent="Returns nothing if gump index incorrect (out of gumps list) or char disconnected.",T=p(),k=t("p"),k.innerHTML='Method is similar to <a href="Api/GetGumpButtonsDescription">GetGumpButtonsDescription</a> and <a href="Api/GetGumpShortLines">GetGumpShortLines</a>, but contains FULL gump info, including all elements and text lines.',w=p(),b=t("details"),b.innerHTML=`<summary>Example of method work:</summary>
\`\`\`pascal
Serial: 1A1B9F <br/>
GumpID: 11CC34F <br/>
X: 0000 <br/>
Y: 0000 <br/>
Pages: 13 <br/>
Gump Options: NoDispose NoClose <br/> 
 <br/>
GumpPics: X Y ID  Page <br/>
GumpPic: 480  367  2443  0 <br/> 
 <br/>
TilePics: X   Y   ID   Page <br/>
0   TilePic: 80  94  5099  2 <br/>
1   TilePic: 230  94  5103  2 <br/>
... <br/>
47   TilePic: 230  184  5176  12 <br/>
48   TilePic: 80  274  5181  12 <br/> 
 <br/>
ResizePics: X   Y   ID   Width   Height   Page <br/>
0   ResizePic: 20  20  5054  540  40  0 <br/>
1   ResizePic: 20  60  5054  360  300  0 <br/>
2   ResizePic: 380  60  5054  180  300  0 <br/>
3   ResizePic: 20  360  5054  540  70  0 <br/> 
 <br/> 
 <br/>
CheckBoxes: X   Y   Released_ID  Pressed_ID   Status   Return_value   Page <br/>
0   CheckBox: 140  395  210  211  0  1537  0 <br/> 
 <br/> 
 <br/>
GumpTexts: X   Y   Color   Text_ID   Page <br/>
0   GumpText: 159  30  51  0  0 <br/>
1   GumpText: 60  371  900  1  0 <br/>
... <br/>
61   GumpText: 223  229  900  62  12 <br/>
62   GumpText: 73  319  900  63  12 <br/> 
 <br/>
TextEntries: X   Y   Width   Height   Status   Color   Return_value   Default_text_id   Page <br/>
0   TextEntry: 487  370  100  30  0  513  5  0 <br/> 
 <br/>
Text Lines: <br/>
BLACKSMITH SELECTION MENU <br/>
Make last (ringmail gloves) <br/>
Repair Item <br/>
Hardening <br/>
How Many? <br/>
1 <br/> 
 <br/>
... <br/> 
 <br/>
War Hammer <br/>
Hammer Pick <br/> 
 <br/>
GumpButtons: X   Y   Released_ID  Pressed_ID   Quit   Page_ID   Return_value   Page <br/>
0   GumpButton: 40  372  208  209  1  0  1025  0 <br/>
1   GumpButton: 40  395  208  209  1  0  1026  0 <br/>
... <br/>
50   GumpButton: 200  164  1209  1210  1  0  5176  12 <br/>
51   GumpButton: 50  254  1209  1210  1  0  5180  12<br/>
\`\`\``,P=p(),m=t("p"),m.innerHTML="<strong>Pascal Syntax:</strong>",L=p(),l=t("pre"),I=p(),d=t("p"),d.textContent="Warning: param (with type TStringList) should be created before calling GetFindedList and be disposed after!",C=p(),f=t("p"),f.textContent="Pascal Example:",_=p(),u=t("pre"),S=p(),G=t("p"),G.innerHTML="<strong>Python Syntax:</strong>",H=p(),i=t("pre"),D(l,"class","language-pascal"),D(u,"class","language-pascal"),D(i,"class","language-python")},m(s,n){a(s,o,n),a(s,y,n),a(s,r,n),a(s,x,n),a(s,c,n),a(s,T,n),a(s,k,n),a(s,w,n),a(s,b,n),a(s,P,n),a(s,m,n),a(s,L,n),a(s,l,n),l.innerHTML=v,a(s,I,n),a(s,d,n),a(s,C,n),a(s,f,n),a(s,_,n),a(s,u,n),u.innerHTML=B,a(s,S,n),a(s,G,n),a(s,H,n),a(s,i,n),i.innerHTML=g},p:M,i:M,o:M,d(s){s&&e(o),s&&e(y),s&&e(r),s&&e(x),s&&e(c),s&&e(T),s&&e(k),s&&e(w),s&&e(b),s&&e(P),s&&e(m),s&&e(L),s&&e(l),s&&e(I),s&&e(d),s&&e(C),s&&e(f),s&&e(_),s&&e(u),s&&e(S),s&&e(G),s&&e(H),s&&e(i)}}}const z={title:"GetGumpFullLines",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:A,published:W,author:O,summary:U,layout:j}=z;class q extends F{constructor(o){super();E(this,o,null,Y,X,{})}}export{q as default,z as metadata};
