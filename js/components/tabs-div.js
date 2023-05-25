// <tabs-div left>
//     <template #header>
//         <div style="width: 100%;height: 40px;margin:5px 10px;background-color: #000;">

//         </div>
//     </template>
//     <tab-div label="基本信息">基本信息</tab-div>
//     <tab-div label="销售合同">销售合同 </tab-div>
//     <tab-div label="发票">发票 </tab-div>
//     <tab-div label="内容">内容</tab-div>
//     <tab-div label="项目成员">项目成员 </tab-div>
//     <tab-div label="项目日志">项目日志 </tab-div>
//     <template #footer>
//         <div style="width: 100%;height: 40px;text-align: center;line-height: 40px;background-color: #f9f9f9;">
//             智能识别

//         </div>
//     </template>
// </tabs-div>


Vue.component("tabs-div", {
    props: {
        left: {
            type: Boolean
        }
    },
    data() {
        return {
            activeIndex: 0,
            titles: []
        }
    },
    methods: {
        changeVm(value) {
            this.activeIndex = value
            this.titles.forEach((item, index) => {
                const {
                    vm
                } = item
                if (index == value) {
                    vm.$set(vm, "isShow", true)
                } else {
                    vm.$set(vm, "isShow", false)
                }
            })
        }
    },
    mounted() {
        this.titles = this.$children.map((item, index) => {
            if (!index) item.$set(item, "isShow", true)
            return {
                label: item.label,
                vm: item
            }
        })
        console.log(this)
    },
    template: `<div class="tabs-div" :class="left?'left':'top'">
        <div class="tabs-div-label"> 
            <slot name="header"></slot> 
            <div v-for="(item, index) in titles" :class="activeIndex==index?'active':''" :key="index" @click="changeVm(index)">
                {{item.label}}
            </div>
            <slot name="footer"></slot> 
        </div>
        <div class="tabs-div-main"><slot></slot></div>
    </div>`
})
Vue.component("tab-div", {
    props: ["label"],
    data() {
        return {
            isShow: false
        }
    },
    mounted() {
        console.log(this.label)
    },
    template: `<div class="tab-div" v-show="isShow"><slot></slot></div>`
})