Vue.component("card-div", {
    props: ["icon"],
    mounted() {},
    template: `
        <div class="card-div">
            <div class="card-div-icon icon" :class="icon"></div>
            <slot></slot>
        </div> 
    `
})


Vue.component("card-view-div", {
    props: ["title", "titleIcon", "imgData", "index"],
    methods: {
        asd() {
            this.$emit("target", this.index)
        }
    },
    mounted() {},
    template: `
        <div class="card-view-div" @click="asd">
            <card-div :icon="titleIcon">
                <title-div :title="title"/>
                <img-div :img-data="imgData"></img-div>
            </card-div>
        </div> 
    `
})