<template>
    <div class="doc-intro">
        <doc-post>
            <h1>Overwatch UI</h1>
            <!--badges-->
            <img class="badge" src="https://camo.githubusercontent.com/a50c2d62e9116a9b23e760dbb18d507074e21ba1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f75692d2d6c69622d6f76657277617463682d4646433432392e737667" alt="badge">
            <img class="badge" src="https://camo.githubusercontent.com/169a1e3726438633a4ad90dc6b640346381d253b/68747470733a2f2f62616467652e667572792e696f2f6a732f6f76657277617463682d75692e737667" alt="badge">
            <img class="badge" src="https://camo.githubusercontent.com/c3bea802e4ffa728117492a608fe802a40aec586/68747470733a2f2f7472617669732d63692e6f72672f4861697869616e67363132332f6f76657277617463682d75692e7376673f6272616e63683d6d6173746572" alt="badge">
            <img class="badge" src="https://img.shields.io/npm/dm/overwatch-ui.svg" alt="badge">
            <img class="badge" src="https://img.shields.io/github/stars/Haixiang6123/overwatch-ui.svg?style=social" alt="badge">

            <svg class="home-header__logo" viewBox="0 7.8 64 25.9">
                <g>
                    <g>
                        <path fill="rgb(255,156,0)" d="M26.69,14.41a8.75,8.75,0,0,1,10.61,0l2.16-2.67a12.17,12.17,0,0,0-14.95,0Z" transform="translate(0 -0.29)"></path>
                        <path d="M40.14,12.3,38,15a8.46,8.46,0,0,1,1.54,10.45l-4.76-4.58-2.22-5v7.6L37.23,28a8.75,8.75,0,0,1-10.46,0l4.71-4.53v-7.6l-2.22,5L24.5,25.42A8.46,8.46,0,0,1,26,15L23.86,12.3a11.89,11.89,0,0,0-3.94,8.85,12.09,12.09,0,0,0,24.17,0A11.9,11.9,0,0,0,40.14,12.3Z" transform="translate(0 -0.29)"></path>
                    </g>
                </g>
            </svg>
            <p>Overwatch UI library for Web APP, built with Vue.js. Feel free to download from <a href="https://www.npmjs.com/package/overwatch-ui">npm</a>.</p>

            <h2>Get Started</h2>
            <p>Get excited? Go <router-link to="/start">here</router-link> to get started.</p>

            <h2>Note</h2>
            <p>This UI library will reset some styles as followed. I strongly recommend you to add these styles to all of your projects for saving time to find CSS bugs :)</p>

            <pre>
<code class="css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}</code>
            </pre>

            <h2>Copyright Statement</h2>
            <p>
                I love to play Overwatch, so I built this just for fun. But,
                I am not sure if this will cause a Copyright problem of using font styles, logo, images made by Blizzard Entertainment.
                So for now, I have to temporarily add a
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 Licence</a>
                and some statements as follow:
            </p>
            <ul class="copyright">
                <li>This UI library is for learning purposes only, not for commercial use.</li>
                <li>Font Styles, Logo, images and some component designs are from Video Game Overwatch, made by Blizzard Entertainment.</li>
                <li>This repo also follows<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 Licence</a></li>
            </ul>
            <p>
                I also really want my library to help out other front-end developers, so if you have any Copyright suggestions for me, feel free to place an Issue or contact me directly
                <a href="haixiang6123@gmail.com">haixiang6123@gmail.com</a>
                :)
            </p>
        </doc-post>
    </div>
</template>

<script>
    export default {
        name: 'DocIntro',
    }
</script>

<style scoped lang="scss">
.doc-intro {
    .badge {
        margin-right: 5px;
    }
    .copyright {
        li {
            list-style-type: circle;
            margin-bottom: 20px;
        }
    }
}
</style>
