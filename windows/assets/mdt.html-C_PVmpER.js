import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as i,o as t,r as l}from"./app-DVXG84Ap.js";const o={},r=i(`<h2 id="前提准备" tabindex="-1"><a class="header-anchor" href="#前提准备"><span>前提准备</span></a></h2><p>MDT部署在WDS同一台服务器。</p><h2 id="adk" tabindex="-1"><a class="header-anchor" href="#adk"><span>ADK</span></a></h2><p>Windows 评估和部署工具包 (Windows ADK) 以及 Windows PE 加载项。</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> adksetup.exe</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> adkwinpesetup.exe</label></li></ul><p>https://learn.microsoft.com/zh-cn/windows-hardware/get-started/adk-install</p><p>whoami</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>whoami
minicontoso\\administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mdt" tabindex="-1"><a class="header-anchor" href="#mdt"><span>MDT</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> MicrosoftDeploymentToolkit_x64.msi</label></li></ul><p>https://learn.microsoft.com/en-us/mem/configmgr/mdt/</p><h3 id="新建部署共享" tabindex="-1"><a class="header-anchor" href="#新建部署共享"><span>新建部署共享</span></a></h3><p>打开MDT</p><p>开始菜单 -&gt; Microsoft Deployment Toolkit -&gt; Deployment Workbench</p><p>新建部署共享</p><p>Deployment Shares右键 -&gt; New Deployment Share</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Path：D:\\DeploymentShare
Share：DeploymentShare$
Descriptive Name：MDT Deployment Share
Optios：取消所有选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PowerShell脚本</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">New-Item</span> <span class="token operator">-</span>Path <span class="token string">&quot;D:\\DeploymentShare&quot;</span> <span class="token operator">-</span>ItemType directory
<span class="token function">New-SmbShare</span> <span class="token operator">-</span>Name <span class="token string">&quot;DeploymentShare$&quot;</span> <span class="token operator">-</span>Path <span class="token string">&quot;D:\\DeploymentShare&quot;</span> <span class="token operator">-</span>FullAccess Administrators
<span class="token function">Import-Module</span> <span class="token string">&quot;C:\\Program Files\\Microsoft Deployment Toolkit\\bin\\MicrosoftDeploymentToolkit.psd1&quot;</span>
<span class="token function">new-PSDrive</span> <span class="token operator">-</span>Name <span class="token string">&quot;DS001&quot;</span> <span class="token operator">-</span>PSProvider <span class="token string">&quot;MDTProvider&quot;</span> <span class="token operator">-</span>Root <span class="token string">&quot;D:\\DeploymentShare&quot;</span> <span class="token operator">-</span>Description <span class="token string">&quot;MDT Deployment Share&quot;</span> <span class="token operator">-</span>NetworkPath <span class="token string">&quot;\\\\BJWDS01\\DeploymentShare$&quot;</span> <span class="token operator">-</span>Verbose <span class="token punctuation">|</span> <span class="token function">add-MDTPersistentDrive</span> <span class="token operator">-</span>Verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看D:\\DeploymentShare共享权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-SmbShare</span>

Name             ScopeName Path               Description                      
<span class="token operator">--</span><span class="token operator">--</span>             <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span>               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>                      
ADMIN$           <span class="token operator">*</span>         C:\\Windows         Remote Admin                     
C$               <span class="token operator">*</span>         C:\\                Default share                    
D$               <span class="token operator">*</span>         D:\\                Default share                    
DeploymentShare$ <span class="token operator">*</span>         D:\\DeploymentShare MDT Deployment Share             
IPC$             <span class="token operator">*</span>                            Remote IPC                       
REMINST          <span class="token operator">*</span>         D:\\remoteInstall   Windows Deployment Services Share

<span class="token punctuation">(</span><span class="token function">Get-SmbShare</span> DeploymentShare$<span class="token punctuation">)</span><span class="token punctuation">.</span>PresetPathAcl<span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看D:\\DeploymentShare安全权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\DeploymentShare<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : None
PropagationFlags  : None

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : True
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : NT AUTHORITY\\SYSTEM
IsInherited       : True
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : 268435456
AccessControlType : Allow
IdentityReference : CREATOR OWNER
IsInherited       : True
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : InheritOnly

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : BUILTIN\\Users
IsInherited       : True
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : AppendData
AccessControlType : Allow
IdentityReference : BUILTIN\\Users
IsInherited       : True
InheritanceFlags  : ContainerInherit
PropagationFlags  : None

FileSystemRights  : CreateFiles
AccessControlType : Allow
IdentityReference : BUILTIN\\Users
IsInherited       : True
InheritanceFlags  : ContainerInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入系统镜像" tabindex="-1"><a class="header-anchor" href="#导入系统镜像"><span>导入系统镜像</span></a></h3><p>Deployment Shares -&gt; MDT Deployment Share -&gt; Operating Systems右键 -&gt; Import Operating System</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Full set of source files（Windows DVD as source）
Source directory：G:\\
Destination：Windows 10 Enterprise Evaluation x64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Powershell脚本</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Import-Module</span> <span class="token string">&quot;C:\\Program Files\\Microsoft Deployment Toolkit\\bin\\MicrosoftDeploymentToolkit.psd1&quot;</span>
<span class="token function">New-PSDrive</span> <span class="token operator">-</span>Name <span class="token string">&quot;DS001&quot;</span> <span class="token operator">-</span>PSProvider MDTProvider <span class="token operator">-</span>Root <span class="token string">&quot;D:\\DeploymentShare&quot;</span>
<span class="token function">import-mdtoperatingsystem</span> <span class="token operator">-</span>path <span class="token string">&quot;DS001:\\Operating Systems&quot;</span> <span class="token operator">-</span>SourcePath <span class="token string">&quot;G:\\&quot;</span> <span class="token operator">-</span>DestinationFolder <span class="token string">&quot;Windows 10 Enterprise Evaluation x64&quot;</span> <span class="token operator">-</span>Verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建任务序列" tabindex="-1"><a class="header-anchor" href="#创建任务序列"><span>创建任务序列</span></a></h3><p>Deployment Shares -&gt; MDT Deployment Share -&gt; Task Sequences右键 -&gt; New Task Sequence</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Task sequence ID：MC001
Task sequence name：MC Windows 10 Enterprise
Template：Standard Client Task Sequence
Select OS：Windows 10 Enterprise
Specify Product Key：Do not specify a product key at this time
OS Settings：Organization：MC
Admin Password：Do not specify an Administrator password at this time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新部署共享" tabindex="-1"><a class="header-anchor" href="#更新部署共享"><span>更新部署共享</span></a></h3><p>Deployment Shares -&gt; MDT Deployment Share右键 -&gt; Update Deployment Share</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> Optimize the boot image updating process</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> Completely regenerate the boot images</label></li></ul><h3 id="生成启动镜像" tabindex="-1"><a class="header-anchor" href="#生成启动镜像"><span>生成启动镜像</span></a></h3><p>更新部署共享后，检查启动镜像</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">ls</span> D:\\DeploymentShare\\Boot\\<span class="token operator">*</span><span class="token punctuation">.</span>wim

    Directory: D:\\DeploymentShare\\Boot

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span><span class="token operator">-</span>         6/16/2024   5:29 AM      434025325 LiteTouchPE_x64<span class="token punctuation">.</span>wim
<span class="token operator">-</span>a-<span class="token operator">--</span><span class="token operator">-</span>         6/16/2024   5:27 AM      433327065 LiteTouchPE_x86<span class="token punctuation">.</span>wim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加启动镜像到wds服务" tabindex="-1"><a class="header-anchor" href="#添加启动镜像到wds服务"><span>添加启动镜像到WDS服务</span></a></h3><p>移除当前boot.wim</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-WdsBootImage</span>

Architecture            : X64
CreationTime            : 12/7/2019 5:27:10 AM
DefaultLanguage         : zh-CN
Description             : Microsoft Windows Setup <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>
DisplayOrder            : 500000
Enabled                 : True
FileName                : boot<span class="token punctuation">.</span>wim
Hal                     : 
Id                      : <span class="token punctuation">{</span>E7353765-A6C0-4BEE-B905-5DBD81694E66<span class="token punctuation">}</span>
Index                   : 2
Languages               : <span class="token punctuation">{</span>zh-CN<span class="token punctuation">}</span>
LastModificationTime    : 6/15/2024 11:32:26 PM
Name                    : Microsoft Windows Setup <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>
PriorityDefaulted       : True
ProductFamily           : 
ProductName             : Microsoft® Windows® Operating System
ServicePackLevel        : 0
Size                    : 2077454547
SupportsDriverInjection : True
SystemRoot              : WINDOWS
Version                 : 10<span class="token punctuation">.</span>0<span class="token punctuation">.</span>19041
PSComputerName          : 
ImageName               : Microsoft Windows Setup <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>

<span class="token function">Get-WdsBootImage</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> ImageName<span class="token punctuation">,</span> Architecture

ImageName                     Architecture
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>                     <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
Microsoft Windows Setup <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>          X64

<span class="token function">Remove-WdsBootImage</span> <span class="token operator">-</span>ImageName <span class="token string">&quot;Microsoft Windows Setup (x64)&quot;</span> <span class="token operator">-</span>Architecture X64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加MDT生成启动镜像</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Import-WdsBootImage</span> <span class="token operator">-</span>Path <span class="token string">&quot;D:\\DeploymentShare\\Boot\\LiteTouchPE_x64.wim&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Get-WdsBootImage</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-WdsBootImage</span>

Architecture            : X64
CreationTime            : 4/1/2024 12:45:38 AM
DefaultLanguage         : en-US
Description             : Lite Touch Windows PE <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>
DisplayOrder            : 500000
Enabled                 : True
FileName                : LiteTouchPE_x64<span class="token punctuation">.</span>wim
Hal                     : 
Id                      : <span class="token punctuation">{</span>250AB72D-0842-454B-9E6A-28F5D4A87DAA<span class="token punctuation">}</span>
Index                   : 1
Languages               : <span class="token punctuation">{</span>en-US<span class="token punctuation">}</span>
LastModificationTime    : 6/16/2024 5:53:19 AM
Name                    : Lite Touch Windows PE <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>
PriorityDefaulted       : True
ProductFamily           : 
ProductName             : Microsoft® Windows® Operating System
ServicePackLevel        : 0
Size                    : 2456322725
SupportsDriverInjection : True
SystemRoot              : WINDOWS
Version                 : 10<span class="token punctuation">.</span>0<span class="token punctuation">.</span>26100
PSComputerName          : 
ImageName               : Lite Touch Windows PE <span class="token punctuation">(</span>x64<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络启动" tabindex="-1"><a class="header-anchor" href="#网络启动"><span>网络启动</span></a></h2>`,45);function p(c,d){const e=l("RevealJs");return t(),s("div",null,[r,a(e,{id:"revealjs-133",code:"eJyV0TsKgDAQRdF+ViHp42T8C+pegoaQIiJO9o/Y2Morbne6S0vKsdJ7Xw171VCUU/YxcD7Km5P6OqPhjchaS7+8wXiL8Q7jPcYHjI8YnzA+Q1wcxrGrgl0V7Kp8Vx+CkcYY",theme:"auto"})])}const v=n(o,[["render",p],["__file","mdt.html.vue"]]),h=JSON.parse('{"path":"/osd/mdt.html","title":"MDT工具集","lang":"zh-CN","frontmatter":{"title":"MDT工具集","icon":"toolbox","order":2,"category":["osd"],"tag":["osd"],"description":"前提准备 MDT部署在WDS同一台服务器。 ADK Windows 评估和部署工具包 (Windows ADK) 以及 Windows PE 加载项。 adksetup.exe adkwinpesetup.exe https://learn.microsoft.com/zh-cn/windows-hardware/get-started/adk-ins...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/windows/osd/mdt.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"MDT工具集"}],["meta",{"property":"og:description","content":"前提准备 MDT部署在WDS同一台服务器。 ADK Windows 评估和部署工具包 (Windows ADK) 以及 Windows PE 加载项。 adksetup.exe adkwinpesetup.exe https://learn.microsoft.com/zh-cn/windows-hardware/get-started/adk-ins..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"osd"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MDT工具集\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"前提准备","slug":"前提准备","link":"#前提准备","children":[]},{"level":2,"title":"ADK","slug":"adk","link":"#adk","children":[]},{"level":2,"title":"MDT","slug":"mdt","link":"#mdt","children":[{"level":3,"title":"新建部署共享","slug":"新建部署共享","link":"#新建部署共享","children":[]},{"level":3,"title":"导入系统镜像","slug":"导入系统镜像","link":"#导入系统镜像","children":[]},{"level":3,"title":"创建任务序列","slug":"创建任务序列","link":"#创建任务序列","children":[]},{"level":3,"title":"更新部署共享","slug":"更新部署共享","link":"#更新部署共享","children":[]},{"level":3,"title":"生成启动镜像","slug":"生成启动镜像","link":"#生成启动镜像","children":[]},{"level":3,"title":"添加启动镜像到WDS服务","slug":"添加启动镜像到wds服务","link":"#添加启动镜像到wds服务","children":[]}]},{"level":2,"title":"网络启动","slug":"网络启动","link":"#网络启动","children":[]}],"git":{},"readingTime":{"minutes":2.74,"words":822},"filePathRelative":"osd/mdt.md","autoDesc":true}');export{v as comp,h as data};
