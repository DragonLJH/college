

var ExtendDiv = Vue.component("content-div", {
    data() {
        return {

        }
    },
    template: `<div class="content-div">
        <div class="title"></div>
        <div class="main"><div id="main-item"></div></div>
        <div class="footer">

        </div>
    </div>`
})
var MainDiv = Vue.component("main-div", {
    props: {
        a1: {
            type: String
        }
    },
    template: `<div class="main-div">{{a1}}--{{a1}}</div>`
})
function TargetDiv(component, config = {}) {
    const attrs = Object.entries(config).map(([k, v]) => k + "=" + v)
    const template = `<component ${attrs} is="${component}"></component>`
    const app = Vue.extend({
        template
    })
    new app().$mount("#main-item")
}

function openMask(component, w = 500, h = 500, config = { a1: "asdzxaksdu" }) {
    const app = new ExtendDiv()
    app.$mount()
    const div = document.createElement("div")
    div.setAttribute("id", "mask")
    div.setAttribute("style", `--w:${w}px;--h:${h}px`)
    div.appendChild(app.$el)
    document.body.append(div)
    TargetDiv(component, config)

}
// openMask("main-div")