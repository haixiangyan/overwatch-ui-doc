<template>
    <div class="doc-social">
        <doc-post>
            <h1>Social</h1>
            <p>If there are any questions, you can post an Issue on the
                <a href="https://github.com/Haixiang6123/overwatch-ui/issues">Github Issue Page.</a>
                You can also contact me directly.
            </p>
            <h2>Email</h2>
            <p>
                <strong> haixiang6123@gmail.com </strong>
            </p>
            <h2>Messenger</h2>
            <img class="qr" src="../assets/images/messenger.jpg" alt="messenger">
            <h2>Wechat</h2>
            <img class="qr" src="../assets/images/wechat.jpg" alt="wechat">
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost/DocPost'
    export default {
        name: "DocSocial",
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-social {
    .qr {
        width: 30%;
    }
}
</style>