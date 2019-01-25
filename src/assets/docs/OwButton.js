
export default {
    content: `<h1 id="owbutton">OwButton</h1>
<h2 id="owbutton-types">OwButton Types</h2>
<p>There are 4 button types: <code>primary</code>, <code>warning</code>, <code>info</code>, <code>danger</code>.</p>
<pre><code class="language-html">&lt;ow-button type=&quot;primary&quot;&gt;Primary&lt;/ow-button&gt;
&lt;ow-button type=&quot;warning&quot;&gt;Warning&lt;/ow-button&gt;
&lt;ow-button type=&quot;info&quot;&gt;Info&lt;/ow-button&gt;
&lt;ow-button type=&quot;danger&quot;&gt;Danger&lt;/ow-button&gt;</code></pre>
<h2 id="owbutton-with-icon">OwButton with Icon</h2>
<p>You can add an icon inside the button.</p>
<pre><code class="language-html">&lt;ow-button icon-name=&quot;setting&quot;&gt;Setting&lt;/ow-button&gt;
&lt;ow-button icon-name=&quot;remove&quot;&gt;Remove&lt;/ow-button&gt;</code></pre>
<p>Also, you can set its position as you like.</p>
<pre><code class="language-html">&lt;ow-button icon-name=&quot;up&quot; icon-position=&quot;left&quot;&gt;Up&lt;/ow-button&gt;
&lt;ow-button icon-name=&quot;down&quot; icon-position=&quot;right&quot;&gt;Down&lt;/ow-button&gt;</code></pre>
<p>Loading state is also available.</p>
<pre><code class="language-html">&lt;ow-button
    icon-name=&quot;loading&quot;
    :is-loading=&quot;true&quot;&gt;
    Loading...
&lt;/ow-button&gt;</code></pre>
<h2 id="event">Event</h2>
<p>You can add a click event handler to this component.</p>
<pre><code class="language-html">&lt;ow-button
    @click=&quot;isLoading = !isLoading&quot;
    icon-name=&quot;loading&quot;
    :is-loading=&quot;isLoading&quot;&gt;
    Loading...
&lt;/ow-button&gt;</code></pre>
<h2 id="owbutton-group">OwButton Group</h2>
<p>Sometimes, you may want to group several buttons like: 
buttons for next page and prev page.</p>
<pre><code class="language-html">&lt;ow-button-group&gt;
    &lt;ow-button icon-name=&quot;add&quot; type=&quot;primary&quot; icon-position=&quot;left&quot;&gt;
        More
    &lt;/ow-button&gt;
    &lt;ow-button icon-name=&quot;subtract&quot; type=&quot;primary&quot; icon-position=&quot;right&quot;&gt;
        Less
    &lt;/ow-button&gt;
&lt;/ow-button-group&gt;</code></pre>
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
<td>icon-name</td>
<td>Set name of icon in OwButton</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>icon-position</td>
<td>Set position of icon in OwButton</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>is-loading</td>
<td>Set the loading status of OwButton</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>Set type of OwButton</td>
<td>String</td>
<td>&quot;warning&quot;</td>
</tr>
</tbody></table>
`
}