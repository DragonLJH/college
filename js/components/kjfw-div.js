Vue.component('kjfw-div', {
    props: {
        title: {
            type: String
        },
        titleIcon: {
            type: String
        },
        main: {
            type: Array
        },
    },
    data: function() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
<div class="kjfw-div">
    <title-div :title="title" :title-icon="titleIcon" />
    <div class="main icons">
        <div class="icons-item" v-for="(item, index) in main" :key="index">
            <div>
                <div class="icon icon-m" :class="item.titleIcon"></div>
                <div class="icon rb jiaobiao icon-s"></div>
            </div>
            <div>{{item.title}}</div>
        </div>
    </div>
</div>
`

})