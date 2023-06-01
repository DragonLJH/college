Vue.component("btns", {
    props: ["label"],
    computed: {
        isShow() {
            return Object.keys(this.$slots).length
        }
    },
    mounted() {},
    template: `
        <div class="btns" @click="$emit('click')">
            <div class="btns-item">{{label}}</div> 
            <div class="btns-item-extends" v-if="isShow">
                <slot></slot>
            </div>  
        </div> 
    `
})


Vue.component("sqs-div", {
    props: ["label"],
    data() {
        return {
            list: [{
                    show: true,
                    firstTitle: true,
                    type: "rectangle",
                    data: ["阿斯顿", "离开家啊啥的", "离开家啊啥的"]
                },
                {
                    show: true,
                    firstTitle: true,
                    type: "rectangle",
                    data: ["阿斯顿", "离开家啊啥的", "离开家啊啥的"]
                },
            ]
        }
    },
    methods: {
        search() {
            console.log('search')
        },
        addItem() {
            console.log('addItem')
        }
    },
    mounted() {},
    template: `
        <tabs-div left>
            <template #header>
                <div style="width: 100%;height: 40px;margin:5px 10px;background-color: #000;">
                    
                </div>
            </template>
            <tab-div label="文件">
                <div class="search-right" style="width: 100%;display: flex;justify-content:right;gap: 10px;">
                    <input type="text" placeholder="名称查找">
                    <btns label="查找" @click="search"></btns>
                    <btns label="+ 增加">
                        <div @click.stop="addItem">上传</div>
                        <div @click.stop="addItem">从模板生产</div>
                    </btns>
                </div>
                <div v-for="(item, index) in list" :key="index" style="margin-top:10px;padding: 5px 0;box-shadow: 1px 1px 1px 1px #000;background-color: #f9ffff;">
                    <img-div :img-data="item"></img-div>
                </div>
            </tab-div>
            <tab-div label="内容">内容</tab-div>
            <tab-div label="模板">模板</tab-div>
            <template #footer>
                <div style="width: calc(100% - 10px);height: 40px;text-align: center;line-height: 40px;background-color: #f9f9f9;position: absolute;bottom: 0;left: 0;">
                    录入完毕
                </div>
            </template>
        </tabs-div> 
    `
})