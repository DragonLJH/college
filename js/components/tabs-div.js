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

var TableDiv = Vue.component("table-div", {
    mixins: [mixinMask],
    methods: {
        tClick() {
            this.mask._initMask({
                w: 1000,
                h: 500,
                component: "sqs-div",
                config: {}
            })
        }
    },
    template: `<tabs-div left>
    <template #header>
        <div style="width: 100%;height: 40px;margin:5px 10px;background-color: #000;">
             
        </div>
    </template>
    <tab-div label="基本信息">
        <table class="app-table">
            <tr>
                <th>名称</th>
                <td>高新技术企业认证</td>
                <th>年度</th>
                <td>2022</td>
            </tr>
            <tr>
                <th>客户</th>
                <td>中国移动通信 (香港)有限公司</td>
                <th>本单位</th>
                <td>广东省XXXXX有限公司</td>
            </tr>
            <tr>
                <th>类别</th>
                <td>高新技术企业认证 (新增)</td>
                <th>地区</th>
                <td>广东省-广州市</td>
            </tr>
            <tr>
                <th>编号</th>
                <td>GD02-20221011-0321</td>
                <th>创建时间</th>
                <td>2022-10-09</td>
            </tr>
            <tr>
                <th>合同金额</th>
                <td>未获取</td>
                <th>业务负责人</th>
                <td>张三</td>
            </tr>
            <tr>
                <th>标签</th>
                <td>标签一、标签二、标签三、标签四、标签五</td>
                <th>状态</th>
                <td>进行中</td>
            </tr>
            <tr>
                <th>备注</th>
                <td colspan="3" style="width: 85%;">1、所得税率优惠。按新的高新技术企业管理办法认定的高新技术企业享受79%的优惠所得税率。2、研发费用加计扣除。企业为开发新技术、新产品、新工艺发生的研究开发费用，未形成无形资产计入当期损益的，在按照规定据实扣除的基础上，按照研究开发费用的69%加计扣除，形成无形资产的，按照无形资产成本的769%摊销。 (需另行申报)3、对符合条件的高新技术企业认定通过奖励申请企业，由市、区两级财政按照一定比例，给予每家84万元资金奖励。(需另行申报)并 对以下情况企业给予额外奖励:(1)纳入年度统计调查范国的规模以上企业，可给予额外奖励64万元，共奖励744万元。(2)对研发投入较大的非规模以上企业，可根据企业3472年度经税务部门审核的可税前加计扣除研发费用状况给予额外奖励:企业研发费用投入在344万元(含)到7444万元(不含)的，额外奖励34万元，共奖励9万元;在7444万元(含)以上的，额外奖励64万元，共奖励744万元。
                </td>
            </tr>
        </table>
    </tab-div>
    <tab-div label="销售合同">销售合同 </tab-div>
    <tab-div label="发票">发票 </tab-div>
    <tab-div label="内容">内容</tab-div>
    <tab-div label="项目成员">项目成员 </tab-div>
    <tab-div label="项目日志">项目日志 </tab-div>
    <template #footer>
        <div @click="tClick" style="width: calc(100% - 10px);height: 40px;text-align: center;line-height: 40px;background-color: #f9f9f9;position: absolute;bottom: 0;left: 0;">
            智能识别
        </div>
    </template>
</tabs-div>`
})


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