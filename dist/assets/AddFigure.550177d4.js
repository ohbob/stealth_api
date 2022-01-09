import{S as P,i as D,s as N,e as t,f as o,g as y,h as a,n as _,p}from"./vendor.47d6f2b6.js";function z(H){let e,T,k,x,r,C,u,L='<code class="language-pascal"><span class="token keyword">function</span> AddFigure<span class="token punctuation">(</span><span class="token keyword">const</span> figure <span class="token punctuation">:</span> TMapFigure<span class="token punctuation">)</span> <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span></code>',w,f,F,l,R=`<code class="language-pascal"><span class="token keyword">PROGRAM</span> Test<span class="token punctuation">;</span>
<span class="token keyword">var</span>
  temp11 <span class="token punctuation">:</span> TMapFigure<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  temp11<span class="token punctuation">.</span>kind <span class="token operator">:=</span> fkRectangle<span class="token punctuation">;</span>       
  temp11<span class="token punctuation">.</span>coord <span class="token operator">:=</span> fcScreen<span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>x1 <span class="token operator">:=</span> <span class="token number">55</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>x2 <span class="token operator">:=</span> <span class="token number">99</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>y1 <span class="token operator">:=</span> <span class="token number">55</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>y2 <span class="token operator">:=</span> <span class="token number">99</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>brushColor <span class="token operator">:=</span> <span class="token number">8888</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>worldNum <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  temp11<span class="token punctuation">.</span>text <span class="token operator">:=</span> <span class="token string">'test'</span><span class="token punctuation">;</span>  
  AddFigure<span class="token punctuation">(</span>temp11<span class="token punctuation">)</span><span class="token punctuation">;</span>    
 <span class="token keyword">end</span><span class="token punctuation">.</span>
</code>`,v,d,M,c,B=`<code class="language-pascal">TMapFigure <span class="token operator">=</span> <span class="token keyword">record</span>
  kind <span class="token punctuation">:</span> TFigureKind<span class="token punctuation">;</span>
  coord <span class="token punctuation">:</span> TFigureCoord<span class="token punctuation">;</span>
  x1 <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  y1 <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  x2 <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  y2 <span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  brushColor <span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
  brushStyle <span class="token punctuation">:</span> TBrushStyle<span class="token punctuation">;</span>
  color <span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
  worldNum <span class="token punctuation">:</span> Byte<span class="token punctuation">;</span>
  text <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,S,m,A,i,I=`<code class="language-pascal">TFigureCoord <span class="token operator">=</span> <span class="token punctuation">(</span>fcWorld<span class="token punctuation">,</span> fcScreen<span class="token punctuation">)</span><span class="token punctuation">;</span>

TFigureKind <span class="token operator">=</span> <span class="token punctuation">(</span>fkLine<span class="token punctuation">,</span> fkEllipse<span class="token punctuation">,</span> fkRectangle<span class="token punctuation">,</span> fkDirection<span class="token punctuation">,</span> fkText<span class="token punctuation">)</span><span class="token punctuation">;</span>

TBrushStyle <span class="token operator">=</span> <span class="token punctuation">(</span>bsSolid<span class="token punctuation">,</span> bsClear<span class="token punctuation">,</span> bsHorizontal<span class="token punctuation">,</span> bsVertical<span class="token punctuation">,</span>  bsFDiagonal<span class="token punctuation">,</span> bsBDiagonal<span class="token punctuation">,</span> bsCross<span class="token punctuation">,</span> bsDiagCross<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`,g,b;return{c(){e=t("h1"),e.textContent=`${K}`,T=o(),k=t("p"),k.innerHTML='Addd figure to list and returns its index (can be used for <a href="Api/RemoveFigure">RemoveFigure</a>)',x=o(),r=t("p"),r.textContent="Pascal",C=o(),u=t("pre"),w=o(),f=t("p"),f.textContent="Example Pascal",F=o(),l=t("pre"),v=o(),d=t("h4"),d.textContent="Types:",M=o(),c=t("pre"),S=o(),m=t("p"),m.textContent="where",A=o(),i=t("pre"),g=o(),b=t("h4"),b.textContent="NB: Python doesn\u2019t support all Figures methods",y(u,"class","language-pascal"),y(l,"class","language-pascal"),y(c,"class","language-pascal"),y(i,"class","language-pascal")},m(n,s){a(n,e,s),a(n,T,s),a(n,k,s),a(n,x,s),a(n,r,s),a(n,C,s),a(n,u,s),u.innerHTML=L,a(n,w,s),a(n,f,s),a(n,F,s),a(n,l,s),l.innerHTML=R,a(n,v,s),a(n,d,s),a(n,M,s),a(n,c,s),c.innerHTML=B,a(n,S,s),a(n,m,s),a(n,A,s),a(n,i,s),i.innerHTML=I,a(n,g,s),a(n,b,s)},p:_,i:_,o:_,d(n){n&&p(e),n&&p(T),n&&p(k),n&&p(x),n&&p(r),n&&p(C),n&&p(u),n&&p(w),n&&p(f),n&&p(F),n&&p(l),n&&p(v),n&&p(d),n&&p(M),n&&p(c),n&&p(S),n&&p(m),n&&p(A),n&&p(i),n&&p(g),n&&p(b)}}}const E={title:"AddFigure",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:K,published:j,author:q,summary:G,layout:O}=E;class W extends P{constructor(e){super();D(this,e,null,z,N,{})}}export{W as default,E as metadata};
