import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-DVXG84Ap.js";const t={},o=e(`<h2 id="前提准备" tabindex="-1"><a class="header-anchor" href="#前提准备"><span>前提准备</span></a></h2><p>操作系统</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Get-CimInstance</span> <span class="token operator">-</span>ClassName Win32_OperatingSystem<span class="token punctuation">)</span><span class="token punctuation">.</span>Caption
Microsoft Windows Server 2022 Standard Evaluation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统命名</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Rename-Computer</span> <span class="token operator">-</span>NewName BJDC01 <span class="token operator">-</span>Restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IP地址</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>IP地址：10.10.10.10
子网掩码：255.255.255.0
默认网关：10.10.10.1
DNS服务器：10.10.10.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装活动目录域服务" tabindex="-1"><a class="header-anchor" href="#安装活动目录域服务"><span>安装活动目录域服务</span></a></h2><p>查询活动目录域服务</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-WindowsFeature</span> AD-Domain-Services

Display Name                                            Name                       Install State
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>                                            <span class="token operator">--</span><span class="token operator">--</span>                       <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token punctuation">[</span> <span class="token punctuation">]</span> Active Directory Domain Services                    AD-Domain-Services             Available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装活动目录域服务</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Install-WindowsFeature</span> AD-Domain-Services <span class="token operator">-</span>IncludeManagementTools

Success Restart Needed <span class="token keyword">Exit</span> Code      Feature Result                               
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>      <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>                               
True    No             Success        <span class="token punctuation">{</span>Active Directory Domain Services<span class="token punctuation">,</span> <span class="token function">Group</span> P<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提升为域控制器" tabindex="-1"><a class="header-anchor" href="#提升为域控制器"><span>提升为域控制器</span></a></h2><p>Get-Command Install-ADDSForest</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Command</span> <span class="token function">Install-ADDSForest</span>
CommandType     Name                                               Version    Source
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>     <span class="token operator">--</span><span class="token operator">--</span>                                               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>    <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
Cmdlet          <span class="token function">Install-ADDSForest</span>                                 1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    ADDSDeployment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get-Help Install-ADDSForest</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token function">Install-ADDSForest</span>

NAME
    <span class="token function">Install-ADDSForest</span>

SYNOPSIS
    Creates a new Active Directory forest<span class="token punctuation">.</span>

SYNTAX
    <span class="token function">Install-ADDSForest</span> <span class="token punctuation">[</span><span class="token operator">-</span>Confirm<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>CreateDnsDelegation<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>DatabasePath &lt;System<span class="token punctuation">.</span>String&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>DnsDelegationCredential &lt;System<span class="token punctuation">.</span>Management<span class="token punctuation">.</span>Automation<span class="token punctuation">.</span>PSCredential&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>DomainMode <span class="token punctuation">{</span>Win2008 <span class="token punctuation">|</span> Win2008R2 <span class="token punctuation">|</span> Win2012 <span class="token punctuation">|</span> Win2012R2 <span class="token punctuation">|</span> WinThreshold <span class="token punctuation">|</span>
    Default<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">-</span>DomainName &lt;System<span class="token punctuation">.</span>String&gt; <span class="token punctuation">[</span><span class="token operator">-</span>DomainNetbiosName &lt;System<span class="token punctuation">.</span>String&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>Force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>ForestMode <span class="token punctuation">{</span>Win2008 <span class="token punctuation">|</span> Win2008R2 <span class="token punctuation">|</span> Win2012 <span class="token punctuation">|</span> Win2012R2 <span class="token punctuation">|</span> WinThreshold <span class="token punctuation">|</span> Default<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>InstallDns<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>LogPath &lt;System<span class="token punctuation">.</span>String&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>NoDnsOnNetwork<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token operator">-</span>NoRebootOnCompletion<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>SafeModeAdministratorPassword &lt;SecureString&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>SkipAutoConfigureDns<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>SkipPreChecks<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>SysvolPath &lt;System<span class="token punctuation">.</span>String&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>WhatIf<span class="token punctuation">]</span> <span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>

DESCRIPTION
    The \`<span class="token function">Install-ADDSForest</span>\` cmdlet installs an Active Directory forest configuration<span class="token punctuation">.</span>

RELATED LINKS
    Online Version: https:<span class="token operator">/</span><span class="token operator">/</span>learn<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com/powershell/module/addsdeployment/<span class="token function">install-addsforest</span>?view=windowsserver2022-<span class="token function">ps</span>&amp;wt<span class="token punctuation">.</span>mc_id=<span class="token function">ps</span><span class="token operator">-</span>gethelp
    AD DS Simplified Administration https:<span class="token operator">/</span><span class="token operator">/</span>go<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com/fwlink/?LinkID=237244
    <span class="token function">Install-ADDSDomain</span>
    <span class="token function">Test-ADDSForestInstallation</span>
    <span class="token function">ConvertTo-SecureString</span> https:<span class="token operator">/</span><span class="token operator">/</span>go<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com/fwlink/p/?LinkId=113291

REMARKS
    To see the examples<span class="token punctuation">,</span> <span class="token function">type</span>: <span class="token string">&quot;get-help Install-ADDSForest -examples&quot;</span><span class="token punctuation">.</span>
    <span class="token keyword">For</span> more information<span class="token punctuation">,</span> <span class="token function">type</span>: <span class="token string">&quot;get-help Install-ADDSForest -detailed&quot;</span><span class="token punctuation">.</span>
    <span class="token keyword">For</span> technical information<span class="token punctuation">,</span> <span class="token function">type</span>: <span class="token string">&quot;get-help Install-ADDSForest -full&quot;</span><span class="token punctuation">.</span>
    <span class="token keyword">For</span> online help<span class="token punctuation">,</span> <span class="token function">type</span>: <span class="token string">&quot;get-help Install-ADDSForest -online&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install-ADDSForest -DomainName minicontoso.com -WhatIf</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Install-ADDSForest</span> <span class="token operator">-</span>DomainName minicontoso<span class="token punctuation">.</span>com <span class="token operator">-</span>WhatIf

SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
Confirm SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
What <span class="token keyword">if</span>: Create a new Active Directory forest with the name <span class="token string">&#39;minicontoso.com&#39;</span><span class="token punctuation">.</span>
Configure this server as the first Active Directory domain controller in a new forest<span class="token punctuation">.</span>

The new domain name is <span class="token string">&quot;minicontoso.com&quot;</span><span class="token punctuation">.</span> This is also the name of the new forest<span class="token punctuation">.</span>

The NetBIOS name of the domain: Automatically calculated

Forest Functional Level: Default

Domain Functional Level: Automatically calculated

Additional Options:

  Global catalog: Yes

  DNS Server: No

Database folder: C:\\Windows\\NTDS

Log file folder: C:\\Windows\\NTDS

SYSVOL folder: C:\\Windows\\SYSVOL

The password of the new domain Administrator will be the same as the password of the local Administrator of this computer<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install-ADDSForest -DomainName minicontoso.com -InstallDns -WhatIf</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Install-ADDSForest</span> <span class="token operator">-</span>DomainName minicontoso<span class="token punctuation">.</span>com <span class="token operator">-</span>InstallDns <span class="token operator">-</span>WhatIf

SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
Confirm SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
What <span class="token keyword">if</span>: Create a new Active Directory forest with the name <span class="token string">&#39;minicontoso.com&#39;</span><span class="token punctuation">.</span>
Configure this server as the first Active Directory domain controller in a new forest<span class="token punctuation">.</span>

The new domain name is <span class="token string">&quot;minicontoso.com&quot;</span><span class="token punctuation">.</span> This is also the name of the new forest<span class="token punctuation">.</span>

The NetBIOS name of the domain: Automatically calculated

Forest Functional Level: Default

Domain Functional Level: Automatically calculated

Additional Options:

  Global catalog: Yes

  DNS Server: Yes

  Create DNS Delegation: No

Database folder: C:\\Windows\\NTDS

Log file folder: C:\\Windows\\NTDS

SYSVOL folder: C:\\Windows\\SYSVOL

The DNS Server service will be configured on this computer<span class="token punctuation">.</span>

This computer will be configured to use this DNS server as its preferred DNS server<span class="token punctuation">.</span>

The password of the new domain Administrator will be the same as the password of the local Administrator of this computer<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install-ADDSForest -DomainName minicontoso.com -InstallDns</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Install-ADDSForest</span> <span class="token operator">-</span>DomainName minicontoso<span class="token punctuation">.</span>com <span class="token operator">-</span>InstallDns

SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
Confirm SafeModeAdministratorPassword: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
The target server will be configured as a domain controller and restarted when this operation is complete<span class="token punctuation">.</span>
<span class="token keyword">Do</span> you want to <span class="token keyword">continue</span> with this operation?
<span class="token namespace">[Y]</span> Yes  <span class="token namespace">[A]</span> Yes to All  <span class="token namespace">[N]</span> No  <span class="token namespace">[L]</span> No to All  <span class="token namespace">[S]</span> Suspend  <span class="token punctuation">[</span>?<span class="token punctuation">]</span> Help <span class="token punctuation">(</span>default is <span class="token string">&quot;Y&quot;</span><span class="token punctuation">)</span>: Y
WARNING: Windows Server 2022 domain controllers have a default <span class="token keyword">for</span> the security setting named <span class="token string">&quot;Allow cryptography algorithms compatible with Windows NT 4.0&quot;</span> that prevents weaker cryptography algorithms when establishing security channel sessions<span class="token punctuation">.</span><span class="token keyword">For</span> more information about this setting<span class="token punctuation">,</span> see Knowledge Base article 942564 <span class="token punctuation">(</span>http:<span class="token operator">/</span><span class="token operator">/</span>go<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com/fwlink/?LinkId=104751<span class="token punctuation">)</span><span class="token punctuation">.</span>

WARNING: A delegation <span class="token keyword">for</span> this DNS server cannot be created because the authoritative parent zone cannot be found or it does not run Windows DNS server<span class="token punctuation">.</span> <span class="token keyword">If</span> you are integrating with an existing DNS infrastructure<span class="token punctuation">,</span> you
 should manually create a delegation to this DNS server in the parent zone to ensure reliable name resolution <span class="token keyword">from</span> outside the domain <span class="token string">&quot;minicontoso.com&quot;</span><span class="token punctuation">.</span> Otherwise<span class="token punctuation">,</span> no action is required<span class="token punctuation">.</span>

WARNING: Windows Server 2022 domain controllers have a default <span class="token keyword">for</span> the security setting named <span class="token string">&quot;Allow cryptography algorithms compatible with Windows NT 4.0&quot;</span> that prevents weaker cryptography algorithms when
establishing security channel sessions<span class="token punctuation">.</span>

<span class="token keyword">For</span> more information about this setting<span class="token punctuation">,</span> see Knowledge Base article 942564 <span class="token punctuation">(</span>http:<span class="token operator">/</span><span class="token operator">/</span>go<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com/fwlink/?LinkId=104751<span class="token punctuation">)</span><span class="token punctuation">.</span>

WARNING: A delegation <span class="token keyword">for</span> this DNS server cannot be created because the authoritative parent zone cannot be found or it does not run Windows DNS server<span class="token punctuation">.</span> <span class="token keyword">If</span> you are integrating with an existing DNS infrastructure<span class="token punctuation">,</span> you
 should manually create a delegation to this DNS server in the parent zone to ensure reliable name resolution <span class="token keyword">from</span> outside the domain <span class="token string">&quot;minicontoso.com&quot;</span><span class="token punctuation">.</span> Otherwise<span class="token punctuation">,</span> no action is required<span class="token punctuation">.</span>

Message                          Context           RebootRequired  Status
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>                          <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
Operation completed successfully DCPromo<span class="token punctuation">.</span>General<span class="token punctuation">.</span>3          False Success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查配置" tabindex="-1"><a class="header-anchor" href="#检查配置"><span>检查配置</span></a></h2><p>whoami</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>whoami
minicontoso\\administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Get-ADForest</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADForest</span>

ApplicationPartitions : <span class="token punctuation">{</span>DC=DomainDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> DC=ForestDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">}</span>
CrossForestReferences : <span class="token punctuation">{</span><span class="token punctuation">}</span>
DomainNamingMaster    : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
Domains               : <span class="token punctuation">{</span>minicontoso<span class="token punctuation">.</span>com<span class="token punctuation">}</span>
ForestMode            : Windows2016Forest
GlobalCatalogs        : <span class="token punctuation">{</span>BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com<span class="token punctuation">}</span>
Name                  : minicontoso<span class="token punctuation">.</span>com
PartitionsContainer   : CN=Partitions<span class="token punctuation">,</span>CN=Configuration<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
RootDomain            : minicontoso<span class="token punctuation">.</span>com
SchemaMaster          : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
Sites                 : <span class="token punctuation">{</span>Default-First-Site-Name<span class="token punctuation">}</span>
SPNSuffixes           : <span class="token punctuation">{</span><span class="token punctuation">}</span>
UPNSuffixes           : <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADForest</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> RootDomain<span class="token punctuation">,</span> ForestMode<span class="token punctuation">,</span> Sites<span class="token punctuation">,</span> DomainNamingMaster<span class="token punctuation">,</span> SchemaMaster

RootDomain         : minicontoso<span class="token punctuation">.</span>com
ForestMode         : Windows2016Forest
Sites              : <span class="token punctuation">{</span>Default-First-Site-Name<span class="token punctuation">}</span>
DomainNamingMaster : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
SchemaMaster       : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get-ADDomain</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADDomain</span>

AllowedDNSSuffixes                 : <span class="token punctuation">{</span><span class="token punctuation">}</span>
ChildDomains                       : <span class="token punctuation">{</span><span class="token punctuation">}</span>
ComputersContainer                 : CN=Computers<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
DeletedObjectsContainer            : CN=Deleted Objects<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
DistinguishedName                  : DC=minicontoso<span class="token punctuation">,</span>DC=com
DNSRoot                            : minicontoso<span class="token punctuation">.</span>com
DomainControllersContainer         : OU=Domain Controllers<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
DomainMode                         : Windows2016Domain
DomainSID                          : S-1-5-21-3239104355-2175597371-602079495
ForeignSecurityPrincipalsContainer : CN=ForeignSecurityPrincipals<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
Forest                             : minicontoso<span class="token punctuation">.</span>com
InfrastructureMaster               : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
LastLogonReplicationInterval       : 
LinkedGroupPolicyObjects           : <span class="token punctuation">{</span>CN=<span class="token punctuation">{</span>31B2F340-016D-11D2-945F-00C04FB984F9<span class="token punctuation">}</span><span class="token punctuation">,</span>CN=Policies<span class="token punctuation">,</span>CN=System<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">}</span>
LostAndFoundContainer              : CN=LostAndFound<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
ManagedBy                          : 
Name                               : minicontoso
NetBIOSName                        : MINICONTOSO
ObjectClass                        : domainDNS
ObjectGUID                         : 534a2eb9-719a-4e09-b656-1ee9aab8663d
ParentDomain                       : 
PDCEmulator                        : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
PublicKeyRequiredPasswordRolling   : True
QuotasContainer                    : CN=NTDS Quotas<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
ReadOnlyReplicaDirectoryServers    : <span class="token punctuation">{</span><span class="token punctuation">}</span>
ReplicaDirectoryServers            : <span class="token punctuation">{</span>BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com<span class="token punctuation">}</span>
RIDMaster                          : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
SubordinateReferences              : <span class="token punctuation">{</span>DC=ForestDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> DC=DomainDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> 
                                     CN=Configuration<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">}</span>
SystemsContainer                   : CN=System<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
UsersContainer                     : CN=Users<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADDomain</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> DomainMode<span class="token punctuation">,</span> InfrastructureMaster<span class="token punctuation">,</span> PDCEmulator<span class="token punctuation">,</span> RIDMaster

       DomainMode InfrastructureMaster   PDCEmulator            RIDMaster             
       <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>   <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>            <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>             
Windows2016Domain BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get-ADDomainController</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADDomainController</span>

ComputerObjectDN           : CN=BJDC01<span class="token punctuation">,</span>OU=Domain Controllers<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
DefaultPartition           : DC=minicontoso<span class="token punctuation">,</span>DC=com
Domain                     : minicontoso<span class="token punctuation">.</span>com
Enabled                    : True
Forest                     : minicontoso<span class="token punctuation">.</span>com
HostName                   : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
InvocationId               : d3965876-41e7-4f9d-a014-942e2bd984f9
IPv4Address                : 10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>10<span class="token punctuation">.</span>10
IPv6Address                : ::1
IsGlobalCatalog            : True
IsReadOnly                 : False
LdapPort                   : 389
Name                       : BJDC01
NTDSSettingsObjectDN       : CN=NTDS Settings<span class="token punctuation">,</span>CN=BJDC01<span class="token punctuation">,</span>CN=Servers<span class="token punctuation">,</span>CN=Default-First-Site-Name<span class="token punctuation">,</span>CN=Sites<span class="token punctuation">,</span>CN=Configuration<span class="token punctuation">,</span>DC=m
                             inicontoso<span class="token punctuation">,</span>DC=com
OperatingSystem            : Windows Server 2022 Standard Evaluation
OperatingSystemHotfix      : 
OperatingSystemServicePack : 
OperatingSystemVersion     : 10<span class="token punctuation">.</span>0 <span class="token punctuation">(</span>20348<span class="token punctuation">)</span>
OperationMasterRoles       : <span class="token punctuation">{</span>SchemaMaster<span class="token punctuation">,</span> DomainNamingMaster<span class="token punctuation">,</span> PDCEmulator<span class="token punctuation">,</span> RIDMaster<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
Partitions                 : <span class="token punctuation">{</span>DC=ForestDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> DC=DomainDnsZones<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> 
                             CN=Schema<span class="token punctuation">,</span>CN=Configuration<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">,</span> CN=Configuration<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
ServerObjectDN             : CN=BJDC01<span class="token punctuation">,</span>CN=Servers<span class="token punctuation">,</span>CN=Default-First-Site-Name<span class="token punctuation">,</span>CN=Sites<span class="token punctuation">,</span>CN=Configuration<span class="token punctuation">,</span>DC=minicontoso<span class="token punctuation">,</span>DC=com
ServerObjectGuid           : 7754c3d1-4444-441a-b0a4-3a4697e596a4
Site                       : Default-First-Site-Name
SslPort                    : 636
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ADDomainController</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> HostName

HostName              
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>              
BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com

<span class="token function">Get-ADDomainController</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> Forest<span class="token punctuation">,</span> Domain<span class="token punctuation">,</span> Site<span class="token punctuation">,</span> HostName<span class="token punctuation">,</span> OperatingSystem<span class="token punctuation">,</span> OperationMasterRoles

Forest               : minicontoso<span class="token punctuation">.</span>com
Domain               : minicontoso<span class="token punctuation">.</span>com
Site                 : Default-First-Site-Name
HostName             : BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
OperatingSystem      : Windows Server 2022 Standard Evaluation
OperationMasterRoles : <span class="token punctuation">{</span>SchemaMaster<span class="token punctuation">,</span> DomainNamingMaster<span class="token punctuation">,</span> PDCEmulator<span class="token punctuation">,</span> RIDMaster<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token function">Get-ADDomainController</span><span class="token punctuation">)</span><span class="token punctuation">.</span>OperationMasterRoles
SchemaMaster
DomainNamingMaster
PDCEmulator
RIDMaster
InfrastructureMaster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>netdom query fsmo</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>netdom query fsmo
Schema master               BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
Domain naming master        BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
PDC                         BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
RID pool manager            BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
Infrastructure master       BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置时间同步" tabindex="-1"><a class="header-anchor" href="#配置时间同步"><span>配置时间同步</span></a></h2><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>w32tm <span class="token operator">/</span>config <span class="token operator">/</span>computer:BJDC01<span class="token punctuation">.</span>minicontoso<span class="token punctuation">.</span>com <span class="token operator">/</span>manualpeerlist:time<span class="token punctuation">.</span>windows<span class="token punctuation">.</span>com <span class="token operator">/</span>syncfromflags:manual <span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,39),p=[o];function i(l,c){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","bjdc01.html.vue"]]),m=JSON.parse('{"path":"/adds/bjdc01.html","title":"安装主域控服务器","lang":"zh-CN","frontmatter":{"title":"安装主域控服务器","icon":"gear","order":2,"category":["活动目录"],"tag":["活动目录","域控制器","PDC"],"description":"前提准备 操作系统 系统命名 IP地址 安装活动目录域服务 查询活动目录域服务 安装活动目录域服务 提升为域控制器 Get-Command Install-ADDSForest Get-Help Install-ADDSForest Install-ADDSForest -DomainName minicontoso.com -WhatIf Insta...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/windows/adds/bjdc01.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"安装主域控服务器"}],["meta",{"property":"og:description","content":"前提准备 操作系统 系统命名 IP地址 安装活动目录域服务 查询活动目录域服务 安装活动目录域服务 提升为域控制器 Get-Command Install-ADDSForest Get-Help Install-ADDSForest Install-ADDSForest -DomainName minicontoso.com -WhatIf Insta..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"活动目录"}],["meta",{"property":"article:tag","content":"域控制器"}],["meta",{"property":"article:tag","content":"PDC"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装主域控服务器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"前提准备","slug":"前提准备","link":"#前提准备","children":[]},{"level":2,"title":"安装活动目录域服务","slug":"安装活动目录域服务","link":"#安装活动目录域服务","children":[]},{"level":2,"title":"提升为域控制器","slug":"提升为域控制器","link":"#提升为域控制器","children":[]},{"level":2,"title":"检查配置","slug":"检查配置","link":"#检查配置","children":[]},{"level":2,"title":"配置时间同步","slug":"配置时间同步","link":"#配置时间同步","children":[]}],"git":{},"readingTime":{"minutes":4.51,"words":1352},"filePathRelative":"adds/bjdc01.md","autoDesc":true}');export{d as comp,m as data};
