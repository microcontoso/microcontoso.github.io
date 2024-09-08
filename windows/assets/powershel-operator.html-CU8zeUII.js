import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,b as a}from"./app-BUegsOj5.js";const l={},o=a(`<h2 id="比较操作符" tabindex="-1"><a class="header-anchor" href="#比较操作符"><span>比较操作符</span></a></h2><p>-eq</p><p>-ne</p><p>-gt</p><p>-ge</p><p>-lt</p><p>-le</p><p>-Like</p><p>-NotLike</p><p>-Match</p><p>-NotMatch</p><p>-Contains</p><p>-NotContains</p><p>-In</p><p>-NotIn</p><p>-Replace</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>8 <span class="token operator">-eq</span> 8
True

8 <span class="token operator">-gt</span> 7
True

<span class="token string">&quot;Hello&quot;</span> <span class="token operator">-like</span> <span class="token string">&quot;He*&quot;</span>
True

<span class="token comment"># 默认不区分大小写</span>
<span class="token string">&quot;hello&quot;</span> <span class="token operator">-like</span> <span class="token string">&quot;he*&quot;</span>
True

<span class="token comment"># 默认不区分大小写</span>
<span class="token string">&quot;Hello&quot;</span> <span class="token operator">-match</span> <span class="token string">&quot;hello&quot;</span>
True

<span class="token string">&quot;Hello&quot;</span> <span class="token operator">-</span>cmatch <span class="token string">&quot;hello&quot;</span>
False

1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3 <span class="token operator">-contains</span> 1
True

1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3 <span class="token operator">-contains</span> 4
False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取比较操作符帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Comparison_Operators
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="逻辑操作符" tabindex="-1"><a class="header-anchor" href="#逻辑操作符"><span>逻辑操作符</span></a></h2><p>-and</p><p>-or</p><p>-xor</p><p>-not</p><p>!</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token boolean">$true</span> <span class="token operator">-and</span> <span class="token boolean">$true</span>
True

<span class="token boolean">$true</span> <span class="token operator">-and</span> <span class="token boolean">$false</span>
False

<span class="token boolean">$true</span> <span class="token operator">-or</span> <span class="token boolean">$false</span>
True

<span class="token boolean">$true</span> <span class="token operator">-xor</span> <span class="token boolean">$true</span>
False

<span class="token boolean">$true</span> <span class="token operator">-xor</span> <span class="token boolean">$false</span>
True

<span class="token operator">-not</span> <span class="token boolean">$true</span>
False

<span class="token operator">-not</span> <span class="token boolean">$false</span>
True

<span class="token operator">!</span> <span class="token boolean">$true</span>
False

<span class="token operator">!</span> <span class="token boolean">$false</span>
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取逻辑操作符帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Logical_Operators
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),t=[o];function i(p,r){return s(),n("div",null,t)}const u=e(l,[["render",i],["__file","powershel-operator.html.vue"]]),v=JSON.parse('{"path":"/powershell/powershel-operator.html","title":"操作符","lang":"zh-CN","frontmatter":{"title":"操作符","icon":"less-than-equal","order":4,"category":["powershell"],"tag":["powershell"],"description":"比较操作符 -eq -ne -gt -ge -lt -le -Like -NotLike -Match -NotMatch -Contains -NotContains -In -NotIn -Replace 获取比较操作符帮助 逻辑操作符 -and -or -xor -not ! 获取逻辑操作符帮助","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/powershell/powershel-operator.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"操作符"}],["meta",{"property":"og:description","content":"比较操作符 -eq -ne -gt -ge -lt -le -Like -NotLike -Match -NotMatch -Contains -NotContains -In -NotIn -Replace 获取比较操作符帮助 逻辑操作符 -and -or -xor -not ! 获取逻辑操作符帮助"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"powershell"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作符\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"比较操作符","slug":"比较操作符","link":"#比较操作符","children":[]},{"level":2,"title":"逻辑操作符","slug":"逻辑操作符","link":"#逻辑操作符","children":[]}],"git":{},"readingTime":{"minutes":0.52,"words":155},"filePathRelative":"powershell/powershel-operator.md","autoDesc":true}');export{u as comp,v as data};
