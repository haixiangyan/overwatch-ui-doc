
export default {
    content: `<h1 id="owlayout">OwLayout</h1>
<h2 id="examples">Examples</h2>
<p>Here is the basic example.</p>
<pre><code class="language-html">&lt;ow-layout style=&quot;height: 100vh;&quot;&gt;
    &lt;ow-header class=&quot;header&quot;&gt;Header&lt;/ow-header&gt;
    &lt;ow-content class=&quot;content&quot;&gt;Content&lt;/ow-content&gt;
    &lt;ow-footer class=&quot;footer&quot;&gt;Footer&lt;/ow-footer&gt;
&lt;/ow-layout&gt;</code></pre>
<h2 id="owsider">OwSider</h2>
<p>You can add a sider aside main content.</p>
<pre><code class="language-html">&lt;ow-layout style=&quot;height: 100vh;&quot;&gt;
    &lt;ow-sider class=&quot;sider&quot;&gt;Sider&lt;/ow-sider&gt;
    &lt;ow-layout&gt;
        &lt;ow-header class=&quot;header&quot;&gt;Header&lt;/ow-header&gt;
        &lt;ow-content class=&quot;content&quot;&gt;Content&lt;/ow-content&gt;
        &lt;ow-footer class=&quot;footer&quot;&gt;Footer&lt;/ow-footer&gt;
    &lt;/ow-layout&gt;
&lt;/ow-layout&gt;</code></pre>
<p>Adding sider with another way.</p>
<pre><code class="language-html">&lt;ow-layout style=&quot;height: 100vh;&quot;&gt;
    &lt;ow-header class=&quot;header&quot;&gt;Header&lt;/ow-header&gt;
    &lt;ow-layout&gt;
        &lt;ow-sider class=&quot;sider&quot;&gt;Sider&lt;/ow-sider&gt;
        &lt;ow-content class=&quot;content&quot;&gt;Content&lt;/ow-content&gt;
    &lt;/ow-layout&gt;
    &lt;ow-footer class=&quot;footer&quot;&gt;Footer&lt;/ow-footer&gt;
&lt;/ow-layout&gt;</code></pre>
<p>You can also toggle sider with props <code>visible</code>.</p>
<pre><code class="language-html">&lt;ow-layout style=&quot;height: 100vh;&quot;&gt;
    &lt;ow-header class=&quot;header&quot;&gt;Header&lt;/ow-header&gt;
    &lt;ow-layout&gt;
        &lt;ow-sider :visible=&quot;visible&quot; class=&quot;sider&quot;&gt;Sider&lt;/ow-sider&gt;
        &lt;ow-content class=&quot;content&quot;&gt;
            Content
            &lt;button @click=&quot;isVisible = !isVisible&quot;&gt;&lt;/button&gt;
        &lt;/ow-content&gt;
    &lt;/ow-layout&gt;
    &lt;ow-footer class=&quot;footer&quot;&gt;Footer&lt;/ow-footer&gt;
&lt;/ow-layout&gt;</code></pre>
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
<td>visible</td>
<td>Set if OwHead is visible</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
`
}