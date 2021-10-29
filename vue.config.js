module.exports = {
    publicPath: "./",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/size.scss";
          `,
            },
        },
    },
}