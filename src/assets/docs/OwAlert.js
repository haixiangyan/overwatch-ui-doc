
export default {
    content: `<h1 id="owalert">OwAlert</h1>
<p>This UI library provides a way to popup alert. First, you need to 
import it.</p>
<pre><code class="language-javascript">import OwUI from &#39;overwatch-ui&#39;

Vue.use(OwUI.plugins.$owAlert)</code></pre>
<h2 id="usage">Usage</h2>
<p>Then you can make an alert in anywhere of your project.</p>
<pre><code class="language-javascript">this.$owAlert({
    type: type,
    title: &#39;SEARCHING FOR GAME&#39;,
    message: &#39;ESTIMATE TIME: 0:0:2&#39;,
    closeButton: {
        text: &#39;OK&#39;,
        callback(vm) {
            console.log(&#39;Yes&#39;)
        }
    }
})</code></pre>
`
}