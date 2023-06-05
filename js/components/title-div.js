Vue.component('title-div', {
    props: {
        title: {
            type: String
        },
        titleIcon: {
            type: String
        }
    },
    mixins: [mixinSetting],
    data: function() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
    <div class="title" :style="{borderBottom: titleIcon?'solid 1px #ccc':'none'}" >
        <div class="title-icon">
            <span class="icon" :class="titleIcon" v-if="titleIcon"></span>{{title}}
        </div>
        <div class="title-operate icon shezhi" @click="mixinSetting('123')"></div>
    </div>
`

})