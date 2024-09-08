import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as e,a as i,w as c,b as n,r as s,o as d,e as r}from"./app-BUegsOj5.js";const m="/assets/image/mdtadv/rules.png",p={},u=e("h2",{id:"前提准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前提准备"},[e("span",null,"前提准备")])],-1),v=n('<h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 网络自动安装操作系统</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 自动加域到指定组织单元</label></li></ul><h2 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>Rules</span></a></h2><img src="'+m+`"><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>[Settings]
Priority=Default
Properties=MyCustomProperty

[Default]
OSInstall=YES
SkipCapture=YES
SkipAdminPassword=YES
AdminPassword=*********<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">
SkipProductKey=YES
SkipBitLocker=YES
SkipUserData=YES
SkipDomainMembership=YES
JoinDomain=minicontoso.com
MachineObjectOU=OU=CorpComputer,OU=ROOT,DC=minicontoso,DC=com
DomainAdmin=administrator
DomainAdminPassword=</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>*********
DomainAdminDomain=minicontoso
SkipLocaleSelection=YES
KeyboardLocale=en-US
UserLocale=en-US
UILanguage=en-US
SkipTimeZone=Yes
TimeZoneName=China Standard Time
FinishAction=LOGOFF
SkipSummary=NO
SkipFinalSummary=YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bootstrap-ini" tabindex="-1"><a class="header-anchor" href="#bootstrap-ini"><span>Bootstrap.ini</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>[Settings]
Priority=Default

[Default]
DeployRoot=\\\\BJWDS01\\DeploymentShare$
UserID=administrator
UserDomain=minicontoso
UserPassword=************
SkipBDDWelcome=YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">LiteTouchPE_x64.wim</p><ol><li><p>更新部署共享</p></li><li><p>生成启动镜像 LiteTouchPE_x64.wim</p></li><li><p>添加启动镜像 LiteTouchPE_x64.wim 到WDS服务</p></li></ol></div><h2 id="网络启动" tabindex="-1"><a class="header-anchor" href="#网络启动"><span>网络启动</span></a></h2>`,9),h=n('<div class="hint-container important"><p class="hint-container-title">使用专用服务账号srv-wds</p><ol><li>服务账号srv-wds需要共享文件夹访问权限\\BJWDS01\\DeploymentShare$</li><li>服务账号srv-wds需要有将计算机加域的权限（OU=CorpComputer,OU=ROOT,DC=minicontoso,DC=com）</li></ol></div><p>更多：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 驱动程序集成</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 应用程序集成</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> ...</label></li></ul>',3);function b(k,S){const t=s("RouteLink"),a=s("RevealJs");return d(),o("div",null,[u,e("p",null,[i(t,{to:"/osd/mdt.html"},{default:c(()=>[r("MDT工具集")]),_:1})]),v,i(a,{id:"revealjs-52",code:"eJzjssnMTVcoLkq2VdJPLC5OLSnWz8xNTE/Vz00pSUwpA1EGhnoFeelK+nZcXLq6ulzE6DAiWYcxyTpMSNZhSrIOM5J1mJOswwKmAwA1bnrK",theme:"auto"}),h])}const w=l(p,[["render",b],["__file","mdt-advance.html.vue"]]),x=JSON.parse('{"path":"/osd/mdt-advance.html","title":"MDT自动化部署系统","lang":"zh-CN","frontmatter":{"title":"MDT自动化部署系统","icon":"spinner","order":3,"category":["osd"],"tag":["osd"],"description":"前提准备 目标 网络自动安装操作系统 自动加域到指定组织单元 Rules Bootstrap.ini LiteTouchPE_x64.wim 更新部署共享 生成启动镜像 LiteTouchPE_x64.wim 添加启动镜像 LiteTouchPE_x64.wim 到WDS服务 网络启动 使用专用服务账号srv-wds 服务账号srv-wds需要共享文件...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/osd/mdt-advance.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"MDT自动化部署系统"}],["meta",{"property":"og:description","content":"前提准备 目标 网络自动安装操作系统 自动加域到指定组织单元 Rules Bootstrap.ini LiteTouchPE_x64.wim 更新部署共享 生成启动镜像 LiteTouchPE_x64.wim 添加启动镜像 LiteTouchPE_x64.wim 到WDS服务 网络启动 使用专用服务账号srv-wds 服务账号srv-wds需要共享文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"osd"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MDT自动化部署系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"前提准备","slug":"前提准备","link":"#前提准备","children":[]},{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"Rules","slug":"rules","link":"#rules","children":[]},{"level":2,"title":"Bootstrap.ini","slug":"bootstrap-ini","link":"#bootstrap-ini","children":[]},{"level":2,"title":"网络启动","slug":"网络启动","link":"#网络启动","children":[]}],"git":{},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"osd/mdt-advance.md","autoDesc":true}');export{w as comp,x as data};
