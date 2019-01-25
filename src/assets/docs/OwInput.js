
export default {
    content: `<h1 id="owinput">OwInput</h1>
<h2 id="basic">Basic</h2>
<p>Basic usage.</p>
<pre><code class="language-html">&lt;ow-input&gt;&lt;/ow-input&gt;</code></pre>
<h2 id="hint">Hint</h2>
<p>You can give a hint to OwInput, and set a type for it with any icons you like to emphasis it.</p>
<pre><code class="language-html">&lt;ow-input
    value=&quot;Password&quot;
    placeholder=&quot;password&quot;
    icon-name=&quot;cancel&quot;
    hint=&quot;Error: Invalid Password.&quot;
    hintType=&quot;danger&quot;&gt;
&lt;/ow-input&gt;
&lt;ow-input
    value=&quot;Password&quot;
    placeholder=&quot;password&quot;
    icon-name=&quot;warning&quot;
    hint=&quot;Warn: Your password is easy to guess.&quot;
    hintType=&quot;warning&quot;&gt;
&lt;/ow-input&gt;
&lt;ow-input
    value=&quot;Password&quot;
    placeholder=&quot;password&quot;
    icon-name=&quot;notification&quot;
    hint=&quot;Info: Keep typing password.&quot;
    hintType=&quot;info&quot;&gt;
&lt;/ow-input&gt;</code></pre>
<h2 id="two-way-binding">Two-way Binding</h2>
<pre><code class="language-html">&lt;ow-input
    v-model=&quot;text&quot;
    placeholder=&quot;password&quot;&gt;
&lt;/ow-input&gt;

&lt;p&gt;{{text}}&lt;/p&gt;</code></pre>
<p>Define <code>pass</code> inside <code>data()</code>.</p>
<pre><code class="language-javascript">new Vue({
    data() {
        return {
            text: &#39;Hello World&#39;
        }
    }
})</code></pre>
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
<td>value</td>
<td>Set value of OwInput</td>
<td>String</td>
<td>&quot;text&quot;</td>
</tr>
<tr>
<td>iconName</td>
<td>Set name of an icon that along with OwInput</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>Set placholder of OwInput</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>Set whether is disabled to OwInput</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>Set whether is readonly to OwInput</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>hint</td>
<td>Set a hin below OwInput</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>hintType</td>
<td>Set type of hint, can be <code>info</code>, <code>warning</code>, <code>danger</code></td>
<td>String</td>
<td>-</td>
</tr>
</tbody></table>
`
}