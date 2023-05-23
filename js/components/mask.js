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
    _initMask(component, config = {}, w = 500, h = 500,) {
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
        // 
        div.appendChild(this._app.$el)
        const attrs = Object.entries(config).filter(([k,v])=>v).map(([k, v]) => k + "=" + v)
        const template = `<component ${attrs} is="${component}"></component>`
        const item = Vue.extend({
            template
        })
        this._item = new item()
        this._mask = div
    }
    open() {
        // 判定第一次挂载
        if (this._first) {
            document.body.append(this._mask)
            this._item.$mount("#main-item")
            this._first = false
        } else {
            document.body.append(this._mask)
        }

    }
    close() {
        document.body.removeChild(this._mask)
    }

    _VueContentDiv() {
        return Vue.component("content-div", {
            data() {
                return {}
            },
            template: `
            <div class="content-div">
                <div class="title"></div>
                <div class="main"><div id="main-item"></div></div>
                <div class="footer">

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