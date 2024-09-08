import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-BUegsOj5.js";const l={},t=e(`<h2 id="前提准备" tabindex="-1"><a class="header-anchor" href="#前提准备"><span>前提准备</span></a></h2><p>操作系统</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-CimInstance</span> <span class="token operator">-</span>ClassName Win32_OperatingSystem<span class="token punctuation">)</span><span class="token punctuation">.</span>Caption
Microsoft Windows Server 2022 Standard Evaluation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统命名</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Rename-Computer</span> <span class="token operator">-</span>NewName BJFS01 <span class="token operator">-</span>Restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IP地址</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>IP地址：10.10.10.31
子网掩码：255.255.255.0
默认网关：10.10.10.1
DNS服务器（首选）：10.10.10.10
DNS服务器（备选）：10.10.10.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加域</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Add-Computer</span> <span class="token operator">-</span>DomainName minicontoso<span class="token punctuation">.</span>com <span class="token operator">-</span>Credential minicontoso\\administrator <span class="token operator">-</span>Restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="原则" tabindex="-1"><a class="header-anchor" href="#原则"><span>原则</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 基于标准权限模式 Read / Write / Modify</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 在同一目录层级设置权限</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 基于AD组授权</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 不要基于单个用户授权</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 设置目录所有者</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 启用卷影副本</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 可靠的备份策略</label></li></ul><p>标准权限模式</p><table><thead><tr><th>用户权限</th><th>说明</th><th>对应系统安全权限</th></tr></thead><tbody><tr><td>读</td><td>读</td><td>读取和执行 / 列出文件夹内容 / 读取</td></tr><tr><td>读写</td><td>读，写，删</td><td>读取和执行 / 列出文件夹内容 / 读取 / 修改</td></tr><tr><td>完全权限</td><td>完全权限，一般仅限管理员</td><td>完全控制</td></tr></tbody></table><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><p>目录结构</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>D:\\share
├─Department
│  ├─Finance
│  ├─HR
│  └─IT
└─Public
    ├─Finance
    ├─HR
    └─IT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权限说明</p><table><thead><tr><th>目录</th><th>完全权限</th><th>读/写/修改</th><th>读</th></tr></thead><tbody><tr><td>D:\\share</td><td>管理员</td><td>-</td><td>Domain Users</td></tr><tr><td>D:\\share\\Department</td><td>管理员</td><td>-</td><td>Domain Users</td></tr><tr><td>D:\\share\\Department\\HR</td><td>管理员</td><td>FS-HR-Admin</td><td>FS-HR</td></tr><tr><td>D:\\share\\Department\\Finance</td><td>管理员</td><td>FS-Finance-Admin</td><td>FS-Finance</td></tr><tr><td>D:\\share\\Department\\IT</td><td>管理员</td><td>FS-IT-Admin</td><td>FS-IT</td></tr><tr><td>D:\\share\\Public</td><td>管理员</td><td>-</td><td>Domain Users</td></tr><tr><td>D:\\share\\Public\\HR</td><td>管理员</td><td>FS-HR-Admin</td><td>Domain Users</td></tr><tr><td>D:\\share\\Public\\Finance</td><td>管理员</td><td>FS-Finance-Admin</td><td>Domain Users</td></tr><tr><td>D:\\share\\Public\\IT</td><td>管理员</td><td>FS-IT-Admin</td><td>Domain Users</td></tr></tbody></table><h2 id="设置安全权限" tabindex="-1"><a class="header-anchor" href="#设置安全权限"><span>设置安全权限</span></a></h2><p>whoami</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>whoami
minicontoso\\administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建文件夹结构" tabindex="-1"><a class="header-anchor" href="#创建文件夹结构"><span>创建文件夹结构</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Department\\HR
<span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Department\\Finance
<span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Department\\IT
<span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Public\\HR
<span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Public\\Finance
<span class="token function">New-Item</span> <span class="token operator">-</span>ItemType Directory <span class="token operator">-</span>Path D:\\share\\Public\\IT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tree</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> D:\\share&gt; tree
Folder PATH listing <span class="token keyword">for</span> volume Local Disk
Volume serial number is 3253-E254
D:<span class="token punctuation">.</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>Department
¦   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>Finance
¦   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>HR
¦   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>IT
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>Public
    <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>Finance
    <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>HR
    <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">-</span>IT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置d-share权限" tabindex="-1"><a class="header-anchor" href="#设置d-share权限"><span>设置D:\\share权限</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of BUILTIN\\Users</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;BUILTIN\\Users&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of SYSTEM</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;SYSTEM&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of CREATOR OWNER</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;CREATOR OWNER&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add domain users permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\domain users&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;ReadAndExecute&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置d-share-department权限" tabindex="-1"><a class="header-anchor" href="#设置d-share-department权限"><span>设置D:\\share\\Department权限</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Department&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Department权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Department<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置d-share-department子目录权限" tabindex="-1"><a class="header-anchor" href="#设置d-share-department子目录权限"><span>设置D:\\share\\Department子目录权限</span></a></h3><p>D:\\share\\Department\\HR</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Department\\HR&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of domain users</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;minicontoso\\Domain Users&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-HR-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-HR-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-HR group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-HR&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;ReadAndExecute&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Department\\HR权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Department\\HR<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-HR-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-HR
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>D:\\share\\Department\\Finance</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Department\\Finance&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of domain users</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;minicontoso\\Domain Users&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-Finance-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-Finance-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-Finance group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-Finance&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;ReadAndExecute&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Department\\Finance权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Department\\Finance<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-Finance-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-Finance
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>D:\\share\\Department\\IT</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Department\\IT&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Remove user permission of domain users</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$userid</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Principal<span class="token punctuation">.</span>NTAccount<span class="token punctuation">(</span><span class="token string">&quot;minicontoso\\Domain Users&quot;</span><span class="token punctuation">)</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>PurgeAccessRules<span class="token punctuation">(</span><span class="token variable">$userid</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-IT-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-IT-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-IT group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-IT&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;ReadAndExecute&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Department\\IT权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Department\\IT<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-IT-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-IT
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置d-share-public权限" tabindex="-1"><a class="header-anchor" href="#设置d-share-public权限"><span>设置D:\\share\\Public权限</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Public&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Public权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Public<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置d-share-public子目录权限" tabindex="-1"><a class="header-anchor" href="#设置d-share-public子目录权限"><span>设置D:\\share\\Public子目录权限</span></a></h3><p>D:\\share\\Public\\HR</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Public\\HR&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-HR-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-HR-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Public\\HR权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Public\\HR<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-HR-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>D:\\share\\Public\\Finance</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Public\\Finance&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-Finance-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-Finance-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Public\\Finance权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Public\\Finance<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-Finance-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>D:\\share\\Public\\IT</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$MyFolder</span> = <span class="token string">&quot;D:\\share\\Public\\IT&quot;</span>

<span class="token comment"># Disable Inheritance</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token variable">$isProtected</span> = <span class="token boolean">$true</span>
<span class="token variable">$preserveInheritance</span> = <span class="token boolean">$true</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRuleProtection<span class="token punctuation">(</span><span class="token variable">$isProtected</span><span class="token punctuation">,</span> <span class="token variable">$preserveInheritance</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>

<span class="token comment"># Add FS-IT-Admin group permission</span>
<span class="token variable">$NewAcl</span> = <span class="token function">Get-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span>
<span class="token comment"># Set properties</span>
<span class="token variable">$identity</span> = <span class="token string">&quot;minicontoso\\FS-IT-Admin&quot;</span>
<span class="token variable">$fileSystemRights</span> = <span class="token string">&quot;Modify&quot;</span>
<span class="token variable">$fileInherit</span> = <span class="token string">&quot;ContainerInherit, ObjectInherit&quot;</span>
<span class="token variable">$inherit</span> =  <span class="token string">&quot;None&quot;</span>
<span class="token variable">$type</span> = <span class="token string">&quot;Allow&quot;</span>
<span class="token comment"># Create new rule</span>
<span class="token variable">$fileSystemAccessRuleArgumentList</span> = <span class="token variable">$identity</span><span class="token punctuation">,</span> <span class="token variable">$fileSystemRights</span><span class="token punctuation">,</span> <span class="token variable">$fileInherit</span><span class="token punctuation">,</span> <span class="token variable">$inherit</span><span class="token punctuation">,</span> <span class="token variable">$type</span>
<span class="token variable">$fileSystemAccessRule</span> = <span class="token function">New-Object</span> <span class="token operator">-</span>TypeName System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>AccessControl<span class="token punctuation">.</span>FileSystemAccessRule <span class="token operator">-</span>ArgumentList <span class="token variable">$fileSystemAccessRuleArgumentList</span>
<span class="token comment"># Apply new rule</span>
<span class="token variable">$NewAcl</span><span class="token punctuation">.</span>SetAccessRule<span class="token punctuation">(</span><span class="token variable">$fileSystemAccessRule</span><span class="token punctuation">)</span>
<span class="token function">Set-Acl</span> <span class="token operator">-</span>Path <span class="token variable">$MyFolder</span> <span class="token operator">-</span>AclObject <span class="token variable">$NewAcl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查D:\\share\\Public\\IT权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-Acl</span> <span class="token operator">-</span>Path D:\\share\\Public\\IT<span class="token punctuation">)</span><span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : ReadAndExecute<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\FS-IT-Admin
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件夹的安全权限设置后，此时还不能通过网络访问这个文件夹，下面我们继续设置共享权限。</p><h2 id="设置共享权限" tabindex="-1"><a class="header-anchor" href="#设置共享权限"><span>设置共享权限</span></a></h2><p>New-SmbShare</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$Parameters</span> = @<span class="token punctuation">{</span>
    Name = <span class="token string">&quot;share&quot;</span>
    Path = <span class="token string">&quot;D:\\share&quot;</span>
    FullAccess = <span class="token string">&#39;BUILTIN\\Administrators&#39;</span>
    ChangeAccess = <span class="token string">&quot;minicontoso\\domain users&quot;</span>
<span class="token punctuation">}</span>
<span class="token function">New-SmbShare</span> @Parameters
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查共享权限</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-SmbShare</span> share<span class="token punctuation">)</span><span class="token punctuation">.</span>PresetPathAcl<span class="token punctuation">.</span>Access

FileSystemRights  : FullControl
AccessControlType : Allow
IdentityReference : BUILTIN\\Administrators
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None

FileSystemRights  : Modify<span class="token punctuation">,</span> Synchronize
AccessControlType : Allow
IdentityReference : MINICONTOSO\\domain users
IsInherited       : False
InheritanceFlags  : ContainerInherit<span class="token punctuation">,</span> ObjectInherit
PropagationFlags  : None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">共享权限</p><p>通过网络访问共享目录时，最终的权限取决于安全权限（Security）和共享权限（Share）的交集。</p></div><p>访问共享文件夹</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Set-Location</span> \\\\10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>31\\share
<span class="token function">PS</span> Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Core\\FileSystem::\\\\10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>31\\share&gt; tree
卷 Local Disk 的文件夹 PATH 列表
卷序列号为 3253-E254
\\\\10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>31\\share<span class="token punctuation">.</span>
├─Department
│  ├─Finance
│  ├─HR
│  └─IT
└─Public
    ├─Finance
    ├─HR
    └─IT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72),i=[t];function c(p,o){return a(),s("div",null,i)}const u=n(l,[["render",c],["__file","file.html.vue"]]),v=JSON.parse('{"path":"/share/file.html","title":"文件共享","lang":"zh-CN","frontmatter":{"title":"文件共享","icon":"folder-tree","order":2,"category":["file"],"tag":["file"],"description":"前提准备 操作系统 系统命名 IP地址 加域 原则 基于标准权限模式 Read / Write / Modify 在同一目录层级设置权限 基于AD组授权 不要基于单个用户授权 设置目录所有者 启用卷影副本 可靠的备份策略 标准权限模式 目标 目录结构 权限说明 设置安全权限 whoami 创建文件夹结构 tree 设置D:\\\\share权限 检查D:\\\\s...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/share/file.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"文件共享"}],["meta",{"property":"og:description","content":"前提准备 操作系统 系统命名 IP地址 加域 原则 基于标准权限模式 Read / Write / Modify 在同一目录层级设置权限 基于AD组授权 不要基于单个用户授权 设置目录所有者 启用卷影副本 可靠的备份策略 标准权限模式 目标 目录结构 权限说明 设置安全权限 whoami 创建文件夹结构 tree 设置D:\\\\share权限 检查D:\\\\s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"file"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件共享\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"前提准备","slug":"前提准备","link":"#前提准备","children":[]},{"level":2,"title":"原则","slug":"原则","link":"#原则","children":[]},{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"设置安全权限","slug":"设置安全权限","link":"#设置安全权限","children":[{"level":3,"title":"创建文件夹结构","slug":"创建文件夹结构","link":"#创建文件夹结构","children":[]},{"level":3,"title":"设置D:\\\\share权限","slug":"设置d-share权限","link":"#设置d-share权限","children":[]},{"level":3,"title":"设置D:\\\\share\\\\Department权限","slug":"设置d-share-department权限","link":"#设置d-share-department权限","children":[]},{"level":3,"title":"设置D:\\\\share\\\\Department子目录权限","slug":"设置d-share-department子目录权限","link":"#设置d-share-department子目录权限","children":[]},{"level":3,"title":"设置D:\\\\share\\\\Public权限","slug":"设置d-share-public权限","link":"#设置d-share-public权限","children":[]},{"level":3,"title":"设置D:\\\\share\\\\Public子目录权限","slug":"设置d-share-public子目录权限","link":"#设置d-share-public子目录权限","children":[]}]},{"level":2,"title":"设置共享权限","slug":"设置共享权限","link":"#设置共享权限","children":[]}],"git":{},"readingTime":{"minutes":7.17,"words":2150},"filePathRelative":"share/file.md","autoDesc":true}');export{u as comp,v as data};
