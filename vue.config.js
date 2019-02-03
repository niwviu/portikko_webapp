module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `            
            @import "@/assets/styles/_colors.scss";                    
            @import "@/assets/styles/_app.scss";        
          `,
      },
    },
  },
};
