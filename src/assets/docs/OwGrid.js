
export default {
    content: `<h1 id="owgrid">OwGrid</h1>
<p>This UI library provides a Grid System.</p>
<h2 id="example">Example</h2>
<pre><code class="language-html">&lt;ow-row&gt;
    &lt;ow-col&gt;
       &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
    &lt;ow-col&gt;
        &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
&lt;/ow-row&gt;</code></pre>
<h2 id="gutter">Gutter</h2>
<p>You can assign a value to <code>gutter</code> to give more space between each element.</p>
<pre><code class="language-html">&lt;ow-row&gt;
    &lt;ow-col&gt;
       &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
    &lt;ow-col&gt;
        &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
&lt;/ow-row&gt;</code></pre>
<h2 id="span-and-offset">Span and Offset</h2>
<p>You can define width for each OwCol or add an offset.</p>
<pre><code class="language-html">&lt;ow-row&gt;
    &lt;ow-col :pc=&quot;{span: 2, offset: 2}&quot;&gt;
       &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
    &lt;ow-col :pc=&quot;{span: 4, offset: 4}&quot;&gt;
        &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
&lt;/ow-row&gt;</code></pre>
<h2 id="responsive">Responsive</h2>
<p>To make it responsive, this UI library is built for Mobile-First.
You can specify different styles for 3 device: PC, Tablet and Phone.</p>
<pre><code class="language-html">&lt;ow-row&gt;
    &lt;ow-col :pc=&quot;{span: 2}&quot; :tablet=&quot;{span: 12}&quot; :phone=&quot;{span: 24}&quot;&gt;
       &lt;div class=&quot;col-item&quot;&gt;&lt;/div&gt;
    &lt;/ow-col&gt;
&lt;/ow-row&gt;</code></pre>
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
<td>pc</td>
<td>Set span and offset for PC device</td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td>tablet</td>
<td>Set span and offset for tablet device</td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td>phone</td>
<td>Set span and offset for phone device</td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td>span</td>
<td>Set span of OwCol</td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td>offset</td>
<td>Set offset of OwCol</td>
<td>Object</td>
<td>-</td>
</tr>
</tbody></table>
`
}