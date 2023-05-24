var MainDiv = Vue.component("main-div", {
    props: {
        a1: {
            type: String
        },
        list: {
            type: Array
        }
    },
    mounted() {
        console.log(this.list)
    },
    template: `
    <div class="main-div">
        <div class="slot"><slot></slot></div>
        <div>{{a1}}</div>
        <div v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
    `
})
var Main2Div = Vue.component("main2-div", {
    props: {
        a2: {
            type: String
        }
    },
    template: `
    <div class="main2-div"> {{a2}}
    </div>
    `
})

class Mask {
    _app;
    _item;
    _mask;
    _first;
    constructor() {
        // 初始化弹窗框架
        const App = this._VueContentDiv()
        this._app = new App().$mount()
        // 添加判定
        this._first = true;
    }

    // 初始化并添加内容框架
    _initMask(options) {
        let {
            title,
            component,
            config,
            w = 500,
            h = 500,
        } = options

        // 创建 遮罩层
        const div = document.createElement("div")
        div.setAttribute("id", "mask")

        // 修改弹窗框架宽高
        div.setAttribute("style", `--w:${w}px;--h:${h}px`)

        // 遮罩层添加关闭事件
        div.onclick = (e) => {
            if (e.target.id == "mask") {
                this.close()
            }
        }

        // 弹窗标题
        this._app.$set(this._app, "title", (title ? title : ""))

        // 遮罩层添加内容框架
        div.appendChild(this._app.$el)

        // 判断 component 是否为字符串
        if (Object.prototype.toString.call(component) == '[object String]') {
            const attrs = Object.keys(config).map(k => `:${k}="${k}"`)
            component = Vue.extend({
                props: Object.keys(config),
                template: `<component ${attrs.join(" ")} is="${component}"></component>`
            })
        }

        // 内容框架内部挂载组件
        const item = new component().$mount(this._app.$el.children[1].firstChild)
        Object.entries(config).forEach(([k, v]) => {
            item.$set(item, k, v)
        })
        this._mask = div
        this.open()
    }

    // 打开弹窗
    open() {
        document.body.append(this._mask)
    }

    // 关闭弹窗
    close() {
        document.body.removeChild(this._mask)
    }

    // 弹窗框架实例
    _VueContentDiv() {
        let that = this
        return Vue.component("content-div", {
            props: ['title'],
            data() {
                return {
                    titleIcon: []
                }
            },
            methods: {
                close() {
                    that.close()
                }
            },
            template: `
            <div class="content-div">
                <div class="title">
                    <div class="title-msg">
                        {{title}}
                    </div>
                    <div class="title-operation">
                        <div class="icon" :class="item" v-for="(item, index) in titleIcon" :key="index">
                        
                        </div>
                        <div class="icon close" @click="close">
                        
                        </div>
                    </div>
                </div>
                <div class="main"><div id="main-item"></div></div>
                <div class="footer">
                    <div class="close" @click="close">关闭</div> 
                </div>
            </div>
            `
        })
    }
}
// const mask = new Mask()
// mask._initMask("main-div", {
//     a1: "123456"
// })
// mask.open()