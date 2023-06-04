Vue.component('img-div', {
    props: {
        imgData: {
            type: Object,
            default: () => {
                return {
                    show: true,
                    imgShow: true,
                    type: "",
                    data: []
                }
            }
        },
        firstTitle:{
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {}
    },
    methods: {},
    mounted() { },
    template: `
<div class="img-div" v-if="imgData.show">
    <div class="img" :type="imgData.type" v-if="imgData.imgShow"></div>
    <div class="msg" :class="imgData.firstTitle?'first-title':''" :style="{'--w':(imgData.imgShow?(imgData.type=='rectangle'?'100px':'80px'):'0px')}">
        <div class="omit" v-for="(item, index) in imgData.data" :key="index">
            {{item}}
        </div> 
        <slot></slot>
    </div>
</div>
`
})