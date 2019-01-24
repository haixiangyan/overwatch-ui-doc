module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/ow-ui-doc/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                data: `
                    @import "@/assets/styles/global.scss";
                    @import "@/assets/styles/reset.scss";
                `
            }
        }
    }
}