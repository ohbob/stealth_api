import{S as xe,i as ce,s as be,e as s,f as o,g as Se,h as l,n as Ce,p as i}from"./vendor.47d6f2b6.js";function Te(ve){let n,U,p,W,f,j,u,D,m,V,a,Y,d,Z,y,B,h,F,w,G,C,J,v,K,x,Q,c,X,b,$,S,ee,T,te,P,le,g,ie,k,se,r,oe,L,ne,M,re,H,pe,I,fe,_,ue,z,me,A,ae,N,de,R,ye,O,he,q,we,E;return{c(){n=s("h1"),n.textContent="Installation and Configuration",U=o(),p=s("p"),p.innerHTML='Installation is simple: just <a href="https://stealth.od.ua/" rel="nofollow">download</a> latest Stealth version and unzip it somewhere.',W=o(),f=s("h1"),f.textContent="Configuration",j=o(),u=s("p"),u.textContent="Configuration is a few step process, you need to create profiles for character, shard and client.",D=o(),m=s("p"),m.textContent="You need to open profile editor and configure:",V=o(),a=s("ul"),a.innerHTML=`<li>character profile - login &amp; password, shard profile and shard number and character number for autologin</li> 
<li>shard profile - game server address/ip, port, client version, client profile</li> 
<li>client profile - path to uo\\client.exe to launch graphical client with the <strong>Start Client</strong> button</li>`,Y=o(),d=s("h2"),d.textContent="Open profile editor",Z=o(),y=s("p"),y.innerHTML='<img src="/images/Open_profile_setup.png" alt="Open_profile_setup.png"/>',B=o(),h=s("h2"),h.textContent="Character setup",F=o(),w=s("p"),w.innerHTML='<img src="/images/profiles.png" alt="Profile setup.png"/>',G=o(),C=s("ul"),C.innerHTML=`<li><strong>Name</strong> - the name for the character profile in the Stealth</li> 
<li><strong>Login</strong> - game account login</li> 
<li><strong>Password</strong> - game account password</li> 
<li><strong>Reconnect time</strong> - delay to automatically reconnect to the shard after the disconnection, in seconds (10 - means 10 seconds)</li> 
<li><strong>Shard</strong> - a drop-down list of game servers (shards) and <strong>Shards Setup button</strong>.</li>`,J=o(),v=s("p"),v.textContent="When you connect to the game server it is usually a list of game servers, and then you select one of them, then you select from playable characters list:",K=o(),x=s("p"),x.textContent="How select shard and character index - Setting the game server and character",Q=o(),c=s("ul"),c.innerHTML=`<li><strong>Ask for me</strong> - to ask</li> 
<li><strong>Remember my choise</strong> - remember my choice</li> 
<li><strong>Always select</strong> - select automatically shard and character defined bellow</li> 
<li><strong>Shard</strong> - serial number of the server, where the first server in the list is 1</li> 
<li><strong>Char</strong> - serial number of a game character, where the first character in the list is 1</li>`,X=o(),b=s("p"),b.textContent="\u261B To add a new profile, press the green button in the lower left corner of the Profile Setup.",$=o(),S=s("p"),S.textContent="\u261B To delete, click the red minus sign in the lower left corner of the Profile Setup.",ee=o(),T=s("p"),T.textContent="\u261B To save your changes, click Save.",te=o(),P=s("h2"),P.textContent="Shard setup",le=o(),g=s("p"),g.innerHTML='<img src="/images/Shard_setup.png" alt="Shard setup.png"/>',ie=o(),k=s("ul"),k.innerHTML=`<li><p><strong>Name</strong> - the name for a shard in the Stealth</p></li> 
<li><p><strong>Address</strong> (in the old version - IP) - shard address or ip</p></li> 
<li><p><strong>Port</strong> - shard port</p></li> 
<li><p><strong>Use Proxy</strong> - proxy</p></li> 
<li><p><strong>Proxy IP</strong> - address of the proxy</p></li> 
<li><p><strong>Proxy Port</strong> - the port the proxy server</p></li> 
<li><p><strong>No Auth / With Auth</strong> - does not require authorization / authentication is required</p></li> 
<li><p><strong>Proxy Auth Login and Proxy Auth Password</strong> - the login and password for the proxy server</p></li> 
<li><p><strong>Client version</strong> - specify the version of the client needed to play on the shard (eg 2.0.3 client will be: 2.0.3.0)</p></li> 
<li><p><strong>Encrypted client</strong> - use encryption. Necessary for those servers where data encryption is enabled. Most free servers do not use encrypted client.</p></li> 
<li><p><strong>UO files path</strong></p> 
<p>- the directory with the game files (files like map0.mul, tiledata.mul, etc.)</p> 
<ol><li>With proper choice of the directory will be displayed: <strong>Status: Path Correct</strong></li></ol></li>`,se=o(),r=s("ol"),r.innerHTML="<li>If not properly selected directory will be displayed: <strong>Status: Path Incorrect</strong></li>",oe=o(),L=s("ul"),L.innerHTML=`<li><p><strong>Selected Client</strong> - the client\u2019s choice for the shard and <strong>Clients setup button</strong></p></li> 
<li><p><strong>Enable Razor support</strong> - Some servers accept only clients with attached Razor assistant. This checkbox will enable Razor emulaation in Stealth.</p></li> 
<li><p><strong>Server type</strong> - In common should be \u201CDefault\u201D , but some specific shards have items in this list for normal work.</p></li>`,ne=o(),M=s("p"),M.textContent="\u261B To add a shard, click Add",re=o(),H=s("p"),H.textContent="\u261B To remove a shard hit the Delete button",pe=o(),I=s("p"),I.textContent="\u261B To save the settings, click Save",fe=o(),_=s("h2"),_.textContent="Client setup",ue=o(),z=s("p"),z.innerHTML='<img src="/images/Client_setup.png" alt="Client_setup.png"/>',me=o(),A=s("ul"),A.innerHTML=`<li><strong>Clients</strong> - a list of clients for shards</li> 
<li><strong>Name</strong> - name of the client in the Stealth</li> 
<li><strong>Path</strong> - the path to the client</li> 
<li><strong>Version</strong> - game client version</li> 
<li><strong>Encrypted client</strong> - If your client uses encryption, you need to put this check, if the encryption is removed, respectively, then it is not necessary, otherwise the client can \u201Cfall\u201D or simply do not connect.</li> 
<li><strong>Change resolution</strong> - resizing the game window (where the character is displayed and the world)(like Razor) allowed values: width(320-1280), height(240-1024)</li> 
<li><strong>Remove stamina check</strong> - allows passing through other players or NPC</li> 
<li><strong>Path to MultiClient</strong> - allows you to run multiple copies of the client</li> 
<li><strong>Use steal.cfg instead login.cfg</strong> - save Stealth local server address to steal.cfg file instead of login.cfg</li>`,ae=o(),N=s("p"),N.textContent="\u261B To add a client - click the green cross in the upper right corner",de=o(),R=s("p"),R.textContent="\u261B To delete a client, click the red minus sign in the right corner",ye=o(),O=s("p"),O.textContent="\u261B The arrows in the upper right corner of the move to client list of customers up and down respectively",he=o(),q=s("h2"),q.textContent="You are done",we=o(),E=s("p"),E.innerHTML="Now you can select profile and click <strong>Connect</strong> button to login to the game.",Se(r,"start","2")},m(e,t){l(e,n,t),l(e,U,t),l(e,p,t),l(e,W,t),l(e,f,t),l(e,j,t),l(e,u,t),l(e,D,t),l(e,m,t),l(e,V,t),l(e,a,t),l(e,Y,t),l(e,d,t),l(e,Z,t),l(e,y,t),l(e,B,t),l(e,h,t),l(e,F,t),l(e,w,t),l(e,G,t),l(e,C,t),l(e,J,t),l(e,v,t),l(e,K,t),l(e,x,t),l(e,Q,t),l(e,c,t),l(e,X,t),l(e,b,t),l(e,$,t),l(e,S,t),l(e,ee,t),l(e,T,t),l(e,te,t),l(e,P,t),l(e,le,t),l(e,g,t),l(e,ie,t),l(e,k,t),l(e,se,t),l(e,r,t),l(e,oe,t),l(e,L,t),l(e,ne,t),l(e,M,t),l(e,re,t),l(e,H,t),l(e,pe,t),l(e,I,t),l(e,fe,t),l(e,_,t),l(e,ue,t),l(e,z,t),l(e,me,t),l(e,A,t),l(e,ae,t),l(e,N,t),l(e,de,t),l(e,R,t),l(e,ye,t),l(e,O,t),l(e,he,t),l(e,q,t),l(e,we,t),l(e,E,t)},p:Ce,i:Ce,o:Ce,d(e){e&&i(n),e&&i(U),e&&i(p),e&&i(W),e&&i(f),e&&i(j),e&&i(u),e&&i(D),e&&i(m),e&&i(V),e&&i(a),e&&i(Y),e&&i(d),e&&i(Z),e&&i(y),e&&i(B),e&&i(h),e&&i(F),e&&i(w),e&&i(G),e&&i(C),e&&i(J),e&&i(v),e&&i(K),e&&i(x),e&&i(Q),e&&i(c),e&&i(X),e&&i(b),e&&i($),e&&i(S),e&&i(ee),e&&i(T),e&&i(te),e&&i(P),e&&i(le),e&&i(g),e&&i(ie),e&&i(k),e&&i(se),e&&i(r),e&&i(oe),e&&i(L),e&&i(ne),e&&i(M),e&&i(re),e&&i(H),e&&i(pe),e&&i(I),e&&i(fe),e&&i(_),e&&i(ue),e&&i(z),e&&i(me),e&&i(A),e&&i(ae),e&&i(N),e&&i(de),e&&i(R),e&&i(ye),e&&i(O),e&&i(he),e&&i(q),e&&i(we),e&&i(E)}}}const ge={title:"Installation and configuration",published:"2030-02-21T21:36:59.459Z",author:"Vizitor",summary:"Install",layout:"blog"};class ke extends xe{constructor(n){super();ce(this,n,null,Te,be,{})}}export{ke as default,ge as metadata};