Vue.component('echarts-div', {
    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        titleIcon: {
            type: String
        },
        styleObject: {
            type: Object
        },
        option: {
            type: Object
        }
    },
    data() {
        return {
            myChart: null,
        }
    },
    methods: {
        changeOption() {
            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(this.option);
        }
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例 
        this.myChart = echarts.init(document.getElementById('echarts-main' + this.id));
        console.log("this.option", this.option)
        this.changeOption()
    },
    watch: {
        styleObject: function(n, o) {
            const { width, height } = n
            this.myChart.getDom().style.width = width
            this.myChart.getDom().style.height = height
            this.myChart.resize()
        },
    },
    template: `
                <div class="echarts-div">
                    <title-div :title="title" :title-icon="titleIcon" />
                    <div class="main" :id="'echarts-main'+id"> 
                    </div>
                </div>`
})