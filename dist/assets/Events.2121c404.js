import{S as N,i as G,s as O,e as t,f as p,g as W,h as a,n as E,p as s}from"./vendor.47d6f2b6.js";function V(P){let o,S,c,C,r,w,u,D,d,g,k,h,m,b,v,x,f,T,I,M,y,A,l,j=`<code class="language-pascal"><span class="token comment">//Pascal Sample</span>
<span class="token keyword">Program</span> Test<span class="token punctuation">;</span> 

<span class="token keyword">procedure</span> Speech<span class="token punctuation">(</span>text<span class="token punctuation">,</span>SenderName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> SenderID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">begin</span> 
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Event! Unicode Speech: SenderID = $'</span><span class="token operator">+</span> IntToHex<span class="token punctuation">(</span>SenderID<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' ; SenderName =  '</span> <span class="token operator">+</span> SenderName <span class="token operator">+</span> <span class="token string">'; SenderText : '</span> <span class="token operator">+</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span> 

<span class="token keyword">procedure</span> Char_Animation<span class="token punctuation">(</span>ID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span> Action <span class="token punctuation">:</span> Word<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">begin</span> 
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Event! Char Animation: ID = $'</span><span class="token operator">+</span> IntToHex<span class="token punctuation">(</span>ID<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' ; Action =  '</span> <span class="token operator">+</span> IntToStr<span class="token punctuation">(</span>Action<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span> 

<span class="token keyword">procedure</span> multiple_Items<span class="token punctuation">(</span>ContainerID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">begin</span> 
  AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Event! Add multiple Items In Cont: ContID = $'</span><span class="token operator">+</span> IntToHex<span class="token punctuation">(</span>ContainerID<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span> 

<span class="token keyword">begin</span> 
  SetEventProc<span class="token punctuation">(</span>evSpeech<span class="token punctuation">,</span><span class="token string">'Speech'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  SetEventProc<span class="token punctuation">(</span>evCharAnimation<span class="token punctuation">,</span><span class="token string">'Char_Animation'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  SetEventProc<span class="token punctuation">(</span>evAddMultipleItemsInCont<span class="token punctuation">,</span><span class="token string">'multiple_Items'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

  <span class="token keyword">while</span> <span class="token keyword">True</span> <span class="token keyword">do</span> 
	wait<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">.</span></code>`,_,i,B=`<code class="language-python"><span class="token comment">#Python sample</span>
<span class="token keyword">def</span> <span class="token function">drawCallback</span><span class="token punctuation">(</span>objectID<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>objectID<span class="token punctuation">)</span>
    
SetEventProc<span class="token punctuation">(</span><span class="token string">'evDrawObject'</span><span class="token punctuation">,</span> Callback<span class="token operator">=</span>drawCallback<span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    Wait<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span></code>`;return{c(){o=t("h1"),o.textContent="Events",S=p(),c=t("h3"),c.textContent="What events are.",C=p(),r=t("p"),r.textContent="To understand what events are consider a simple example: anti-macro gumps that appear in some shards. Typically, if for example you are crafting, while your macro is running the anti-macro gump can appear. In a normal macro you should check for the presence of the gump at every step, with events you can decentralize the check so that the gump can be handled independently while the main macro is running.",w=p(),u=t("p"),u.textContent="Another example where events may be useful is to check the state of connection in a separate place than the main script.",D=p(),d=t("p"),d.innerHTML=`To create events you use the following syntax:
<code>SetEventProc(evSpeech,&#39;function_name&#39;);</code>`,g=p(),k=t("p"),k.innerHTML=`To empty events you need to specify an empty handler
<code>SetEventProc(evSpeech,&#39; &#39;);</code>`,h=p(),m=t("h3"),m.textContent="Extra info and tips",b=p(),v=t("ol"),v.innerHTML=`<li>Events called, when <code>Wait</code> method called, so its not a real parallel execution. BTW, thats the reason of using Wait instead of Sleep in Python</li> 
<li>when events raised, its added to events queue, and executed in script one by one. Thats why you should NEVER put in event handler heavy things like moving, waiting for something, etc. Only light&amp;fast code!</li> 
<li>Event available for all internal and external scripts, working same everywhere.</li>`,x=p(),f=t("h3"),f.textContent="List of available events:",T=p(),I=t("ul"),I.innerHTML=`<li><p>evItemInfo : [ID : Cardinal] - Incoming Item (not mobile!)</p></li> 
<li><p>evItemDeleted : [ID : Cardinal] - Item deleted</p></li> 
<li><p>evSpeech : [Text : String, SenderName : String, SenderID: Cardinal] - common incoming message</p></li> 
<li><p>evMoveRejection : [Xorig, Yorig, Dir, XDest, YDest : Word] - server rejected the movement, not allowed to step</p></li> 
<li><p>evDrawContainer : [ID, ModelGump : Cardinal] - drawing container (0x24 bag)</p></li> 
<li><p>evAddItemToContainer : [ObjID, ContainerID : Cardinal]</p></li> 
<li><p>evAddMultipleItemsInCont : [ContainerID : Cardinal] - Couple of items added to container, packet 0x3c</p></li> 
<li><p>evRejectMoveItem : [Reason : Byte] - drag \\ drop rejection</p></li> 
<li><p>evDrawObject : [ID : Cardinal] - drawing any mobile (chars&amp;npc)</p></li> 
<li><p>evMenu : [DialogID : Cardinal, MenuID : Word] - a Menu popped out</p></li> 
<li><p>evMapMessage : [ID : Cardinal, centerx : Word, centery : Word] - Treasure discovered</p></li> 
<li><p>evAllow_RefuseAttack : [ID : Cardinal, Attack_OK : Boolean] (ID = 0 if Attack_OK = False)</p></li> 
<li><p>evClilocSpeech : [SenderID : String, SenderName : String, ClilocID : Cardinal, Text : String]</p></li> 
<li><p>evBuff_DebuffSystem : [ID : Cardinal, Attribute_ID : Word, IsEnabled : Boolean] - A (de)buff  is (de)activated</p></li> 
<li><p>evClientSendResync : [] - Stealth (or the client through it) sent resync</p></li> 
<li><p>evIncomingGump : [Serial : Cardinal,GumpID : Cardinal,X: Integer,Y: Integer] - incoming gump</p></li> 
<li><p>evTimer1 : [] - no settings, called every 100ms</p></li> 
<li><p>evTimer2 : [] - no settings, called every 100ms</p></li> 
<li><p>evWindowsMessage : [Param : Dword] : Received window message (Windows only!)</p></li> 
<li><p>evSound : [Sound_ID : Cardinal, X , Y, Z : Word] - sound and its coordinates</p></li> 
<li><p>evDeath : [Dead : Boolean] - If True Dead, else alive</p></li> 
<li><p>evQuestArrow : [fQuestArrowX, fQuestArrowY : Word, fQuestArrowActive : Boolean]</p></li> 
<li><p>evPartyInvite : [Inviter_ID : Cardinal] - some one is inviting us in party</p></li> 
<li><p>evMapPin: [ID :Dword; Action, PinID : : Byte; X, Y : Word ] - Marked point on map.</p></li> 
<li><p>evGumpTextEntry: [fGumpTextEntryID : Dword; Title - String; InputStyle : Byte; MaxValue : Dword; Title2 : String] - Strin Entry, look like gump, but really not.</p></li> 
<li><p>evGraphicalEffect: [_srcID: Cardinal; _srcX, _srcY: Word; _srcZ : SmallInt; _dstID : Cardinal; _dstX, _dstY: Word; _dstZ : Smallint; _type : Byte; _itemID: Word; _fixedDir: Byte] -Graphical Effect.</p></li> 
<li><p>evIRCIncomingText: [Message : String] - IRC incoming message</p></li> 
<li><p>evMessengerEvent: [Sender : TMessenger; SenderNickName : String; SenderId, ChatId : String; EventMsg : String; EventCode : Byte] - more info in Messengers manual.</p></li> 
<li><p>evSetGlobalVar: [VarName: String; VarValue: String] - The event is triggered when global variable is set from SetGlobal(\u2018stealth\u2019,VarName,VarValue) or from external script.</p></li> 
<li><p>evUpdateObjStats: [ID,CurLife,MaxLife,CurMana,ObjectInfo._MaxMana,CurStam,MaxStam : Integer] - fired when any of stats changed. Usually thats stats of our char.</p></li> 
<li><p>evGlobalChat: [MsgNum: Word, Name, Text : String] - incoming global chat action.</p> 
<p><strong>Deprecated events:</strong></p></li> 
<li><p>evUnicodeSpeech: deprecated, used no longer (use evSpeech).</p></li> 
<li><p>evClilocSpeechAffix: deprecated, used no longer\u044F (use evClilocSpeech).</p></li> 
<li><p>evDrawGamePlayer: deprecated, used no longer (use  evDrawObject).</p></li> 
<li><p>evUpdateChar: deprecated, used no longer (use evDrawObject).</p></li> 
<li><p>evCharAnimation : [ID : Cardinal, Action : Word]</p></li> 
<li><p>evICQDisconnect : [] - deprecated, Windows only!)</p></li> 
<li><p>evICQConnect : [] - deprecated, Windows only!)</p></li> 
<li><p>evICQIncomingText : [uin, Text] - deprecated, Windows only!)</p></li> 
<li><p>evICQError : [Text : String] - - deprecated, Windows only!)</p></li>`,M=p(),y=t("h3"),y.textContent="Samples",A=p(),l=t("pre"),_=p(),i=t("pre"),W(l,"class","language-pascal"),W(i,"class","language-python")},m(n,e){a(n,o,e),a(n,S,e),a(n,c,e),a(n,C,e),a(n,r,e),a(n,w,e),a(n,u,e),a(n,D,e),a(n,d,e),a(n,g,e),a(n,k,e),a(n,h,e),a(n,m,e),a(n,b,e),a(n,v,e),a(n,x,e),a(n,f,e),a(n,T,e),a(n,I,e),a(n,M,e),a(n,y,e),a(n,A,e),a(n,l,e),l.innerHTML=j,a(n,_,e),a(n,i,e),i.innerHTML=B},p:E,i:E,o:E,d(n){n&&s(o),n&&s(S),n&&s(c),n&&s(C),n&&s(r),n&&s(w),n&&s(u),n&&s(D),n&&s(d),n&&s(g),n&&s(k),n&&s(h),n&&s(m),n&&s(b),n&&s(v),n&&s(x),n&&s(f),n&&s(T),n&&s(I),n&&s(M),n&&s(y),n&&s(A),n&&s(l),n&&s(_),n&&s(i)}}}const L={title:"Events",published:"2020-03-22T21:36:59.459Z",author:"Vizitor",summary:"Events info",layout:"blog"};class R extends N{constructor(o){super();G(this,o,null,V,O,{})}}export{R as default,L as metadata};
