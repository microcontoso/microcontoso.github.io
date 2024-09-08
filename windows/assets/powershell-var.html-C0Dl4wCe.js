import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-DVXG84Ap.js";const i={},l=e(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>$a = &quot;Hello&quot;</p><p>$b = &quot;World&quot;</p><p>$c = $a + &quot; &quot; + $b</p><p>$c -is [int]</p><p>$c -is [string]</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$a</span> = <span class="token string">&quot;Hello&quot;</span>
<span class="token variable">$b</span> = <span class="token string">&quot;World&quot;</span>
<span class="token variable">$c</span> = <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token variable">$b</span>

<span class="token variable">$a</span>
Hello

<span class="token variable">$b</span>
World

<span class="token variable">$c</span>
Hello World

<span class="token variable">$c</span> <span class="token operator">-is</span> <span class="token namespace">[int]</span>
False

<span class="token variable">$c</span> <span class="token operator">-is</span> <span class="token namespace">[string]</span>
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$a = 1</p><p>$b = 2</p><p>$c = $a + $b</p><p>$c -is [int]</p><p>$c -is [string]</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$a</span> = 1
<span class="token variable">$b</span> = 2
<span class="token variable">$c</span> = <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span>

<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$a</span> is <span class="token variable">$a</span>&quot;</span>
<span class="token variable">$a</span> is 1

<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$b</span> is <span class="token variable">$b</span>&quot;</span>
<span class="token variable">$b</span> is 2

<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$c</span> is <span class="token variable">$c</span>&quot;</span>
<span class="token variable">$c</span> is 3

<span class="token variable">$c</span> <span class="token operator">-is</span> <span class="token namespace">[int]</span>
True

<span class="token variable">$c</span> <span class="token operator">-is</span> <span class="token namespace">[string]</span>
False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">字符\`</p><p>字符\`是数字键1左边的键，不是单引号</p></div><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$c</span> = <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment"># 双引号</span>
<span class="token function">Write-Host</span> <span class="token string">&quot;<span class="token variable">$c</span> is <span class="token variable">$c</span>&quot;</span>
Hello World is Hello World

<span class="token comment"># 单引号</span>
<span class="token function">Write-Host</span> <span class="token string">&#39;$c is $c&#39;</span>
<span class="token variable">$c</span> is <span class="token variable">$c</span>

<span class="token comment"># 双引号 + \`</span>
<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$c</span> is <span class="token variable">$c</span>&quot;</span>
<span class="token variable">$c</span> is Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$City</span> = @<span class="token punctuation">(</span><span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Shanghai&quot;</span><span class="token punctuation">)</span>

<span class="token variable">$City</span>
Beijing
Shanghai

<span class="token variable">$City</span> <span class="token operator">+=</span> <span class="token string">&quot;Shenzhen&quot;</span>

<span class="token variable">$City</span>
Beijing
Shanghai
Shenzhen

<span class="token variable">$City</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>
Beijing

<span class="token variable">$City</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>
Shanghai

<span class="token variable">$City</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>
Shenzhen

<span class="token variable">$City</span><span class="token punctuation">[</span><span class="token operator">-</span>1<span class="token punctuation">]</span>
Shenzhen

<span class="token variable">$City</span> <span class="token operator">-is</span> <span class="token namespace">[array]</span>
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取关于数组帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Arrays
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h2><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$User</span> = @<span class="token punctuation">{</span>Name = <span class="token string">&quot;Lei Li&quot;</span><span class="token punctuation">;</span> Department = “IT Department”<span class="token punctuation">;</span> City = <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">}</span>

<span class="token variable">$User</span>

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
Department                     IT Department
Name                           Lei Li
City                           Beijing

<span class="token variable">$User</span><span class="token punctuation">.</span>Name
Lei Li

<span class="token variable">$User</span><span class="token punctuation">.</span>Department
IT Department

<span class="token variable">$User</span><span class="token punctuation">.</span>City
Beijing

<span class="token variable">$User</span><span class="token punctuation">.</span>City = <span class="token string">&quot;Shanghai&quot;</span>

<span class="token variable">$User</span><span class="token punctuation">.</span>City
Shanghai

<span class="token variable">$User</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">&quot;Title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;IT Manager&quot;</span><span class="token punctuation">)</span>

<span class="token variable">$User</span>

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
Title                          IT Manager
Department                     IT Department
Name                           Lei Li
City                           Shanghai

<span class="token variable">$User</span> <span class="token operator">-is</span> <span class="token namespace">[hashtable]</span>
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取关于哈希表帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Hash_Tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),t=[l];function p(r,c){return a(),s("div",null,t)}const v=n(i,[["render",p],["__file","powershell-var.html.vue"]]),u=JSON.parse('{"path":"/powershell/powershell-var.html","title":"变量，数组，哈希表","lang":"zh-CN","frontmatter":{"title":"变量，数组，哈希表","icon":"file-invoice-dollar","order":3,"category":["powershell"],"tag":["powershell"],"description":"变量 $a = \\"Hello\\" $b = \\"World\\" $c = $a + \\" \\" + $b $c -is [int] $c -is [string] $a = 1 $b = 2 $c = $a + $b $c -is [int] $c -is [string] 字符` 字符`是数字键1左边的键，不是单引号 数组 获取关于数组帮助 哈希表 获取关于哈...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/windows/powershell/powershell-var.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"变量，数组，哈希表"}],["meta",{"property":"og:description","content":"变量 $a = \\"Hello\\" $b = \\"World\\" $c = $a + \\" \\" + $b $c -is [int] $c -is [string] $a = 1 $b = 2 $c = $a + $b $c -is [int] $c -is [string] 字符` 字符`是数字键1左边的键，不是单引号 数组 获取关于数组帮助 哈希表 获取关于哈..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"powershell"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量，数组，哈希表\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]}],"git":{},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"powershell/powershell-var.md","autoDesc":true}');export{v as comp,u as data};
