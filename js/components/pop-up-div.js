var PopUpDiv = Vue.component('pop-up-div', {
    props: {
        a1:{
            type:String
        }
    },
    data: function() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
    <div class="pop-up-div">
    {{a1}}
    </div>
`
})

function showPopUpDiv(Component) {
    const div = document.createElement("div")
    div.setAttribute("id","app-pop-up-div")
    const app = new Component().$mount()
    app.$set(app._props,"a1","123")
    console.log(app)
    div.appendChild(app.$el)
    document.body.appendChild(div)
}
showPopUpDiv(PopUpDiv)