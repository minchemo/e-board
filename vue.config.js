module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/size.scss";
          `
            }
        }
    }
};