import{S as B,i as S,s as X,e,f as p,b as R,g as T,h as a,n as w,p as t}from"./vendor.47d6f2b6.js";function D(h){let o,b,i,f,k,y,u,H='<code class="language-pascal"><span class="token keyword">procedure</span> GetGumpInfo<span class="token punctuation">(</span>GumpIndex <span class="token punctuation">:</span> Word<span class="token punctuation">;</span> <span class="token keyword">var</span> gumpInfo <span class="token punctuation">:</span> TGumpInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',x,g,P,m,G,c,L=`<code class="language-pascal"><span class="token keyword">var</span> gi <span class="token punctuation">:</span> TGumpInfo<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetGumpInfo<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> gi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Gump has '</span> <span class="token operator">+</span> IntToStr<span class="token punctuation">(</span>Length<span class="token punctuation">(</span>gi<span class="token punctuation">.</span>GumpButtons<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' buttons'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span></code>`,_,I,E,l,M='<code class="language-python"></code>',N,d,C,r,v=`<code class="language-python"><span class="token keyword">import</span> pprint
 
gumpdictDebug <span class="token operator">=</span> <span class="token builtin">open</span> <span class="token punctuation">(</span><span class="token string">r''</span> <span class="token operator">+</span> StealthPath<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">'gumpDict.log'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">)</span>
pp <span class="token operator">=</span> pprint<span class="token punctuation">.</span>PrettyPrinter<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">150</span><span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> stream<span class="token operator">=</span>gumpdictDebug<span class="token punctuation">)</span>
pp<span class="token punctuation">.</span>pprint<span class="token punctuation">(</span>GetGumpInfo<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token comment"># Output dictionary</span>
<span class="token punctuation">&#123;</span><span class="token string">'GumpButtons'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'page_id'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'pressed_id'</span><span class="token punctuation">:</span> <span class="token number">4007</span><span class="token punctuation">,</span> <span class="token string">'quit'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'released_id'</span><span class="token punctuation">:</span> <span class="token number">4005</span><span class="token punctuation">,</span> <span class="token string">'return_value'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                 <span class="token punctuation">&#123;</span><span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'page_id'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'pressed_id'</span><span class="token punctuation">:</span> <span class="token number">4019</span><span class="token punctuation">,</span> <span class="token string">'quit'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'released_id'</span><span class="token punctuation">:</span> <span class="token number">4017</span><span class="token punctuation">,</span> <span class="token string">'return_value'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">285</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token string">'GumpID'</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1817877309</span><span class="token punctuation">,</span>
 <span class="token string">'NoClose'</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
 <span class="token string">'NoDispose'</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
 <span class="token string">'NoMove'</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
 <span class="token string">'NoResize'</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
 <span class="token string">'Pages'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
 <span class="token string">'ResizePics'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'gump_id'</span><span class="token punctuation">:</span> <span class="token number">2600</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">:</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token string">'width'</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token string">'Serial'</span><span class="token punctuation">:</span> <span class="token number">346764</span><span class="token punctuation">,</span>
 <span class="token string">'X'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token string">'XmfHtmlGump'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token string">'Cliloc_id'</span><span class="token punctuation">:</span> <span class="token number">1006046</span><span class="token punctuation">,</span> <span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'background'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">:</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token string">'scrollbar'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'width'</span><span class="token punctuation">:</span> <span class="token number">420</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">35</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                 <span class="token punctuation">&#123;</span><span class="token string">'Cliloc_id'</span><span class="token punctuation">:</span> <span class="token number">1006044</span><span class="token punctuation">,</span> <span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'background'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">:</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token string">'scrollbar'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'width'</span><span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">96</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
                 <span class="token punctuation">&#123;</span><span class="token string">'Cliloc_id'</span><span class="token punctuation">:</span> <span class="token number">1006045</span><span class="token punctuation">,</span> <span class="token string">'ElemNum'</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'Page'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'background'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">:</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token string">'scrollbar'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'width'</span><span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">:</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">:</span> <span class="token number">96</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token string">'Y'</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">&#125;</span></code>`;return{c(){o=e("h1"),o.textContent=`${z}`,b=p(),i=e("p"),i.innerHTML="Returns struct gumpInfo with FULL gump info for the gump with list index <em>GumpIndex</em>",f=p(),k=e("p"),k.innerHTML="<strong>Pascal Syntax:</strong>",y=p(),u=e("pre"),x=p(),g=e("details"),g.innerHTML=`<summary>Pascal TGumpInfo declaration:</summary>
\`\`\`pascal
TGroup = record
  groupnumber : Integer;
  Page : Integer;
  ElemNum : Integer;
end;
<p>TEndGroup = record
groupnumber : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TPage = record
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TMasterGump = record
ID : Cardinal;
ElemNum : Integer;
end;</p> 
<p>TGumpButton = record
x : Integer;
y : Integer;
released_id : Integer;
pressed_id : Integer;
quit : Integer;
page_id : Integer;
return_value : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TButtonTileArt = record
x : Integer;
y : Integer;
released_id : Integer;
pressed_id : Integer;
quit : Integer;
page_id : Integer;
return_value : Integer;
art_id : Integer;
Hue : Integer;
art_x : Integer;
art_y : Integer;
ElemNum : Integer;
end;</p> 
<p>TCheckerTrans = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TCroppedText = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
color : Integer;
text_id : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TGumpPic = record
x : Integer;
y : Integer;
id : Integer;
Hue : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TGumpPicTiled = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
gump_id : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TRadio = record
x : Integer;
y : Integer;
released_id : Integer;
pressed_id : Integer;
status : Integer;
return_value : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TCheckBox = record
x : Integer;
y : Integer;
released_id : Integer;
pressed_id : Integer;
status : Integer;
return_value : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TResizePic = record
x : Integer;
y : Integer;
gump_id : Integer;
width : Integer;
height : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TGumpText = record
x : Integer;
y : Integer;
color : Integer;
text_id : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TTextEntry = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
color : Integer;
return_value : Integer;
default_text_id : Integer;
Value : String;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TTilePic = record
x : Integer;
y : Integer;
id : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TTilePicHue = record
x : Integer;
y : Integer;
id : Integer;
color : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TTooltip = record
Cliloc_ID : Cardinal;
Arguments : String;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>THtmlGump = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
text_id : Integer;
background : Integer;
scrollbar : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TXmfHTMLGump = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
Cliloc_id : Cardinal;
background : Integer;
scrollbar : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TXmfHTMLGumpColor = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
Cliloc_id : Cardinal;
background : Integer;
scrollbar : Integer;
Hue : Integer;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TXmfHTMLTok = record
x : Integer;
y : Integer;
width : Integer;
height : Integer;
background : Integer;
scrollbar : Integer;
Color : Integer;
Cliloc_id : Cardinal;
Arguments : String;
Page : Integer;
ElemNum : Integer;
end;</p> 
<p>TItemProperty = record
Prop : Cardinal;
ElemNum : Integer;
end;</p> 
<p>TUnknownItem = record
CmdName : String;
Arguments : String;
ElemNum : Integer;
end;</p> 
<p>TGumpInfo = record
Serial : Cardinal;
GumpID : Cardinal;
X : SmallInt;
Y : SmallInt;
Pages : Integer;
NoMove : Boolean;
NoResize : Boolean;
NoDispose : Boolean;
NoClose : Boolean;
Groups : array of TGroup;
EndGroups : array of TEndGroup;
GumpButtons : array of TGumpButton;
ButtonTileArts : array of TButtonTileArt;
CheckBoxes : array of TCheckBox;
CheckerTrans : array of TCheckerTrans;
CroppedText : array of TCroppedText;
GumpPics : array of TGumpPic;
GumpPicTiled : array of TGumpPicTiled;
RadioButtons : array of TRadio;
ResizePics : array of TResizePic;
GumpText : array of TGumpText;
TextEntries : array of TTextEntry;
Text : array of string;
TextEntriesLimited : array of TTextEntry;
TilePics : array of TTilePic;
TilePicHue : array of TTilePicHue;
Tooltips : array of TTooltip;
HtmlGump : array of THtmlGump;
XmfHtmlGump : array of TXmfHtmlGump;
XmfHTMLGumpColor : array of TXmfHTMLGumpColor;
XmfHTMLTok : array of TXmfHTMLTok;
ItemProperties : array of TItemProperty;
end;</p>`,P=R("\n```\n"),m=e("p"),m.textContent="Pascal Example:",G=p(),c=e("pre"),_=p(),I=e("p"),I.innerHTML=`<strong>Python Syntax:</strong>
def GetGumpInfo(GumpIndex): \u2014&gt; dict of struct`,E=p(),l=e("pre"),N=p(),d=e("p"),d.textContent="Pyton Example:",C=p(),r=e("pre"),T(u,"class","language-pascal"),T(c,"class","language-pascal"),T(l,"class","language-python"),T(r,"class","language-python")},m(n,s){a(n,o,s),a(n,b,s),a(n,i,s),a(n,f,s),a(n,k,s),a(n,y,s),a(n,u,s),u.innerHTML=H,a(n,x,s),a(n,g,s),a(n,P,s),a(n,m,s),a(n,G,s),a(n,c,s),c.innerHTML=L,a(n,_,s),a(n,I,s),a(n,E,s),a(n,l,s),l.innerHTML=M,a(n,N,s),a(n,d,s),a(n,C,s),a(n,r,s),r.innerHTML=v},p:w,i:w,o:w,d(n){n&&t(o),n&&t(b),n&&t(i),n&&t(f),n&&t(k),n&&t(y),n&&t(u),n&&t(x),n&&t(g),n&&t(P),n&&t(m),n&&t(G),n&&t(c),n&&t(_),n&&t(I),n&&t(E),n&&t(l),n&&t(N),n&&t(d),n&&t(C),n&&t(r)}}}const A={title:"GetGumpInfo",published:"2020-02-21T21:36:59.459Z",author:"Vizit0r",summary:"API",layout:"blog"},{title:z,published:F,author:U,summary:V,layout:Y}=A;class j extends B{constructor(o){super();S(this,o,null,D,X,{})}}export{j as default,A as metadata};
