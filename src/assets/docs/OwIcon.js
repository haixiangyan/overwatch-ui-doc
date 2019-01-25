
export default {
    content: `<h1 id="owicon">OwIcon</h1>
<h3 id="name">Name</h3>
<p>Set the name to select any icons you like</p>
<pre><code class="language-html">&lt;ow-icon name=&quot;setting&quot;&gt;&lt;/ow-icon&gt;
&lt;ow-icon name=&quot;remove&quot;&gt;&lt;/ow-icon&gt;
&lt;ow-icon name=&quot;user&quot;&gt;&lt;/ow-icon&gt;</code></pre>
<h3 id="color">Color</h3>
<p>In some cases, you may want to highlight the Icon. </p>
<pre><code class="language-html">&lt;ow-icon name=&quot;setting&quot; color=&quot;#aabbff&quot;&gt;&lt;/ow-icon&gt;
&lt;ow-icon name=&quot;remove&quot; color=&quot;#ffbbaa&quot;&gt;&lt;/ow-icon&gt;
&lt;ow-icon name=&quot;user&quot; color=&quot;#aaffbb&quot;&gt;&lt;/ow-icon&gt;</code></pre>
<h3 id="loading">Loading</h3>
<p>The Icon will be rotated if you enable the loading state.</p>
<pre><code class="language-html">&lt;ow-icon name=&quot;loading&quot; :is-loading=&quot;true&quot;&gt;&lt;/ow-icon&gt;</code></pre>
<h2 id="properties">Properties</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td>name</td>
<td>Set name of OwIcon</td>
<td>String</td>
<td>&#39;setting&#39;</td>
</tr>
<tr>
<td>color</td>
<td>Set stroke color of OwIcon</td>
<td>String</td>
<td>&#39;000000&#39;</td>
</tr>
<tr>
<td>is-loading</td>
<td>Set loading state of OwIcon</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
`
}