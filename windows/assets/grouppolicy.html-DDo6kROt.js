import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,b as i}from"./app-BUegsOj5.js";const a={},t=i(`<h2 id="组策略" tabindex="-1"><a class="header-anchor" href="#组策略"><span>组策略</span></a></h2><p>Get-GPO</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-GPO</span> <span class="token operator">-</span>All

DisplayName      : Default Domain Policy
DomainName       : minicontoso<span class="token punctuation">.</span>com
Owner            : MINICONTOSO\\Domain Admins
Id               : 31b2f340-016d-11d2-945f-00c04fb984f9
GpoStatus        : AllSettingsEnabled
Description      : 
CreationTime     : 6/1/2024 12:02:05 PM
ModificationTime : 6/1/2024 12:09:52 PM
UserVersion      : AD Version: 0<span class="token punctuation">,</span> SysVol Version: 0
ComputerVersion  : AD Version: 3<span class="token punctuation">,</span> SysVol Version: 3
WmiFilter        : 

DisplayName      : Default Domain Controllers Policy
DomainName       : minicontoso<span class="token punctuation">.</span>com
Owner            : MINICONTOSO\\Domain Admins
Id               : 6ac1786c-016f-11d2-945f-00c04fb984f9
GpoStatus        : AllSettingsEnabled
Description      : 
CreationTime     : 6/1/2024 12:02:05 PM
ModificationTime : 6/1/2024 12:02:04 PM
UserVersion      : AD Version: 0<span class="token punctuation">,</span> SysVol Version: 0
ComputerVersion  : AD Version: 1<span class="token punctuation">,</span> SysVol Version: 1
WmiFilter        : 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get-GPOReport</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-GPOReport</span> <span class="token operator">-</span>Name <span class="token string">&quot;Default Domain Policy&quot;</span> <span class="token operator">-</span>ReportType Html <span class="token operator">-</span>Path D:\\DefaultDomainPolicy<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="默认密码策略" tabindex="-1"><a class="header-anchor" href="#默认密码策略"><span>默认密码策略</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Enforce password history: 24 passwords remembered
Maximum password age: 42 days
Minimum password age: 1 days
Minimum password length: 7 characters
Password must meet complexity requirements: Enabled
Store passwords using reversible encryption: Disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function l(r,d){return s(),n("div",null,o)}const m=e(a,[["render",l],["__file","grouppolicy.html.vue"]]),u=JSON.parse('{"path":"/adds/grouppolicy.html","title":"组策略","lang":"zh-CN","frontmatter":{"title":"组策略","icon":"file-signature","order":6,"category":["活动目录"],"tag":["活动目录","组策略"],"description":"组策略 Get-GPO Get-GPOReport 默认密码策略","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/adds/grouppolicy.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"组策略"}],["meta",{"property":"og:description","content":"组策略 Get-GPO Get-GPOReport 默认密码策略"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"活动目录"}],["meta",{"property":"article:tag","content":"组策略"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"组策略","slug":"组策略","link":"#组策略","children":[]},{"level":2,"title":"默认密码策略","slug":"默认密码策略","link":"#默认密码策略","children":[]}],"git":{},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"adds/grouppolicy.md","autoDesc":true}');export{m as comp,u as data};
