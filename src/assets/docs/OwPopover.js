
export default {
    content: `<h1 id="owpopover">OwPopover</h1>
<h2 id="example">Example</h2>
<p>Here is the basic example.</p>
<pre><code class="language-html">&lt;ow-popover position=&quot;top&quot;&gt;
    &lt;template slot=&quot;content&quot; slot-scope=&quot;{close}&quot;&gt;
        &lt;div&gt;Popover Content&lt;/div&gt;
    &lt;/template&gt;
    &lt;ow-button&gt;Top&lt;/ow-button&gt;
&lt;/ow-popover&gt;</code></pre>
<h2 id="position">Position</h2>
<p>You can change position of how it shows up.</p>
<pre><code class="language-html">&lt;div&gt;
    &lt;ow-popover position=&quot;top&quot;&gt;
        &lt;template slot=&quot;content&quot; slot-scope=&quot;{close}&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
        &lt;/template&gt;
        &lt;ow-button&gt;Top&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;ow-popover position=&quot;bottom&quot; @click=&quot;yyy&quot;&gt;
        &lt;template slot=&quot;content&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
        &lt;/template&gt;
        &lt;ow-button type=&quot;primary&quot;&gt;Bottom&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;ow-popover position=&quot;left&quot; @click=&quot;yyy&quot;&gt;
        &lt;template slot=&quot;content&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
        &lt;/template&gt;
        &lt;ow-button type=&quot;info&quot;&gt;Left&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;ow-popover position=&quot;right&quot; @click=&quot;yyy&quot;&gt;
        &lt;template slot=&quot;content&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
        &lt;/template&gt;
        &lt;ow-button type=&quot;danger&quot;&gt;Right&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;</code></pre>
<h2 id="trigger">Trigger</h2>
<p>You can also define the trigger of OwPopover. Default trigger is &#39;click&#39;.</p>
<pre><code class="language-html">&lt;div&gt;
    &lt;ow-popover position=&quot;top&quot;&gt;
        &lt;template slot=&quot;content&quot; slot-scope=&quot;{close}&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
            &lt;ow-button @click=&quot;close&quot;&gt;Cancel&lt;/ow-button&gt;
        &lt;/template&gt;
        &lt;ow-button&gt;Top&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;ow-popover trigger=&quot;hover&quot; position=&quot;top&quot; @click=&quot;yyy&quot;&gt;
        &lt;template slot=&quot;content&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
        &lt;/template&gt;
        &lt;ow-button&gt;Top&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;</code></pre>
<h2 id="close-api">Close API</h2>
<p>OwPopover exposes an API to close it.</p>
<pre><code class="language-html">&lt;div&gt;
    &lt;ow-popover position=&quot;top&quot;&gt;
        &lt;template slot=&quot;content&quot; slot-scope=&quot;{close}&quot;&gt;
            &lt;div&gt;Popover Content, Hello World&lt;/div&gt;
            &lt;ow-button @click=&quot;close&quot;&gt;Cancel&lt;/ow-button&gt;
        &lt;/template&gt;
        &lt;ow-button&gt;Top&lt;/ow-button&gt;
    &lt;/ow-popover&gt;
&lt;/div&gt;</code></pre>
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
<td>trigger</td>
<td>Trigger of showing OwPopover</td>
<td>String</td>
<td>&quot;click&quot;</td>
</tr>
<tr>
<td>position</td>
<td>Position of showing OwPopover: <code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code></td>
<td>String</td>
<td>&quot;left&quot;</td>
</tr>
<tr>
<td>slot-scope.close</td>
<td>Close function to hide OwPopover</td>
<td>Function</td>
<td>-</td>
</tr>
</tbody></table>
`
}