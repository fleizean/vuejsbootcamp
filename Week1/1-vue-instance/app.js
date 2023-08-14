const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp day one!",
            description: "Lorem ipsum dolor sit amet",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız.",
                target: "_blank",
                url: "https://github.com/fleizean",
                alt: "mufredat-fleizean-vue"
            },
            owner: "powagaca",
            x: 0,
            y: 0,
        };
    },
    methods : { // javascriptteki script içerisine function tanımlamak ile aynı işlev aşağıdaki
        changeTitle(pTitle) { 
            this.title = pTitle; // buradaki this ile üstteki return alanında oluşturmuş olduğum
            // değişkenlere ulaşabildim thisin mantığını c++'den biliyosun.
        },
        updateCoords(event) {
            console.log(event.x, event.y);
            this.x = event.x;
            this.y = event.y;
        },
    },

}).mount("#app");