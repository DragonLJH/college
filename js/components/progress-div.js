Vue.component('progress-div', {
    props: {
        progress: {
            type: Object,
            default: () => {
                return {
                    show: true,
                    pace: "",
                    name: "",
                    setting:false,
                }
            }
        }
    },
    data: function () {
        return {}
    },
    methods: {},
    mounted() { },
    template: `
<div class="progress" v-if="progress.show">
    <div class="item">
        <div :style="{width: progress.pace }"></div>
        <span>{{progress.pace}}({{progress.name}})</span>
    </div>
    <div v-if="progress.setting" class="icon shezhi"></div>
</div>
`
})