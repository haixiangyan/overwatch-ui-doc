
export default {
    content: `<h1 id="owcollapse">OwCollapse</h1>
<h2 id="example">Example</h2>
<pre><code class="language-html">&lt;ow-collapse-group :selected.sync=&quot;selectedCollapse&quot; :multiSelect=&quot;true&quot;&gt;
    &lt;ow-collapse title=&quot;Title1&quot; name=&quot;1&quot;&gt; &lt;div&gt;Content 1&lt;/div&gt; &lt;/ow-collapse&gt;
    &lt;ow-collapse title=&quot;Title2&quot; name=&quot;2&quot;&gt; &lt;div&gt;Content 2&lt;/div&gt; &lt;/ow-collapse&gt;
    &lt;ow-collapse title=&quot;Title3&quot; name=&quot;3&quot;&gt; &lt;div&gt;Content 3&lt;/div&gt; &lt;/ow-collapse&gt;
&lt;/ow-collapse-group&gt;
&lt;span&gt;{{selectedCollapse}}&lt;/span&gt;</code></pre>
<pre><code class="language-javascript">data() {
    return{
        selectedCollapse: [&#39;1&#39;, &#39;2&#39;]
    } 
}</code></pre>
<h2 id="single-select">Single Select</h2>
<p>You can enable only one OwCollapse to expand. 
You can&#39;t define the <code>selected</code> array that has more than 1 element.</p>
<pre><code class="language-html">&lt;ow-collapse-group :selected.sync=&quot;selectedCollapse&quot; :multiSelect=&quot;false&quot;&gt;
    &lt;ow-collapse title=&quot;Title1&quot; name=&quot;1&quot;&gt; &lt;div&gt;Content 1&lt;/div&gt; &lt;/ow-collapse&gt;
    &lt;ow-collapse title=&quot;Title2&quot; name=&quot;2&quot;&gt; &lt;div&gt;Content 2&lt;/div&gt; &lt;/ow-collapse&gt;
    &lt;ow-collapse title=&quot;Title3&quot; name=&quot;3&quot;&gt; &lt;div&gt;Content 3&lt;/div&gt; &lt;/ow-collapse&gt;
&lt;/ow-collapse-group&gt;
&lt;span&gt;{{selectedCollapse}}&lt;/span&gt;</code></pre>
<pre><code class="language-javascript">data() {
    return{
        selectedCollapse: [&#39;1&#39;]
    } 
}</code></pre>
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
<td>selected</td>
<td>Array of selected items</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>multiSelect</td>
<td>If multiple OwCollapse can expand</td>
<td>Boolean</td>
<td>-</td>
</tr>
</tbody></table>
`
}