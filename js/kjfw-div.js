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
    mixins: [mixinSetting],
    data: function() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
                <div>
                    <div class="title">
                        <div class="title-icon">
                            <span class="icon" :class="titleIcon"></span>{{title}}
                        </div>
                        <div class="title-operate icon shezhi" @click="mixinSetting('123')"></div>
                    </div>
                    <div class="main icons">
                        <div class="icons-item" v-for="(item, index) in main" :key="index">
                            <div>
                                <div class="icon " :class="item.titleIcon"></div>
                            </div>
                            <div>{{item.title}}</div>
                        </div>
                    </div>
                </div>`

})