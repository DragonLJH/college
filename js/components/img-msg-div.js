Vue.component('img-msg-div', {
    props: {
        imgsrc: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        msg: {
            type: String,
            default: ""
        },
        progress: {
            type: Object,
            default: () => {
                return {
                    progressNow: 4,
                    progressAll: 10,
                    progressMsg: [
                        {
                            title: "合同",
                            msg: ["合同总金额：42,399,320", "《工业和信息化产业XXXXXXXX》"],
                            subordinate: [
                                {
                                    title: "发票",
                                    msg: ["应开发票总额：42,399,320", "已开发票总额：17,235,345", "未开发票总额：25,163,975"],
                                }
                            ]

                        },
                        {
                            title: "合同",
                            msg: ["合同总金额：42,399,320", "《工业和信息化产业XXXXXXXX》"],
                            subordinate: [
                                {
                                    title: "发票",
                                    msg: ["应开发票总额：42,399,320", "已开发票总额：17,235,345", "未开发票总额：25,163,975"],
                                }
                            ]

                        },
                    ]
                }
            }
        },
    },
    data: function () {
        return {}
    },
    methods: {},
    mounted() { },
    template: `
<div>
    <div class="main">
        asd
    </div>
</div>
`

})