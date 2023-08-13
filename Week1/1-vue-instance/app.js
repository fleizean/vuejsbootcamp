const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Bootcamp day one!",
            description: "Lorem ipsum dolor sit amet",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız.",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vue"
            },
            owner: "pogaca"
        };
    },

}).mount("#app");