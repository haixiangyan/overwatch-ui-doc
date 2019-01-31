<template>
    <div class="doc-design">
        <doc-post>
            <h1>Design</h1>
            <!--Idea-->
            <h2>Idea</h2>
            <p>
                Because all components are developed based on the game Overwatch, you may find it's not compatible with your web app.
                For example, if your App has a background with white color, and you place the OwButton on it. You will see this.
            </p>
            <div class="suit">
                <ow-button>Test</ow-button>
            </div>
            <p>
                It's little hard to observe the changes of hover transition or its border. Why I design them like this?
                Because all components are from Overwatch which always has a colorful background there. I have already tried my
                best to balance the color value of border, background, text color to make it more suitable for Web App.
            </p>
            <strong>Because of this reason, I strongly recommend you to add a background so that your Web App looks nicer.</strong>

            <!--Color-->
            <h2>Color</h2>
            <p>Here's some color that are extracted from this game. You can use them to color your Web App.</p>
            <ow-row :gutter="20" class="color">
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #33A03D;">#33A03D</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #FFC429;">#FFC429</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #DE4561;">#DE4561</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #909399;">#909399</div>
                </ow-col>
            </ow-row>
            <ow-row :gutter="20" class="color">
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #3B9CE1;">#3B9CE1</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #464F6A;">#464F6A</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #2B3753;">#2B3753</div>
                </ow-col>
                <ow-col :phone="{span: 6}">
                    <div class="col-item" style="background: #c0c4cc;">#C0C4CC</div>
                </ow-col>
            </ow-row>

            <!--Background-->
            <h2>Background</h2>
            <p>As I said, to make UI components more suitable, you may need to add a background. Here's some examples.</p>
            <ow-row class="bg" :gutter="20">
                <ow-col v-for="bg in backgrounds" :key="bg" :phone="{span: 6}">
                    <div>
                        <img :src="bg" alt="bg">
                    </div>
                    <div>
                        <ow-button @click="downloadImg(bg)" class="download-button">
                            <span class="download-button-link">Download</span>
                        </ow-button>
                    </div>
                </ow-col>
            </ow-row>
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocDesign",
        data() {
            return {
                backgrounds: [
                    'https://media.alienwarearena.com/media/overwatch-2-5.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoM7AjT6Y8nuzuRakLdjdeARa9jj0WCRKQUCvtyOE92-8RJn0',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvg4-lbHzB4b5BzQHRvvNy9m5ZuHdzCypWzpdVx9ImvW6oyut',
                    'https://hdwallpaperim.com/wp-content/uploads/2017/08/23/457693-Overwatch-Reaper_Overwatch-748x421.jpg'
                ]
            }
        },
        components: {
            DocPost
        },
        methods: {
            downloadImg(bg) {
                window.location.href = bg
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-design {
    .suit {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: $--color-white;
    }
    .color {
        margin-bottom: 10px;
        .col-item {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            height: 50px;
            color: white;
        }
    }
    .bg {
        img {
            width: 100%;
        }
        .download-button {
            width: 100%;
            height: $--height-mini;
            &-link {
                color: white;
            }
        }
    }
}
</style>