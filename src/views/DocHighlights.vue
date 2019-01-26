<template>
    <div class="doc-highlights">
        <doc-post>
            <h1>Highlights</h1>
            <p>
                This guy 木千面 makes several awesome videos of Overwatch Highlights, and I really like them.
                Hope you guys can subscribe his channel on
                <a href="https://www.bilibili.com/">Bilibili</a>.
            </p>

            <p>
                <strong>Before 5:15 is the dump Highlights XD, highlights show will be started at 5:15.</strong>
            </p>

            <div ref="videoWrapper">
                <iframe
                        class="video"
                        src="//player.bilibili.com/player.html?aid=19591090&cid=31946842&page=1"
                        scrolling="no"
                        border="0"
                        frameborder="no"
                        framespacing="0"
                        allowfullscreen="true">
                </iframe>
            </div>
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost/DocPost'
    export default {
        name: "DocHighlight",
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-highlights {
    .video {
        width: 100%;
        height: 800px;
    }
}
</style>