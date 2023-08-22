const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemList: ["elma", "armut", "kiraz", "çilek", "kavun"],
            /* filteredList: [] */
        };
    },
    methods: {
        searchList() {
            /* this.filteredList = this.itemList.filter(i => i.includes(this.search)); */
            
        } // uzun hali bunu reactivity ile daha kolay yapabiliriz aşağıdaki gibi
    },
    computed: {
        filteredList() {
            return this.itemList.filter(i => i.includes(this.search));
        },
    },
}).mount("#app");