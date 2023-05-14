Vue.component('img-msg-div', {
    props: {
        imgData: {
            type: Object,
            default: () => {
                return {
                    show: true,
                    firstTitle: true,
                    type: "rectangle",
                    data: ["阿斯顿", "离开家啊啥的"]
                }
            }
        },
        title: {
            type: String,
            default: ""
        },
        titleIcon: {
            type: String,
            default: ""
        },
        progress: {
            type: Object,
            default: () => {
                return {
                    show: true,
                    pace: "40%",
                    name: "4/10",
                    setting: false
                }
            }
        },
        progressMsg: {
            type: Array,
            default: () => {
                return [
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
        },
    },
    data: function () {
        return {}
    },
    methods: {},
    mounted() { },
    template: `
<div class="img-msg-div">
    <title-div :title="title" :title-icon="titleIcon"/>
    <div class="main">
        <img-div :img-data="imgData">
            <progress-div :progress="progress"></progress-div>
        </img-div>
    </div>
</div>
`

})