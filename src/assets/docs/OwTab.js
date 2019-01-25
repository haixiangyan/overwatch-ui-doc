
export default {
    content: `<h1 id="owtabs">OwTabs</h1>
<h2 id="example">Example</h2>
<p>You can define a tab navigator with <code>OwTabs</code>.</p>
<pre><code class="language-html">&lt;ow-tabs :selected=&quot;selectedTab&quot;&gt;
    &lt;ow-tabs-head&gt;
        &lt;ow-tabs-item name=&quot;social&quot;&gt;Data&lt;/ow-tabs-item&gt;
        &lt;ow-tabs-item name=&quot;career&quot;&gt;Career&lt;/ow-tabs-item&gt;
        &lt;ow-tabs-item name=&quot;avatar&quot;&gt;Avatar&lt;/ow-tabs-item&gt;
    &lt;/ow-tabs-head&gt;

    &lt;ow-tabs-body&gt;
        &lt;ow-tabs-pane name=&quot;data&quot;&gt;Data&lt;/ow-tabs-pane&gt;
        &lt;ow-tabs-pane name=&quot;career&quot;&gt;Career&lt;/ow-tabs-pane&gt;
        &lt;ow-tabs-pane name=&quot;avatar&quot;&gt;Avatar&lt;/ow-tabs-pane&gt;
    &lt;/ow-tabs-body&gt;
&lt;/ow-tabs&gt;</code></pre>
<h2 id="action">Action</h2>
<p>You can place any elements in the right hand side with <code>&lt;template&gt;</code>.</p>
<pre><code class="language-html">&lt;ow-tabs :selected=&quot;selectedTab&quot;&gt;
    &lt;ow-tabs-head&gt;
        &lt;ow-tabs-item name=&quot;data&quot;&gt;Data&lt;/ow-tabs-item&gt;
        &lt;ow-tabs-item name=&quot;career&quot;&gt;Career&lt;/ow-tabs-item&gt;
        &lt;ow-tabs-item name=&quot;avatar&quot;&gt;Avatar&lt;/ow-tabs-item&gt;
        &lt;template slot=&quot;actions&quot;&gt;
            &lt;ow-button&gt;Setting&lt;/ow-button&gt;
        &lt;/template&gt;
    &lt;/ow-tabs-head&gt;

    &lt;ow-tabs-body&gt;
        &lt;ow-tabs-pane name=&quot;data&quot;&gt;Data&lt;/ow-tabs-pane&gt;
        &lt;ow-tabs-pane name=&quot;career&quot;&gt;Career&lt;/ow-tabs-pane&gt;
        &lt;ow-tabs-pane name=&quot;avatar&quot;&gt;Avatar&lt;/ow-tabs-pane&gt;
    &lt;/ow-tabs-body&gt;
&lt;/ow-tabs&gt;</code></pre>
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
<td>Name of OwTabsItem and OwTabsBody</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>selected</td>
<td>Set active item and pane with given selected name</td>
<td>String</td>
<td></td>
</tr>
</tbody></table>
`
}