import{S as tn,i as pn,s as on,e as t,f as p,g as c,h as a,n as Z,p as e}from"./vendor.47d6f2b6.js";function cn(h){let o,J,g,A,m,V,y,N,S,x,l,Q=`<code class="language-pascal">  TMessenger <span class="token operator">=</span> <span class="token keyword">class</span>
  <span class="token keyword">public</span>
    <span class="token keyword">procedure</span> SendMessage<span class="token punctuation">(</span>Msg<span class="token punctuation">,</span> UserID <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">virtual</span><span class="token punctuation">;</span>
    <span class="token keyword">property</span> MessengerName<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token keyword">read</span> GetMessengerName<span class="token punctuation">;</span>
    <span class="token keyword">property</span> Connected <span class="token punctuation">:</span> Boolean <span class="token keyword">read</span> fConnected <span class="token keyword">write</span> SetConnected <span class="token keyword">default</span> <span class="token keyword">False</span><span class="token punctuation">;</span>
    <span class="token keyword">property</span> Token <span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token keyword">read</span> GetToken <span class="token keyword">write</span> SetToken<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span></code>`,q,w,B,u,Y=`<code class="language-pascal">  ViberMessenger <span class="token punctuation">:</span> TMessenger<span class="token punctuation">;</span>
  TelegramMessenger <span class="token punctuation">:</span> TMessenger<span class="token punctuation">;</span>
  DiscordMessenger <span class="token punctuation">:</span> TMessenger<span class="token punctuation">;</span></code>`,H,M,R,T,G,f,P,b,L,_,$,r,nn=`<code class="language-pascal"><span class="token keyword">Program</span> <span class="token keyword">New</span><span class="token punctuation">;</span>
  
<span class="token keyword">procedure</span> MessengerEventHandler<span class="token punctuation">(</span>Sender <span class="token punctuation">:</span> TMessenger<span class="token punctuation">;</span> SenderNickName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> SenderId<span class="token punctuation">,</span> ChatId <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> EventMsg <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> EventCode <span class="token punctuation">:</span> Byte<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">case</span> EventCode <span class="token keyword">of</span>
    <span class="token number">0</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span>Sender<span class="token punctuation">.</span>MessengerName <span class="token operator">+</span> <span class="token string">' Connected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token number">1</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span>Sender<span class="token punctuation">.</span>MessengerName <span class="token operator">+</span> <span class="token string">' Disconnected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token keyword">begin</span>
          AddToSystemJournal<span class="token punctuation">(</span>Sender<span class="token punctuation">.</span>MessengerName <span class="token operator">+</span> <span class="token string">' Message incoming from "'</span> <span class="token operator">+</span> SenderNickName <span class="token operator">+</span> <span class="token string">'" (SenderId: '</span> <span class="token operator">+</span> SenderId <span class="token operator">+</span> <span class="token string">'), ChatID:  '</span> <span class="token operator">+</span> SenderId <span class="token operator">+</span> <span class="token string">' :'</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">end</span><span class="token punctuation">;</span>
    <span class="token number">3</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span>Sender<span class="token punctuation">.</span>MessengerName <span class="token operator">+</span> <span class="token string">' Error raised : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">Begin</span>
  SetEventProc<span class="token punctuation">(</span>evMessengerEvent<span class="token punctuation">,</span><span class="token string">'MessengerEventHandler'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                                        
 <span class="token keyword">if</span> <span class="token operator">not</span> ViberMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    ViberMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    ViberMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  ViberMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth ViberBot!'</span><span class="token punctuation">,</span><span class="token string">'receiver_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
     
  <span class="token keyword">if</span> <span class="token operator">not</span> TelegramMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    TelegramMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    TelegramMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  TelegramMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth TelegramBot!'</span><span class="token punctuation">,</span><span class="token string">'receiver_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            

  <span class="token keyword">if</span> <span class="token operator">not</span> DiscordMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    DiscordMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    DiscordMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  DiscordMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth DiscordBot!'</span><span class="token punctuation">,</span><span class="token string">'channel_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">While</span> <span class="token keyword">True</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    wait<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
       
<span class="token keyword">end</span><span class="token punctuation">.</span></code>`,F,C,U,k,sn=`<code class="language-pascal"><span class="token keyword">program</span> Project2<span class="token punctuation">;</span>

<span class="token comment">&#123;$R *.res&#125;</span>

<span class="token keyword">uses</span>
  System<span class="token punctuation">.</span>SysUtils<span class="token punctuation">,</span>
  windows<span class="token punctuation">,</span>
  stealth_script <span class="token operator">in</span> <span class="token string">'....stealth_script.pas'</span><span class="token punctuation">;</span>

<span class="token keyword">procedure</span> MessengerEventHandler<span class="token punctuation">(</span>MesID <span class="token punctuation">:</span> Cardinal<span class="token punctuation">;</span> SenderNickName <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
SenderId<span class="token punctuation">,</span> ChatId <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> EventMsg <span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> EventCode <span class="token punctuation">:</span> Byte<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">stdcall</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">with</span> Script <span class="token keyword">do</span>
  <span class="token keyword">case</span> MesID <span class="token keyword">of</span>
    <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span> <span class="token punctuation">:</span>
    <span class="token keyword">case</span> EventCode <span class="token keyword">of</span>
      <span class="token number">0</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Telegram'</span> <span class="token operator">+</span> <span class="token string">' Connected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">1</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Telegram'</span> <span class="token operator">+</span> <span class="token string">' Disconnected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token keyword">begin</span>
            AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Telegram'</span> <span class="token operator">+</span> <span class="token string">' Message incoming from "'</span> <span class="token operator">+</span> SenderNickName <span class="token operator">+</span> <span class="token string">'" (SenderId: '</span> <span class="token operator">+</span> SenderId <span class="token operator">+</span> <span class="token string">') : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            TelegramMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'response from Stealth : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">,</span>SenderId<span class="token punctuation">)</span>
          <span class="token keyword">end</span><span class="token punctuation">;</span>
      <span class="token number">3</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Telegram'</span> <span class="token operator">+</span> <span class="token string">' Error raised : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>

    <span class="token number">2</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> EventCode <span class="token keyword">of</span>
      <span class="token number">0</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Viber'</span> <span class="token operator">+</span> <span class="token string">' Connected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">1</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Viber'</span> <span class="token operator">+</span> <span class="token string">' Disconnected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token keyword">begin</span>
            AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Viber'</span> <span class="token operator">+</span> <span class="token string">' Message incoming from "'</span> <span class="token operator">+</span> SenderNickName <span class="token operator">+</span> <span class="token string">'" (SenderId: '</span> <span class="token operator">+</span> SenderId <span class="token operator">+</span> <span class="token string">') : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            ViberMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'response from Stealth : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">,</span>SenderId<span class="token punctuation">)</span>
          <span class="token keyword">end</span><span class="token punctuation">;</span>
      <span class="token number">3</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Viber'</span> <span class="token operator">+</span> <span class="token string">' Error raised : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> EventCode <span class="token keyword">of</span>
      <span class="token number">0</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Discord'</span> <span class="token operator">+</span> <span class="token string">' Connected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">1</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Discord'</span> <span class="token operator">+</span> <span class="token string">' Disconnected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token keyword">begin</span>
            AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Discord'</span> <span class="token operator">+</span> <span class="token string">' Message incoming from "'</span> <span class="token operator">+</span> SenderNickName
                               <span class="token operator">+</span> <span class="token string">'" (SenderId: '</span> <span class="token operator">+</span> SenderId <span class="token operator">+</span> <span class="token string">') on ChannelId '</span>
                               <span class="token operator">+</span> ChatId <span class="token operator">+</span> <span class="token string">' : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            DiscordMessenger.SendMessage('response from Stealth : ' + EventMsg,ChatId)</span>
          <span class="token keyword">end</span><span class="token punctuation">;</span>
      <span class="token number">3</span> <span class="token punctuation">:</span> AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Discord'</span> <span class="token operator">+</span> <span class="token string">' Error raised : '</span> <span class="token operator">+</span> EventMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">Begin</span>
  Script<span class="token punctuation">.</span>SetEventProc<span class="token punctuation">(</span>evMessengerEvent<span class="token punctuation">,</span> <span class="token operator">@</span>MessengerEventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Script<span class="token punctuation">.</span>ViberMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">False</span><span class="token punctuation">;</span>

 <span class="token keyword">if</span> <span class="token operator">not</span> Script<span class="token punctuation">.</span>ViberMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    Script<span class="token punctuation">.</span>ViberMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    Script<span class="token punctuation">.</span>ViberMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  Script<span class="token punctuation">.</span>ViberMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth ViberBot!'</span><span class="token punctuation">,</span><span class="token string">'receiver_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token keyword">if</span> <span class="token operator">not</span> Script<span class="token punctuation">.</span>TelegramMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    Script<span class="token punctuation">.</span>TelegramMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    Script<span class="token punctuation">.</span>TelegramMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  Script<span class="token punctuation">.</span>TelegramMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth TelegramBot!'</span><span class="token punctuation">,</span><span class="token string">'receiver_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  Script<span class="token punctuation">.</span>SetEventProc<span class="token punctuation">(</span>evMessengerEvent<span class="token punctuation">,</span> <span class="token operator">@</span>MessengerEventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Script<span class="token punctuation">.</span>DiscordMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">False</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token operator">not</span> Script<span class="token punctuation">.</span>DiscordMessenger<span class="token punctuation">.</span>Connected <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    Script<span class="token punctuation">.</span>DiscordMessenger<span class="token punctuation">.</span>Token <span class="token operator">:=</span> <span class="token string">'your_token_here'</span><span class="token punctuation">;</span>
    Script<span class="token punctuation">.</span>DiscordMessenger<span class="token punctuation">.</span>Connected <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
  Script<span class="token punctuation">.</span>DiscordMessenger<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span><span class="token string">'hello from Stealth DiscordBot!'</span><span class="token punctuation">,</span><span class="token string">'channel_id_here'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">While</span> <span class="token keyword">True</span> <span class="token keyword">do</span>
    Script<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">.</span>
</code>`,W,v,j,D,z,E,K,i,an=`<code class="language-python">
MSG <span class="token operator">=</span> <span class="token string">'Event test'</span>
ID <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 1-Telegram, 2-Viber, 3-Discord, 0-default</span>
TOKEN <span class="token operator">=</span> <span class="token string">'your_token_here'</span>
USER_ID <span class="token operator">=</span> <span class="token string">'id'</span>


<span class="token keyword">def</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Callback args: '</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Messenger test started'</span><span class="token punctuation">)</span>
    SetEventProc<span class="token punctuation">(</span><span class="token string">'evMessengerEvent'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    
    MessengerSetToken<span class="token punctuation">(</span>ID<span class="token punctuation">,</span> TOKEN<span class="token punctuation">)</span>
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Token set'</span><span class="token punctuation">,</span> MessengerGetToken<span class="token punctuation">(</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Connecting...'</span><span class="token punctuation">)</span>
    MessengerSetConnected<span class="token punctuation">(</span>ID<span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token keyword">not</span> MessengerGetConnected<span class="token punctuation">(</span>ID<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Wait<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Connected state: '</span><span class="token punctuation">,</span> MessengerGetConnected<span class="token punctuation">(</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>

    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Name is: '</span><span class="token punctuation">,</span> MessengerGetName<span class="token punctuation">(</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>

    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Sending message to &#123;0&#125;'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>USER_ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    MessengerSendMessage<span class="token punctuation">(</span>ID<span class="token punctuation">,</span> MSG<span class="token punctuation">,</span> USER_ID<span class="token punctuation">)</span>
    
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Disconnecting...'</span><span class="token punctuation">)</span>
    MessengerSetConnected<span class="token punctuation">(</span>ID<span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
    
    AddToSystemJournal<span class="token punctuation">(</span><span class="token string">'Done.'</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,O,I,X,d,en=`<code class="language-c#">Stealth _s = Stealth.Default;

_s.Viber.Connected += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal(&quot;Viber connected&quot;); &#125;;
_s.Viber.Disconnected += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal(&quot;Viber disconnected&quot;); &#125;;

_s.Viber.IncomingMessage += (o, e) =&gt;
&#123;
    _s.Journal.AddToSystemJournal($&quot;Viber incoming from &#39;&#123;e.SenderNickname&#125;&#39; (SenderId: &#123; e.SenderId&#125;): &#123;e.Message&#125;&quot;);
    _s.Viber.SendMessage($&quot;Viber response from Stealth: &#123;e.Message&#125;&quot;, e.SenderId);
&#125;;

_s.Viber.Error += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal($&quot;Viber error: &#123;e.Message&#125;&quot;); &#125;;

_s.Telegram.Connected += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal(&quot;Telegram connected&quot;); &#125;;
_s.Telegram.Disconnected += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal(&quot;Telegram disconnected&quot;); &#125;;
_s.Telegram.IncomingMessage += (o, e) =&gt;
&#123;
    _s.Journal.AddToSystemJournal($&quot;Telegram incoming from &#39;&#123;e.SenderNickname&#125;&#39; (SenderId: &#123; e.SenderId&#125;): &#123;e.Message&#125;&quot;);
    _s.Telegram.SendMessage($&quot;Telegram response from Stealth: &#123;e.Message&#125;&quot;, e.SenderId);
&#125;;
_s.Telegram.Error += (o, e) =&gt; &#123; _s.Journal.AddToSystemJournal($&quot;Telegram error: &#123;e.Message&#125;&quot;); &#125;;

_s.Viber.Connect(VIBER_TOKEN);
_s.Telegram.Connect(TELEGRAM_TOKEN);</code>`;return{c(){o=t("h1"),o.textContent="Messengers",J=p(),g=t("p"),g.textContent="Work with bots in Stealth realized with messengers bots technology.",A=p(),m=t("p"),m.textContent="At then moment has been done realization of Telegram, Viber and Discord.",V=p(),y=t("p"),y.textContent="\u201D \u2018Skype\u2019 \u201D can\u2019t be done due to to technical reson",N=p(),S=t("p"),S.textContent="In the internal scripts (PS and PAX) there is a TMessenger class",x=p(),l=t("pre"),q=p(),w=t("p"),w.textContent="and 3 variables:",B=p(),u=t("pre"),H=p(),M=t("p"),M.textContent="Content of this classes you can inspect when debugging scripts in Editor window.",R=p(),T=t("p"),T.textContent="Token must be set before connection (Bot Registration instruction - [[Doc:RU/Manual/Reference/Messengers/BotRegistration]] )",G=p(),f=t("p"),f.textContent="Warning! For correct work of Viber Ngrok needed, if Ngrok not install\u0435d - Stealth will offer you to download it and put to Stealth folder.",P=p(),b=t("h3"),b.textContent="WARNING! In external scripts first parameter in evMessengerEvent is not a TMessenger object, but messenger code - 1 is telegram, 2 - viber, 3 - Discord",L=p(),_=t("p"),_.textContent="Big example for messenger all-side using",$=p(),r=t("pre"),F=p(),C=t("p"),C.textContent="Example 2, external script on Delphi",U=p(),k=t("pre"),W=p(),v=t("p"),v.innerHTML=`ID of user-sender can be easy taken - just send any message from this user to our bot, connected by Stealth with script from examples. In Sysjournal will come message like
17:27:37:759 [Test - Test]: Telegram Message incoming from \u201CVizit0r\u201D (SenderId: 435486649) : testtest<br/>
where 435486649 is sender ID. (id - fake, given for example).`,j=p(),D=t("p"),D.textContent="For Discord you should use not userID, but channel ID. Can be taken from receiving message as well.",z=p(),E=t("p"),E.textContent="Example 3, external script on Python:",K=p(),i=t("pre"),O=p(),I=t("p"),I.textContent="Example 4, external script on C#",X=p(),d=t("pre"),c(l,"class","language-pascal"),c(u,"class","language-pascal"),c(r,"class","language-pascal"),c(k,"class","language-pascal"),c(i,"class","language-python"),c(d,"class","language-c#")},m(n,s){a(n,o,s),a(n,J,s),a(n,g,s),a(n,A,s),a(n,m,s),a(n,V,s),a(n,y,s),a(n,N,s),a(n,S,s),a(n,x,s),a(n,l,s),l.innerHTML=Q,a(n,q,s),a(n,w,s),a(n,B,s),a(n,u,s),u.innerHTML=Y,a(n,H,s),a(n,M,s),a(n,R,s),a(n,T,s),a(n,G,s),a(n,f,s),a(n,P,s),a(n,b,s),a(n,L,s),a(n,_,s),a(n,$,s),a(n,r,s),r.innerHTML=nn,a(n,F,s),a(n,C,s),a(n,U,s),a(n,k,s),k.innerHTML=sn,a(n,W,s),a(n,v,s),a(n,j,s),a(n,D,s),a(n,z,s),a(n,E,s),a(n,K,s),a(n,i,s),i.innerHTML=an,a(n,O,s),a(n,I,s),a(n,X,s),a(n,d,s),d.innerHTML=en},p:Z,i:Z,o:Z,d(n){n&&e(o),n&&e(J),n&&e(g),n&&e(A),n&&e(m),n&&e(V),n&&e(y),n&&e(N),n&&e(S),n&&e(x),n&&e(l),n&&e(q),n&&e(w),n&&e(B),n&&e(u),n&&e(H),n&&e(M),n&&e(R),n&&e(T),n&&e(G),n&&e(f),n&&e(P),n&&e(b),n&&e(L),n&&e(_),n&&e($),n&&e(r),n&&e(F),n&&e(C),n&&e(U),n&&e(k),n&&e(W),n&&e(v),n&&e(j),n&&e(D),n&&e(z),n&&e(E),n&&e(K),n&&e(i),n&&e(O),n&&e(I),n&&e(X),n&&e(d)}}}const un={title:"Messengers(Telegram,Viber,Discord)",published:"2020-03-22T21:36:59.459Z",author:"Vizitor",summary:"Messengers(Telegram,Viber,Discord)",layout:"blog"};class rn extends tn{constructor(o){super();pn(this,o,null,cn,on,{})}}export{rn as default,un as metadata};
