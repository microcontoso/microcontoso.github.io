import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,b as n}from"./app-BUegsOj5.js";const t={},o=n(`<h2 id="循环for" tabindex="-1"><a class="header-anchor" href="#循环for"><span>循环for</span></a></h2><p>计算1+2+3+...+100 的和</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$Sum</span> = 0
<span class="token keyword">For</span> <span class="token punctuation">(</span><span class="token variable">$i</span> = 1<span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">-le</span> 100<span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token variable">$Sum</span> <span class="token operator">+=</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$Sum</span> is <span class="token variable">$Sum</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取for帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_For
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="循环foreach" tabindex="-1"><a class="header-anchor" href="#循环foreach"><span>循环Foreach</span></a></h2><p>计算1+2+3+...+100 的和</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$Sum</span> = 0
1<span class="token punctuation">.</span><span class="token punctuation">.</span>100 <span class="token punctuation">|</span> <span class="token keyword">foreach</span> <span class="token punctuation">{</span><span class="token variable">$Sum</span> <span class="token operator">+=</span> <span class="token variable">$_</span><span class="token punctuation">}</span>
<span class="token function">Write-Host</span> <span class="token string">&quot;\`<span class="token variable">$Sum</span> is <span class="token variable">$Sum</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取D:\\Servers.txt里的服务器Spooler服务状态</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$Servers</span> = <span class="token function">Get-Content</span> <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Servers.txt&quot;</span>
<span class="token keyword">Foreach</span> <span class="token punctuation">(</span><span class="token variable">$Server</span> in <span class="token variable">$Servers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">Get-Service</span> <span class="token operator">-</span>Name Spooler <span class="token operator">-</span>ComputerName <span class="token variable">$Server</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取Foreach帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Foreach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="判断if" tabindex="-1"><a class="header-anchor" href="#判断if"><span>判断If</span></a></h2><p>10以内的奇数，偶数</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token keyword">For</span> <span class="token punctuation">(</span><span class="token variable">$i</span> = 1<span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">-le</span> 10<span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">%</span> 2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">Write-Host</span> <span class="token string">&quot;<span class="token variable">$i</span> is odd&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token function">Write-Host</span> <span class="token string">&quot;<span class="token variable">$i</span> is even&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取If帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_If
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),l=[o];function p(r,i){return e(),s("div",null,l)}const u=a(t,[["render",p],["__file","powershell-if.html.vue"]]),v=JSON.parse('{"path":"/powershell/powershell-if.html","title":"判断和循环","lang":"zh-CN","frontmatter":{"title":"判断和循环","icon":"list-check","order":5,"category":["powershell"],"tag":["powershell"],"description":"循环for 计算1+2+3+...+100 的和 获取for帮助 循环Foreach 计算1+2+3+...+100 的和 获取D:\\\\Servers.txt里的服务器Spooler服务状态 获取Foreach帮助 判断If 10以内的奇数，偶数 获取If帮助","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/powershell/powershell-if.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"判断和循环"}],["meta",{"property":"og:description","content":"循环for 计算1+2+3+...+100 的和 获取for帮助 循环Foreach 计算1+2+3+...+100 的和 获取D:\\\\Servers.txt里的服务器Spooler服务状态 获取Foreach帮助 判断If 10以内的奇数，偶数 获取If帮助"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"powershell"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"判断和循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"循环for","slug":"循环for","link":"#循环for","children":[]},{"level":2,"title":"循环Foreach","slug":"循环foreach","link":"#循环foreach","children":[]},{"level":2,"title":"判断If","slug":"判断if","link":"#判断if","children":[]}],"git":{},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"powershell/powershell-if.md","autoDesc":true}');export{u as comp,v as data};
