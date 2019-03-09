<template>
    <div class="doc-scroll">
        <doc-post>
            <h1>Scroll</h1>
            <p>This component enables lazy load while scrolling.</p>

            <!--Basic-->
            <h2>Basic</h2>
            <div class="sample">
                <ow-scroll style="border: 2px solid #FFC429; border-radius: 4px" :height="400">
                    <p>Text1</p>
                    <p>Text2</p>
                    <p>Text3</p>
                    <p>Text4</p>
                    <p>Text5</p>
                    <p>Text6</p>
                    <p>Text7</p>
                    <p>Text8</p>
                    <p>Text9</p>
                    <p>Text10</p>
                    <p>Text11</p>
                    <p>Text12</p>
                    <p>Text13</p>
                    <p>Text14</p>
                    <p>Text15</p>
                    <p>Text16</p>
                    <p>Text17</p>
                    <p>Text18</p>
                    <p>Text19</p>
                    <p>Text20</p>
                    <p>Text21</p>
                    <p>Text22</p>
                    <p>Text23</p>
                    <p>Text24</p>
                    <p>Text25</p>
                    <p>Text26</p>
                    <p>Text27</p>
                    <p>Text28</p>
                    <p>Text29</p>
                    <p>Text30</p>
                    <p>Text31</p>
                    <p>Text32</p>
                    <p>Text33</p>
                    <p>Text34</p>
                    <p>Text35</p>
                    <p>Text36</p>
                    <p>Text37</p>
                    <p>Text38</p>
                    <p>Text39</p>
                    <p>Text40</p>
                    <p>Text41</p>
                    <p>Text42</p>
                    <p>Text43</p>
                    <p>Text44</p>
                    <p>Text45</p>
                    <p>Text46</p>
                    <p>Text47</p>
                    <p>Text48</p>
                    <p>Text49</p>
                    <p>Text50</p>
                    <p>Text51</p>
                    <p>Text52</p>
                    <p>Text53</p>
                    <p>Text54</p>
                    <p>Text55</p>
                    <p>Text56</p>
                    <p>Text57</p>
                    <p>Text58</p>
                    <p>Text59</p>
                    <p>Text60</p>
                    <p>Text61</p>
                    <p>Text62</p>
                    <p>Text63</p>
                    <p>Text64</p>
                    <p>Text65</p>
                    <p>Text66</p>
                    <p>Text67</p>
                    <p>Text68</p>
                    <p>Text69</p>
                    <p>Text70</p>
                    <p>Text71</p>
                    <p>Text72</p>
                    <p>Text73</p>
                    <p>Text74</p>
                    <p>Text75</p>
                    <p>Text76</p>
                    <p>Text77</p>
                    <p>Text78</p>
                    <p>Text79</p>
                    <p>Text80</p>
                    <p>Text81</p>
                    <p>Text82</p>
                    <p>Text83</p>
                    <p>Text84</p>
                    <p>Text85</p>
                    <p>Text86</p>
                    <p>Text87</p>
                    <p>Text88</p>
                    <p>Text89</p>
                    <p>Text90</p>
                    <p>Text91</p>
                    <p>Text92</p>
                    <p>Text93</p>
                    <p>Text94</p>
                    <p>Text95</p>
                    <p>Text96</p>
                    <p>Text97</p>
                    <p>Text98</p>
                    <p>Text99</p>
                    <p>Text100</p>
                </ow-scroll>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>height</td><td>Height of this container</td><td>Number</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/scroll'
    export default {
        name: "DocScroll",
        data() {
            return {
                sample
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-scroll {
    .sample {
        margin-bottom: 20px;
    }
}
</style>
