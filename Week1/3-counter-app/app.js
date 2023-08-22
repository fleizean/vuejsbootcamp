const app = Vue.createApp({
    data() {
        return {
            value: 0,
            value2: 0,
        };
    },
    methods : {
        /* increaseValue() {
            this.value++;
        },
        decreaseValue() {
            this.value--;
        } */

        /* getCounterResult() {
            console.log('counter 1 çalışıyor');
            return this.value > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
        getCounterResult2() { 
            console.log('counter 2 çalışıyor');
            return this.value2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        } */
        // burada  yaptıklarımızdan sonra counter1'in arttırmasına basmamıza rağmen 2 counterda çalışacak bunu
        // daha detaylı mediumda anlatıyorum. ayrıca sorunun cevabıda aşağıdaki computed yapısı olacak. üstteki kodları
        // computed yapısına taşımamız gerekicek. 
    },

    computed : {
        getCounterResult() {
            console.log('counter 1 çalışıyor');
            return this.value > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
        getCounterResult2() { 
            console.log('counter 2 çalışıyor');
            return this.value2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        }
    }
}).mount("#app");