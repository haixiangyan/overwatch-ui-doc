<template>
    <div class="doc-design">
        <doc-post>
            <h1>Design</h1>
            <!--Idea-->
            <h2>Idea</h2>
            <p>
                Because all components are developed based on the game Overwatch, you may find it's kind of not compatible with your web app.
                For example, if there's a white background, and you place the OwButton on it. You will see this.
            </p>
            <div class="suit">
                <ow-button>Test</ow-button>
            </div>
            <p>
                It's little hard to observe the changes of hover transition or its border. Why I design them like this?
                Because the component design style come from Overwatch which always has a colorful background there. I have already tried my
                best to balance the color value of border, background, text color to make it more suitable for Web App.
            </p>
            <strong>So I strongly recommend you to add a background so that your Web App looks nicer.</strong>

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
    export default {
        name: "DocDesign",
        data() {
            return {
                backgrounds: [
                    'https://glitch.asia/wp-content/uploads/sites/43/2017/10/Skullyatta5.0.jpg',
                    'https://wpmisc.com/sites/default/files/wallpaper/games/69807/overwatch-genji-hd-wallpapers-69807-7161793.png',
                    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/314a525b-3386-4cc8-b6c8-b15e7d83e08a/daa9i7k-7c562592-edfa-411d-b6cd-06535644063e.jpg/v1/fill/w_1192,h_670,q_70,strp/reaper___overwatch_wallpaper_by_raycorethecrawler_daa9i7k-pre.jpg',
                    'https://i.imgur.com/n1b4ZIb.jpg'
                ]
            }
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
